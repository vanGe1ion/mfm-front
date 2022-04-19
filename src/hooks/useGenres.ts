import { IGenre } from "@globalTypes";
import {
  LSAPIGetFavouriteGenres,
  LSAPIToggleFavouriteGenre,
} from "@utils/localStorageAPI";
import { tmdbGetGenres } from "@utils/tmdbAPI";
import { useEffect, useState } from "react";
import { IUseGenres } from "./types";

const useGenres = (isSaveMode: boolean): IUseGenres => {
  const favoriteIdx = LSAPIGetFavouriteGenres();
  const [genres, setGenres] = useState<IGenre[]>(
    favoriteIdx.map((genreId) => {
      return { id: genreId, isFavourite: true } as IGenre;
    })
  );

  useEffect(() => {
    tmdbGetGenres()
      .then((data) => {
        const getedGenres = data.genres;
        getedGenres.map(
          (genre) => (genre.isFavourite = favoriteIdx.includes(genre.id))
        );
        setGenres(getedGenres);
      })
      .catch((error: Error) =>
        console.log("Genre list loading error: ", error)
      );
  }, []);

  const toggleFavouriteGenre = (genreId: number): void => {
    const newGenres = [...genres];
    const foundGenre = genres.find((genre) => genre.id === genreId);
    const { isFavourite } = foundGenre!;
    const index = newGenres.indexOf(foundGenre!);
    newGenres[index] = { ...foundGenre, isFavourite: !isFavourite } as IGenre;
    setGenres(newGenres);

    if (isSaveMode) LSAPIToggleFavouriteGenre(genreId);
  };

  const getFavoriteGenres = () => {
    return genres
      .filter((genre) => genre.isFavourite === true)
      .map((genre) => genre.id);
  };

  return { genres, toggleFavouriteGenre, getFavoriteGenres };
};

export default useGenres;
