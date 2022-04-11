import { IMovie } from "@globalTypes";
import testData from "./testFavouriteMovies.json"

export const LSAPIInit = (): void => {
  if (!localStorage.getItem("login")) localStorage.setItem("login", "user");
  if (!localStorage.getItem("password"))
    localStorage.setItem("password", "pass");
  if (!localStorage.getItem("favouriteGenres"))
    localStorage.setItem("favouriteGenres", "[]");
  if (!localStorage.getItem("favouriteMovies"))
    localStorage.setItem("favouriteMovies", `${JSON.stringify(testData)}`);
};

export const LSAPIIsSignedIn = (): boolean => {
  return typeof localStorage.getItem("currentUserId") === "string";
};

export const LSAPIVerifyUser = (login: string, password: string): boolean => {
  return (
    localStorage.getItem("login") === login &&
    localStorage.getItem("password") === password
  );
};

export const LSAPISetFavouriteGenres = (newGenres: number[]): void => {
  localStorage.setItem("favouriteGenres", JSON.stringify(newGenres));
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
  const favoriteMovies:IMovie[] = LSAPIGetFavouriteMovies();
  const idx = favoriteMovies.findIndex(movie => movie.id === movieId);
  favoriteMovies.splice(idx, 1);
  LSAPISetFavouriteMovies(favoriteMovies);
};

export const LSAPIUpdateFavouriteMovie = (movieId: number): void => {
  const favoriteMovies:IMovie[] = LSAPIGetFavouriteMovies();
  const idx = favoriteMovies.findIndex(movie => movie.id === movieId);
  favoriteMovies[idx].isViewed = !favoriteMovies[idx].isViewed;
  LSAPISetFavouriteMovies(favoriteMovies);
};
