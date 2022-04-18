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
  const [async, setAsync] = useState<boolean>(false);

  useEffect(() => {
    if (isFavouriteMovies) {
      const favouriteMovies = LSAPIGetFavouriteMovies();
      setMovies(favouriteMovies);
    }
  }, []);

  const removeFromFavourite = (movieId: number): void => {
    const currentMovie = movies.find((movie) => movie.id === movieId);
    const removeConfirm = window.confirm(
      `Are your sure, you want to remove "${
        currentMovie!.title
      }" from your favorite movies?`
    );
    if (removeConfirm) {
      LSAPIRemoveFavouriteMovie(movieId);
      movieChangeState(movieId, (movie, idx) => {
        movie.splice(idx, 1);
      });
    }
  };

  const addToFavourite = (movieId: number): void => {
    const currentMovie = movies.find((movie) => movie.id === movieId);
    LSAPIAddFavouriteMovie(currentMovie!);
    movieChangeState(movieId, (movie, idx) => {
      movie[idx].isFavourite = true;
    });
  };

  const toggleViewed = (movieId: number): void => {
    LSAPIUpdateFavouriteMovie(movieId);
    movieChangeState(movieId, (movie, idx) => {
      movie[idx].isViewed = !movie[idx].isViewed;
    });
  };

  const movieChangeState = (
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
    searchParams: IGetMoviesParams
  ): Promise<void> => {
    // if (!async) {
    //   setAsync(true);
      const searchResult = await tmdbGetDiscover(searchParams);
      const searchedMovies = identifyMovies([...searchResult.movies]);
      let movieList: IMovie[] = [...searchedMovies];
      const viewedPages =
        searchResult.totalPages > TMDBSearchLimitPage
          ? TMDBSearchLimitPage
          : searchResult.totalPages;

      for (let i = 2; i <= viewedPages; ++i) {
        const nextSearchResult = await tmdbGetDiscover({
          ...searchParams,
          page: i,
        });
        const nextSearchedMovies = identifyMovies([...nextSearchResult.movies]);
        movieList = [...movieList, ...nextSearchedMovies];
      }

      setMovies(() => movieList);
    // }
    // setAsync(false);
  };

  const identifyMovies = (movies: IMovie[]) => {
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
