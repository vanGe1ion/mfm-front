import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MainPageContainer } from "./style";

import GenresPanel from "@components/GenresPanel/GenresPanel";
import HeaderPanel from "@components/HeaderPanel/HeaderPanel";
import MovieListControl from "@components/MovieListControl/MovieListControl";
import MoviesList from "@components/MoviesList/MoviesList";
import { useUserContext } from "@context/userContext";
import { IGenre, IMovie } from "@globalTypes";
import {
  LSAPIGetFavouriteGenres,
  LSAPIGetFavouriteMovies,
} from "@utils/localStorageAPI";
import { tmdbGetGenres } from "@utils/tmdbAPI";

const MainPage: FC = () => {
  const { currentUser } = useUserContext();
  const history = useHistory();
  const [isBlockView, setIsBlockView] = useState<boolean>(false);

  const [genres, setGenres] = useState<IGenre[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const identifyGenres = (movie: IMovie, genres: IGenre[]): void => {
    movie.genres = genres
      .filter((genre) => movie.genreIds?.includes(genre.id))
      .map((genre) => genre.name);
  };

  useEffect(() => {
    tmdbGetGenres()
      .then((data) => {
        const getedGenres = data.genres;
        const favoriteIdx = LSAPIGetFavouriteGenres();
        getedGenres.map(
          (genre) => (genre.isFavourite = favoriteIdx.includes(genre.id))
        );
        setGenres(getedGenres);

        const favouriteMovies = LSAPIGetFavouriteMovies();
        favouriteMovies.forEach((movie) => identifyGenres(movie, getedGenres));
        setMovies(favouriteMovies);
      })
      .catch((error: Error) =>
        console.log("Genre list loading error: ", error)
      );
  }, []);

  if (!currentUser) history.replace("/sign-in");

  return (
    <MainPageContainer>
      <HeaderPanel />
      <GenresPanel genres={genres} setGenres={setGenres} />
      <MovieListControl isBlockView={isBlockView} setIsBlockView={setIsBlockView} />
      <MoviesList
        movies={movies}
        setMovies={setMovies}
        isBlockView={isBlockView}
      />
    </MainPageContainer>
  );
};

export default MainPage;
