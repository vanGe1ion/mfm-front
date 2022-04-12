import React, { FC } from "react";
import approveIco from "@media/approve.svg";
import dismissIco from "@media/dismiss.svg";
import { IMovieControlProps } from "./types";
import IconedButton from "@components/IconedButton";
import {
  LSAPIRemoveFavouriteMovie,
  LSAPIUpdateFavouriteMovie,
} from "@utils/localStorageAPI";

const MovieControl: FC<IMovieControlProps> = ({
  movieId,
  index,
  title,
  setMovies,
}) => {
  const removeMovieHandler = () => {
    const removeConfirm = window.confirm(
      `Are your sure, you want to remove "${title}" from your favorite movies?`
    );
    if (removeConfirm) {
      LSAPIRemoveFavouriteMovie(movieId);
      setMovies((prev) => {
        const newMovies = [...prev];
        newMovies.splice(index, 1);
        return newMovies;
      });
    }
  };

  const toggleViewedMovieHandler = () => {
    LSAPIUpdateFavouriteMovie(movieId!);
    setMovies((prev) => {
      const newMovies = [...prev];
      newMovies[index].isViewed = !newMovies[index].isViewed;
      return newMovies;
    });
  };

  return (
    <>
      <IconedButton
        indents="3px"
        colorInvert
        src={approveIco}
        onClick={toggleViewedMovieHandler}
      />
      <IconedButton
        indents="3px"
        colorInvert
        src={dismissIco}
        onClick={removeMovieHandler}
      />
    </>
  );
};

export default MovieControl;
