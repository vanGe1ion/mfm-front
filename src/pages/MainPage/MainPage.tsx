import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import GenresPanel from "../../components/GenresPanel/GenresPanel";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import MovieControl from "../../components/MovieControl/MovieControl";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useUserContext } from "../../context/userContext";
import { IGenre, IMovie, TMovieView } from "../../types";
import {
  LSAPIGetFavouriteGenres,
  LSAPIGetFavouriteMovies,
} from "../../utils/localStorageAPI";
import { tmdbGetGenres } from "../../utils/tmdbAPI";
import { MainPageContainer } from "./style";

const MainPage: FC = () => {
  const { currentUser } = useUserContext();
  const history = useHistory();
  const [view, setView] = useState<TMovieView>('row');

  const [genres, setGenres] = useState<IGenre[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const identifyGenres = (movie: IMovie, genres: IGenre[]): void => {
    movie.genres = genres
      .filter((genre) => movie.genreIds?.includes(genre.id))
      .map((genre) => genre.name);
  };

  useEffect(() => {
    tmdbGetGenres()
      .then((data) => data.genres)
      .then((genres) => {
        const favoriteIdx = LSAPIGetFavouriteGenres();
        genres.map(
          (genre) => (genre.isFavourite = favoriteIdx.includes(genre.id))
        );
        setGenres(genres);
        return genres;
      })
      .then((genres) => {
        const favouriteMovies = LSAPIGetFavouriteMovies();
        favouriteMovies.forEach((movie) => identifyGenres(movie, genres));
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
      <MovieControl view={view} setView={setView} />
      <MoviesList movies={movies} setMovies={setMovies} view={view}/>
    </MainPageContainer>
  );
};

export default MainPage;
