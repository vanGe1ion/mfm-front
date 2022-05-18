import { useQuery, useMutation } from "@apollo/client";
import { TMDB_SEARCH_LIMIT_PAGE } from "@config";
import { IGetMoviesParams, IMovie } from "@globalTypes";
import { ADD_MOVIE, REMOVE_MOVIE, UPDATE_MOVIE } from "@mutations/movie";
import { FIND_MOVIES_WITH_FAVOURITES } from "@queries/api";
import { USER_MOVIES } from "@queries/user";
import { useEffect, useState } from "react";
import {
  IUserMoviesResp,
  IFindMoviesResp,
  IFindMoviesVars,
  IAddMovieResp,
  IAddMovieVars,
  IRemoveMovieResp,
  IRemoveMovieVars,
  IUpdateMovieResp,
  IUpdateMovieVars,
  IUseMovies,
} from "./types";

const useMovies = (isFavouriteMovies: boolean): IUseMovies => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { refetch: userMovies } = useQuery<IUserMoviesResp>(USER_MOVIES, {
    skip: true,
  });

  const getUserMovies = (): void => {
    userMovies()
      .then((res) => {
        setMovies(res.data!.getUserById.movies);
      })
      .catch((error) => {
        setMovies([]);
        console.log(`Favourite movies list loading error: ${error.message}`);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isFavouriteMovies) getUserMovies();
  }, []);

  const { refetch: findMovies } = useQuery<IFindMoviesResp, IFindMoviesVars>(
    FIND_MOVIES_WITH_FAVOURITES,
    { skip: true }
  );

  const searchMovies = async (
    searchFilters: IGetMoviesParams
  ): Promise<void> => {
    const { withGenres } = searchFilters;
    let movieList: IMovie[] = [];

    if (withGenres!.length > 0) {
      setIsLoading(true);
      const searchResult = await findMovies({
        findMoviesInputDto: searchFilters,
      });

      if (searchResult.data) {
        const { movies, totalPages } =
          searchResult.data.findMoviesWithFavourites;
        movieList = [...movies];
        const viewedPages =
          totalPages > TMDB_SEARCH_LIMIT_PAGE
            ? TMDB_SEARCH_LIMIT_PAGE
            : totalPages;

        for (let i = 2; i <= viewedPages; ++i) {
          const nextSearchResult = await findMovies({
            findMoviesInputDto: { ...searchFilters, page: i },
          });
          if (nextSearchResult.data)
            movieList = [
              ...movieList,
              ...nextSearchResult.data.findMoviesWithFavourites.movies,
            ];
        }
      }
    }
    setIsLoading(false);
    setMovies(movieList);
  };

  const [addMovie] = useMutation<IAddMovieResp, IAddMovieVars>(ADD_MOVIE);

  const addToFavourite = (addMovieId: number): void => {
    const movieIdx = movies.findIndex((movie) => movie.movieId === addMovieId);
    const currentMovie = movies[movieIdx];
    const { __typename, isFavourite, ...movie } = currentMovie as IMovie & {
      __typename: string;
    };
    addMovie({
      variables: { addMovieDto: movie },
    })
      .then(() => {
        const newMovies = [...movies];
        const { isFavourite, ...rest } = currentMovie;
        newMovies[movieIdx] = { ...rest, isFavourite: !isFavourite };
        setMovies(newMovies);
      })
      .catch((error) => console.log(`Add movie error: ${error.message}`));
  };

  const [removeMovie] = useMutation<IRemoveMovieResp, IRemoveMovieVars>(
    REMOVE_MOVIE
  );

  const removeFromFavourite = (removeMovieId: number): void => {
    removeMovie({
      variables: {
        movieId: removeMovieId,
      },
    })
      .then(() => getUserMovies())
      .catch((error) => console.error(`Remove movie error: ${error.message}`));
  };

  const [updateMovie] = useMutation<IUpdateMovieResp, IUpdateMovieVars>(
    UPDATE_MOVIE
  );

  const toggleViewed = (updateMovieId: number): void => {
    const currentMovie = movies.find(
      ({ movieId }) => movieId === updateMovieId
    );
    if (!currentMovie) return;
    const { isViewed } = currentMovie;
    updateMovie({
      variables: {
        updateMovieDto: {
          movieId: updateMovieId,
          isViewed: !isViewed,
        },
      },
    })
      .then(() => getUserMovies())
      .catch((error) => console.error(`Update movie error: ${error.message}`));
  };

  return {
    movies,
    isLoading,
    searchMovies,
    addToFavourite,
    removeFromFavourite,
    toggleViewed,
  };
};

export default useMovies;
