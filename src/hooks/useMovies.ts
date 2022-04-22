import { TMDB_SEARCH_LIMIT_PAGE } from "@config";
import { IGenre, IGetMoviesParams, IMovie } from "@globalTypes";
import {
  LSAPIAddFavouriteMovie,
  LSAPIGetFavouriteMovies,
  LSAPIGetFavouriteMoviesIds,
  LSAPIRemoveFavouriteMovie,
  LSAPIUpdateFavouriteMovie,
} from "@utils/localStorageAPI";
import { tmdbGetDiscover, tmdbGetGenres } from "@utils/tmdbAPI";
import { useEffect, useMemo, useState } from "react";
import { IUseMovies } from "./types";

const useMovies = (isFavouriteMovies: boolean): IUseMovies => {
  const [coreMovies, setCoreMovies] = useState<IMovie[]>([]);
  const favouriteMoviesIds = LSAPIGetFavouriteMoviesIds();
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    if (isFavouriteMovies) {
      const favouriteMovies = LSAPIGetFavouriteMovies();
      setCoreMovies(favouriteMovies);
    }
    tmdbGetGenres()
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((error: Error) =>
        console.log("Genre list loading error: ", error)
      );
  }, []);

  const removeFromFavourite = (movieId: number): void => {
    const currentMovie = coreMovies.find((movie) => movie.id === movieId);
    const isConfirmed = window.confirm(
      `Are your sure, you want to remove "${
        currentMovie!.title
      }" from your favorite movies?`
    );
    if (isConfirmed) {
      LSAPIRemoveFavouriteMovie(movieId);
      mutateMovie(movieId, (movie, idx) => {
        movie.splice(idx, 1);
      });
    }
  };

  const addToFavourite = (movieId: number): void => {
    const currentMovie = coreMovies.find((movie) => movie.id === movieId);
    LSAPIAddFavouriteMovie(currentMovie!);
    mutateMovie(movieId, (movie, idx) => {
      const { isFavourite, ...rest } = movie[idx];
      movie[idx] = { ...rest, isFavourite: !isFavourite };
    });
  };

  const toggleViewed = (movieId: number): void => {
    LSAPIUpdateFavouriteMovie(movieId);
    mutateMovie(movieId, (movie, idx) => {
      const { isViewed, ...rest } = movie[idx];
      movie[idx] = { ...rest, isViewed: !isViewed };
    });
  };

  const mutateMovie = (
    movieId: number,
    callback: (movies: IMovie[], movieIdx: number) => void
  ) => {
    setCoreMovies((prev) => {
      const newMovies = [...prev];
      const movieIdx = newMovies.findIndex((movie) => movie.id === movieId);
      callback(newMovies, movieIdx);
      return newMovies;
    });
  };

  const searchMovies = async (
    searchFilters: IGetMoviesParams
  ): Promise<void> => {
    const searchResult = await tmdbGetDiscover(searchFilters);
    let movieList: IMovie[] = [...searchResult.movies];
    const viewedPages =
      searchResult.totalPages > TMDB_SEARCH_LIMIT_PAGE
        ? TMDB_SEARCH_LIMIT_PAGE
        : searchResult.totalPages;

    for (let i = 2; i <= viewedPages; ++i) {
      const nextSearchResult = await tmdbGetDiscover({
        ...searchFilters,
        page: i,
      });
      movieList = [...movieList, ...nextSearchResult.movies];
    }

    setCoreMovies(() => movieList);
  };

  const movies = useMemo(() => {
    const genreById = new Map(genres.map((genre) => [genre.id, genre]));

    return coreMovies.map(
      (movie) =>
        ({
          ...movie,
          genres: movie.genreIds
            .map((genreId) => genreById.get(genreId)?.name)
            .filter(Boolean),
          isFavourite: favouriteMoviesIds.includes(movie.id),
        } as IMovie)
    );
  }, [coreMovies, genres, favouriteMoviesIds]);

  return {
    movies,
    searchMovies,
    addToFavourite,
    removeFromFavourite,
    toggleViewed,
  };
};

export default useMovies;
