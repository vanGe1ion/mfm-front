import { useMutation, useQuery } from "@apollo/client";
import { useUserContext } from "@context/userContext";
import { IGenre } from "@globalTypes";
import { GET_GENRES_WITH_FAVOURITES } from "@queries/api";
import { useEffect, useState } from "react";
import { ADD_GENRE, REMOVE_GENRE } from "@mutations/genre";
import {
  IUseGenres,
  IAddGenreResp,
  IAddGenreVars,
  IRemoveGenreResp,
  IRemoveGenreVars,
  IUserGenre,
  IGenresWithFavResp,
  IGenresWithFavVars,
} from "./types";

const useGenres = (isSaveMode: boolean): IUseGenres => {
  const { currentUser } = useUserContext();
  const currentUserId = currentUser!.id;
  const [genres, setGenres] = useState<IGenre[]>([]);

  const { data, error, refetch } = useQuery<
    IGenresWithFavResp,
    IGenresWithFavVars
  >(GET_GENRES_WITH_FAVOURITES, {
    variables: {
      userId: currentUserId,
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) setGenres(data.getGenresWithFavourites);
  }, [data]);

  useEffect(() => {
    if (error) console.log(`Genres loading GraphQL error: ${error.message}`);
  }, [error]);

  const [addGenre, { error: addError }] = useMutation<
    IAddGenreResp,
    IAddGenreVars
  >(ADD_GENRE);

  const [removeGenre, { error: remError }] = useMutation<
    IRemoveGenreResp,
    IRemoveGenreVars
  >(REMOVE_GENRE);

  useEffect(() => {
    if (addError || remError) {
      console.log(
        `Genres mutation GraphQL error: ${(addError ?? remError)!.message}`
      );
    }
  }, [addError, remError]);

  const toggleFavouriteGenre = (genreId: number): void => {
    const newGenres = [...genres];
    const foundGenre = genres.find((genre) => genre.id === genreId);
    if (!foundGenre) return;
    const { isFavourite } = foundGenre;
    const index = newGenres.indexOf(foundGenre);
    newGenres[index] = { ...foundGenre, isFavourite: !isFavourite } as IGenre;
    setGenres(newGenres);

    if (isSaveMode) {
      const queryData: IUserGenre = {
        userId: currentUserId,
        genreId,
      };
      if (isFavourite)
        removeGenre({
          variables: {
            removeGenreDto: queryData,
          },
        });
      else
        addGenre({
          variables: {
            addGenreDto: queryData,
          },
        });
    }
  };

  const getFavoriteGenres = () => {
    return genres.filter((genre) => genre.isFavourite).map((genre) => genre.id);
  };

  return { genres, toggleFavouriteGenre, getFavoriteGenres };
};

export default useGenres;
