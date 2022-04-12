import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PageContainer } from "@globalStyle";

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
import Button from "@components/UI/Button";
import useToggleView from "@hooks/useToggleView";

const MainPage: FC = () => {
  const { currentUser } = useUserContext();
  const history = useHistory();
  const { isBlockView, toggleView } = useToggleView();

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
    <PageContainer>
      <HeaderPanel />
      <GenresPanel genres={genres} setGenres={setGenres} />
      <MovieListControl
        title="Favourite movies list"
        isBlockView={isBlockView}
        toggleView={toggleView}
      >
        <Button indents="3px" onClick={() => history.push("/search")}>
          Add from catalog
        </Button>
      </MovieListControl>
      <MoviesList
        movies={movies}
        setMovies={setMovies}
        isBlockView={isBlockView}
      />
    </PageContainer>
  );
};

export default MainPage;
