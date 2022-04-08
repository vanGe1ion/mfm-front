import React, { FC } from "react";
import { LSAPISetFavouriteGenres } from "../../utils/localStorageAPI";
import Genre from "../UI/Genre";
import { GenresContainer, GenresHeader, GenresMain } from "./style";
import { IGenresPanelProps } from "./types";

const GenresPanel: FC<IGenresPanelProps> = ({ genres, setGenres }) => {
  const GenreClickHandler = (genreIdx: number): void => {
    setGenres((prev) => {
      const newGenres = [...prev];
      newGenres[genreIdx] = {
        ...newGenres[genreIdx],
        isFavourite: !prev[genreIdx].isFavourite,
      };

      const favoritesIdx = newGenres
        .filter((genre) => genre.isFavourite)
        .map((genre) => genre.id);
      LSAPISetFavouriteGenres(favoritesIdx);

      return newGenres;
    });
  };

  return (
    <GenresMain>
      <GenresHeader>Your favorite genres</GenresHeader>
      <GenresContainer>
        {genres.map((genre, index) => {
          return (
            <Genre
              key={genre.id}
              checked={genre.isFavourite}
              onClick={() => GenreClickHandler(index)}
            >
              {genre.name}
            </Genre>
          );
        })}
      </GenresContainer>
    </GenresMain>
  );
};

export default GenresPanel;
