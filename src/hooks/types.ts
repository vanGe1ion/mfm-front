import { IGenre, IGetMoviesParams, IMovie } from "@globalTypes";

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
  searchMovies: (searchParams: IGetMoviesParams) => Promise<void>;
}

export interface IUserGenresResp {
  getUserById: {
    genres: {
      genreId: number;
    }[];
  };
}

export interface IUserGenresVars {
  id: number;
}

export interface IGetGenresResp {
  getGenres: IGenre[];
}

export interface IUserGenre {
  userId: number;
  genreId: number;
}

export interface IAddGenreVars {
  addGenreDto: IUserGenre;
}

export interface IAddGenreResp {
  addGenre: IUserGenre;
}

export interface IRemoveGenreVars {
  removeGenreDto: IUserGenre;
}

export interface IRemoveGenreResp {
  removeGenre: number;
}
