import React, { FC } from "react";
import Genre from "@UI/Genre";
import { GenresContainer, GenresHeader, GenresMain } from "./style";
import useGenres from "@hooks/useGenres";
import { IGenresPanelProps } from "./types";

const GenresPanel: FC<IGenresPanelProps> = ({
  isSaveMode,
  }) => {
  const { genres, toggleFavouriteGenre } = useGenres(isSaveMode);

  return (
    <GenresMain>
      <GenresHeader>Your favorite genres</GenresHeader>
      <GenresContainer>
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
      </GenresContainer>
    </GenresMain>
  );
};

export default GenresPanel;
