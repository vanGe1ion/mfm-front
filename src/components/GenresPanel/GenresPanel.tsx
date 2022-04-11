import React, { FC } from "react";
import { IGenre } from "@globalTypes";
import { LSAPISetFavouriteGenres } from "@utils/localStorageAPI";
import Genre from "@UI/Genre";
import { GenresContainer, GenresHeader, GenresMain } from "./style";
import { IGenresPanelProps } from "./types";

const GenresPanel: FC<IGenresPanelProps> = ({ genres, setGenres }) => {
  const toggleGenreHandler = (genreId: number): void => {
    const newGenres = [...genres];
    const foundGenre = genres.find((genre) => genre.id === genreId);
    const { isFavourite } = foundGenre!;
    const index = newGenres.indexOf(foundGenre!);
    newGenres[index] = { ...foundGenre, isFavourite: !isFavourite } as IGenre;
    setGenres(newGenres);

    const favoritesIdx = newGenres
      .filter((genre) => genre.isFavourite)
      .map((genre) => genre.id);
    LSAPISetFavouriteGenres(favoritesIdx);
  };

  return (
    <GenresMain>
      <GenresHeader>Your favorite genres</GenresHeader>
      <GenresContainer>
        {genres.map(({ id, isFavourite, name }) => {
          return (
            <Genre
              key={id}
              checked={isFavourite}
              onClick={() => toggleGenreHandler(id)}
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
