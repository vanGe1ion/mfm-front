import React, { FC, useEffect, useState } from "react";
import { IGenre } from "../../types";
import {
  LSAPIGetFavouriteGenres,
  LSAPISetFavouriteGenres,
} from "../../utils/localStorageAPI";
import { tmdbGetGenres } from "../../utils/tmdbAPI";
import Genre from "../UI/Genre";
import { GenresContainer, GenresHeader, GenresMain } from "./style";

const GenresPanel: FC = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    tmdbGetGenres()
      .then((data) => {
        const favoriteIdx = LSAPIGetFavouriteGenres();
        data.genres.map(
          (genre) => (genre.isFavourite = favoriteIdx.includes(genre.id))
        );
        setGenres(data.genres);
      })
      .catch((error: Error) => console.log("Genre list loading error: ", error));
  }, []);

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
      <GenresHeader>Chose your favorite genres</GenresHeader>
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
