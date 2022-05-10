import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { TMDB_SEARCH_LIMIT_PAGE } from "@config";
import { useUserContext } from "@context/userContext";
import { IGenre, IGetMoviesParams, IMovie } from "@globalTypes";
import { ADD_MOVIE, REMOVE_MOVIE, UPDATE_MOVIE } from "@mutations/movie";
import { FIND_MOVIES, GET_GENRES } from "@queries/api";
import { USER_MOVIES, USER_MOVIES_IDS } from "@queries/user";
import { useEffect, useMemo, useState } from "react";
import {
  IAddMovieResp,
  IAddMovieVars,
  IFindMoviesResp,
  IFindMoviesVars,
  IGetGenresResp,
  IRemoveMovieResp,
  IRemoveMovieVars,
  IUpdateMovieResp,
  IUpdateMovieVars,
  IUseMovies,
  IUserMoviesIdsResp,
  IUserMoviesIdsVars,
  IUserMoviesResp,
  IUserMoviesVars,
} from "./types";

const useMovies = (isFavouriteMovies: boolean): IUseMovies => {
  const { currentUser } = useUserContext();
  const currentUserId = Number(currentUser!.id);
  const [coreMovies, setCoreMovies] = useState<IMovie[]>([]);

  //favourite movies ids (for search page)
  const [
    userMoviesIds,
    { data: userMoviesIdsData, refetch: refetchUserMoviesIds },
  ] = useLazyQuery<IUserMoviesIdsResp, IUserMoviesIdsVars>(USER_MOVIES_IDS, {
    variables: { id: currentUserId },
  });
  const favouriteMoviesIds = useMemo<number[]>(() => {
    if (userMoviesIdsData)
      return userMoviesIdsData.getUserById.movies.map(({ movieId }) => movieId);
    return [];
  }, [userMoviesIdsData]);

  //favourite films
  const [userMovies, { data: userMoviesdata, refetch: refetchUserMovies }] =
    useLazyQuery<IUserMoviesResp, IUserMoviesVars>(USER_MOVIES, {
      variables: { id: currentUserId },
    });

  useEffect(() => {
    if (isFavouriteMovies) {
      userMovies()
        .then((res) => {
          setCoreMovies(res.data!.getUserById.movies);
        })
        .catch((error) => {
          setCoreMovies([]);
          console.log(`Favourite movies list loading error: ${error.message}`);
        });
    } else userMoviesIds();
  }, [userMoviesdata]);

  //genres
  const { data: genreData } = useQuery<IGetGenresResp>(GET_GENRES);

  const genres = useMemo<IGenre[]>(() => {
    if (genreData)
      return genreData.getGenres.map(({ id, name }) => {
        return { id, name } as IGenre;
      });
    return [];
  }, [genreData]);

  //searching movies
  const [findMovies] = useLazyQuery<IFindMoviesResp, IFindMoviesVars>(
    FIND_MOVIES
  );

  const searchMovies = async (
    searchFilters: IGetMoviesParams
  ): Promise<void> => {
    const { withGenres } = searchFilters;
    let movieList: IMovie[] = [];

    if (withGenres!.length > 0) {
      const searchResult = await findMovies({
        variables: { findMoviesInputDto: searchFilters },
      });

      if (searchResult.data) {
        const { movies, totalPages } = searchResult.data.findMovies;
        movieList = [...movies];
        const viewedPages =
          totalPages > TMDB_SEARCH_LIMIT_PAGE
            ? TMDB_SEARCH_LIMIT_PAGE
            : totalPages;

        for (let i = 2; i <= viewedPages; ++i) {
          const nextSearchResult = await findMovies({
            variables: { findMoviesInputDto: { ...searchFilters, page: i } },
          });
          if (nextSearchResult.data)
            movieList = [
              ...movieList,
              ...nextSearchResult.data.findMovies.movies,
            ];
        }
      }
    }

    setCoreMovies(movieList);
  };

  //movies output
  const movies = useMemo<IMovie[]>(() => {
    const genreById = new Map(genres.map((genre) => [genre.id, genre]));

    return coreMovies.map(
      (movie) =>
        ({
          ...movie,
          genres: movie.genreIds
            .map((genreId) => genreById.get(genreId)?.name)
            .filter(Boolean),
          isFavourite: isFavouriteMovies
            ? true
            : favouriteMoviesIds.includes(movie.movieId),
        } as IMovie)
    );
  }, [coreMovies, genres, favouriteMoviesIds]);

  //add movie
  const [addMovie] = useMutation<IAddMovieResp, IAddMovieVars>(ADD_MOVIE);

  const addToFavourite = (addMovieId: number): void => {
    const currentMovie = coreMovies.find(
      (movie) => movie.movieId === addMovieId
    );
    if (!currentMovie) return;
    const { __typename, ...rest } = currentMovie as IMovie & {
      __typename: string;
    };
    addMovie({
      variables: { addMovieDto: { ...rest, userId: currentUserId } },
    })
      .then(() => refetchUserMoviesIds())
      .catch((error) => console.log(`Add movie error: ${error.message}`));
  };

  //remove movie
  const [removeMovie] = useMutation<IRemoveMovieResp, IRemoveMovieVars>(
    REMOVE_MOVIE
  );

  const removeFromFavourite = (removeMovieId: number): void => {
    const currentMovie = coreMovies.find(
      (movie) => movie.movieId === removeMovieId
    );
    if (!currentMovie) return;
    const isConfirmed = window.confirm(
      `Are your sure, you want to remove "${currentMovie.title}" from your favorite movies?`
    );
    if (isConfirmed) {
      const { movieId } = currentMovie;
      removeMovie({
        variables: { removeMovieDto: { movieId, userId: currentUserId } },
      })
        .then(() => refetchUserMovies())
        .catch((error) =>
          console.error(`Remove movie error: ${error.message}`)
        );
    }
  };

  //update movie
  const [updateMovie] = useMutation<IUpdateMovieResp, IUpdateMovieVars>(
    UPDATE_MOVIE
  );

  const toggleViewed = (updateMovieId: number): void => {
    const currentMovie = coreMovies.find(
      (movie) => movie.movieId === updateMovieId
    );
    if (!currentMovie) return;
    const { movieId, isViewed } = currentMovie;
    updateMovie({
      variables: {
        updateMovieDto: { movieId, userId: currentUserId, isViewed: !isViewed },
      },
    })
      .then(() => refetchUserMovies())
      .catch((error) => console.error(`Update movie error: ${error.message}`));
  };

  return {
    movies,
    searchMovies,
    addToFavourite,
    removeFromFavourite,
    toggleViewed,
  };
};

export default useMovies;
