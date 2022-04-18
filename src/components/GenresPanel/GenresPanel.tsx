import React, { FC } from "react";
import Genre from "@UI/Genre";
import useGenres from "@hooks/useGenres";
import { IGenresPanelProps } from "./types";
import BorderedSegment from "@components/BorderedSegment/BorderedSegment";

const GenresPanel: FC<IGenresPanelProps> = ({ isSaveMode }) => {
  const { genres, toggleFavouriteGenre } = useGenres(isSaveMode);

  return (
    <BorderedSegment title="Your favourite genres" marginLeft="-12rem" width="auto">
      {genres.map(({ id, isFavourite, name }) => {
        return (
          <Genre
            key={id}
            checked={isFavourite}
            onClick={() => toggleFavouriteGenre(id)}
          >
            {name}
          </Genre>
        );
      })}
    </BorderedSegment>
  );
};

export default GenresPanel;
