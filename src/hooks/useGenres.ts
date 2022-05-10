import { useMutation, useQuery } from "@apollo/client";
import { useUserContext } from "@context/userContext";
import { IGenre } from "@globalTypes";
import { GET_GENRES } from "@queries/api";
import { USER_GENRES } from "@queries/user";
import { useEffect, useMemo, useState } from "react";
import { ADD_GENRE, REMOVE_GENRE } from "@mutations/genre";
import {
  IUseGenres,
  IGetGenresResp,
  IUserGenresResp,
  IUserGenresVars,
  IAddGenreResp,
  IAddGenreVars,
  IRemoveGenreResp,
  IRemoveGenreVars,
  IUserGenre,
} from "./types";

const useGenres = (isSaveMode: boolean): IUseGenres => {
  const { currentUser } = useUserContext();
  const currentUserId = Number(currentUser!.id);

  const [genres, setGenres] = useState<IGenre[]>([]);

  const {
    data: userGenresData,
    error: userGenresError,
    refetch: refetchUserGenres,
  } = useQuery<IUserGenresResp, IUserGenresVars>(USER_GENRES, {
    variables: {
      id: currentUserId,
    },
  });

  const favouriteGenres: number[] = useMemo(() => {
    if (userGenresData)
      return userGenresData.getUserById.genres.map((genre) => genre.genreId);
    return [];
  }, [userGenresData]);

  const { data: genresData, error: genresError } =
    useQuery<IGetGenresResp>(GET_GENRES);

  useEffect(() => {
    refetchUserGenres();
  }, []);

  useEffect(() => {
    if (genresData) {
      const getedGenres = genresData.getGenres.map(({ id, name }) => {
        return { id, name, isFavourite: favouriteGenres.includes(id) };
      });
      setGenres(getedGenres);
    }
  }, [favouriteGenres, genresData]);

  useEffect(() => {
    if (userGenresError || genresError)
      console.log(
        `GraphQL error: ${(userGenresError ?? genresError)!.message}`
      );
  }, [userGenresError, genresError]);

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
      console.log(`GraphQL error: ${(addError ?? remError)!.message}`);
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
