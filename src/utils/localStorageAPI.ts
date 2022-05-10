import { IMovie, IUser } from "@globalTypes";
import testData from "./testFavouriteMovies.json";

export const LSAPIInit = (): void => {
  if (!localStorage.getItem("favouriteGenres"))
    localStorage.setItem("favouriteGenres", "[]");
  if (!localStorage.getItem("favouriteMovies"))
    localStorage.setItem("favouriteMovies", `${JSON.stringify(testData)}`);
};

export const LSAPIGetSignedInUser = (): IUser | null => {
  const currentUser = localStorage.getItem("currentUser");
  return currentUser ? JSON.parse(currentUser) : currentUser;
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
