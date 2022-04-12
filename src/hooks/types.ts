import { IGenre, IMovie } from "@globalTypes";

export interface IUseGenres {
  genres: IGenre[];
  toggleFavouriteGenre: (genreId: number) => void;
  getFavoriteGenres: () => number[];
}

export interface IToggleView {
  isBlockView: boolean;
  toggleView: () => void;
}

export interface IUseMovies {
  movies: IMovie[];
  addToFavourite: (movieId: number) => void;
  removeFromFavourite: (movieId: number) => void;
  toggleViewed: (movieId: number) => void;
}
