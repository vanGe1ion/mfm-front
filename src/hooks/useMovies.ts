import { TMDBSearchLimitPage } from "@config";
import { IGetMoviesParams, IMovie } from "@globalTypes";
import {
  LSAPIAddFavouriteMovie,
  LSAPIGetFavouriteMovies,
  LSAPIGetFavouriteMoviesIds,
  LSAPIRemoveFavouriteMovie,
  LSAPIUpdateFavouriteMovie,
} from "@utils/localStorageAPI";
import { tmdbGetDiscover, tmdbGetGenres } from "@utils/tmdbAPI";
import { useEffect, useState } from "react";
import { IUseMovies } from "./types";

const useMovies = (isFavouriteMovies: boolean): IUseMovies => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const favouriteMoviesIds = LSAPIGetFavouriteMoviesIds();
  const genres = tmdbGetGenres();

  useEffect(() => {
    if (isFavouriteMovies) {
      const favouriteMovies = LSAPIGetFavouriteMovies();
      setMovies(favouriteMovies);
    }
  }, []);

  const removeFromFavourite = (movieId: number): void => {
    const currentMovie = movies.find((movie) => movie.id === movieId);
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
    const currentMovie = movies.find((movie) => movie.id === movieId);
    LSAPIAddFavouriteMovie(currentMovie!);
    mutateMovie(movieId, (movie, idx) => {
      movie[idx].isFavourite = true;
    });
  };

  const toggleViewed = (movieId: number): void => {
    LSAPIUpdateFavouriteMovie(movieId);
    mutateMovie(movieId, (movie, idx) => {
      movie[idx].isViewed = !movie[idx].isViewed;
    });
  };

  const mutateMovie = (
    movieId: number,
    callback: (movies: IMovie[], movieIdx: number) => void
  ) => {
    setMovies((prev) => {
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
    const searchedMovies = await identifyMovies([...searchResult.movies]);
    let movieList: IMovie[] = [...searchedMovies];
    const viewedPages =
      searchResult.totalPages > TMDBSearchLimitPage
        ? TMDBSearchLimitPage
        : searchResult.totalPages;

    for (let i = 2; i <= viewedPages; ++i) {
      const nextSearchResult = await tmdbGetDiscover({
        ...searchFilters,
        page: i,
      });
      const nextSearchedMovies = await identifyMovies([
        ...nextSearchResult.movies,
      ]);
      movieList = [...movieList, ...nextSearchedMovies];
    }

    setMovies(() => movieList);
  };

  const identifyMovies = async (movies: IMovie[]) => {
    movies.map(async (movie) => {
      movie.isFavourite = favouriteMoviesIds.includes(movie.id);
      movie.genres = (await genres).genres
        .filter((genre) => movie.genreIds.includes(genre.id))
        .map((genre) => genre.name);
    });
    return movies;
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
