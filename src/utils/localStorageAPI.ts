import { IMovie } from "@globalTypes";
import testData from "./testFavouriteMovies.json";

export const LSAPIInit = (): void => {
  if (!localStorage.getItem("login")) localStorage.setItem("login", "user");
  if (!localStorage.getItem("password"))
    localStorage.setItem("password", "pass");
  if (!localStorage.getItem("favouriteGenres"))
    localStorage.setItem("favouriteGenres", "[]");
  if (!localStorage.getItem("favouriteMovies"))
    localStorage.setItem("favouriteMovies", `${JSON.stringify(testData)}`);
};

export const LSAPIGetSignedInUser = (): string | null => {
  return localStorage.getItem("currentUserId");
};

export const LSAPIVerifyUser = (login: string, password: string): boolean => {
  return (
    localStorage.getItem("login") === login &&
    localStorage.getItem("password") === password
  );
};

export const LSAPIToggleFavouriteGenre = (genreId: number): void => {
  const favoriteGenres = LSAPIGetFavouriteGenres();
  const idx = favoriteGenres.indexOf(genreId);
  if (idx < 0) favoriteGenres.push(genreId);
  else favoriteGenres.splice(idx, 1);
  localStorage.setItem("favouriteGenres", JSON.stringify(favoriteGenres));
};

export const LSAPIGetFavouriteGenres = (): number[] => {
  const lsData = localStorage.getItem("favouriteGenres");
  return lsData ? JSON.parse(lsData) : [];
};

export const LSAPISetFavouriteMovies = (movies: IMovie[]): void => {
  localStorage.setItem("favouriteMovies", JSON.stringify(movies));
};

export const LSAPIGetFavouriteMovies = (): IMovie[] => {
  const lsData = localStorage.getItem("favouriteMovies");
  return lsData ? JSON.parse(lsData) : [];
};

export const LSAPIRemoveFavouriteMovie = (movieId: number): void => {
  const favoriteMovies: IMovie[] = LSAPIGetFavouriteMovies();
  const idx = favoriteMovies.findIndex((movie) => movie.id === movieId);
  favoriteMovies.splice(idx, 1);
  LSAPISetFavouriteMovies(favoriteMovies);
};

export const LSAPIUpdateFavouriteMovie = (movieId: number): void => {
  const favoriteMovies: IMovie[] = LSAPIGetFavouriteMovies();
  const idx = favoriteMovies.findIndex((movie) => movie.id === movieId);
  favoriteMovies[idx].isViewed = !favoriteMovies[idx].isViewed;
  LSAPISetFavouriteMovies(favoriteMovies);
};

export const LSAPIAddFavouriteMovie = (movie: IMovie): void => {
  const favoriteMovies = LSAPIGetFavouriteMovies();
  favoriteMovies.push(movie);
  LSAPISetFavouriteMovies(favoriteMovies);
};

export const LSAPIGetFavouriteMoviesIds = (): number[] => {
  const favoriteMovies = LSAPIGetFavouriteMovies();
  return favoriteMovies.map((movie) => movie.id);
};
