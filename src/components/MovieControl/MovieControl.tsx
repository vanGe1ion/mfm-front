import React, { FC } from "react";
import approveIco from "@media/approve.svg";
import dismissIco from "@media/dismiss.svg";
import addIco from "@media/add.svg";
import { IMovieControlProps } from "./types";
import IconedButton from "@components/IconedButton";

const MovieControl: FC<IMovieControlProps> = ({
  movieId,
  title,
  controls,
  isFavourite,
}) => {
  const { toggleViewed, removeFromFavourite, addToFavourite } = controls;

  return (
    <>
      {toggleViewed && (
        <IconedButton
          indents="3px"
          colorInvert
          src={approveIco}
          onClick={() => toggleViewed(movieId)}
        />
      )}
      {removeFromFavourite && (
        <IconedButton
          indents="3px"
          colorInvert
          src={dismissIco}
          onClick={() => removeFromFavourite(movieId, title)}
        />
      )}
      {addToFavourite && (
        <IconedButton
          disabled={isFavourite}
          indents="3px"
          colorInvert
          src={addIco}
          onClick={() => addToFavourite(movieId)}
        />
      )}
    </>
  );
};

export default MovieControl;
