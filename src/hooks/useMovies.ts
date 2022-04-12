import { IMovie } from "@globalTypes";
import {
  LSAPIAddFavouriteMovie,
  LSAPIGetFavouriteMovies,
  LSAPIRemoveFavouriteMovie,
  LSAPIUpdateFavouriteMovie,
} from "@utils/localStorageAPI";
import { useEffect, useState } from "react";
import { IUseMovies } from "./types";

const useMovies = (isFavouriteMovies: boolean): IUseMovies => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (isFavouriteMovies) {
      const favouriteMovies = LSAPIGetFavouriteMovies();
      setMovies(favouriteMovies);
    }
    else{
      //todo search
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
      setMovies((prev) => {
        const newMovies = [...prev];
        const movieIdx = newMovies.findIndex((movie) => movie.id === movieId);
        newMovies.splice(movieIdx, 1);
        return newMovies;
      });
    }
  };

  const addToFavourite = (movieId: number): void => {
    const currentMovie = movies.find((movie) => movie.id === movieId);
    LSAPIAddFavouriteMovie(currentMovie!);
  };

  const toggleViewed = (movieId: number): void => {
    LSAPIUpdateFavouriteMovie(movieId);
    setMovies((prev) => {
      const newMovies = [...prev];
      const movieIdx = newMovies.findIndex((movie) => movie.id === movieId);
      newMovies[movieIdx].isViewed = !newMovies[movieIdx].isViewed;
      return newMovies;
    });
  };

  return { movies, addToFavourite, removeFromFavourite, toggleViewed };
};

export default useMovies;
