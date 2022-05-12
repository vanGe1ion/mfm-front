import {
  IGenre,
  IGetMoviesParams,
  IGetMoviesResponse,
  IMovie,
} from "@globalTypes";

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
  removeFromFavourite: (movieId: number, title: string) => void;
  toggleViewed: (movieId: number) => void;
  searchMovies: (searchParams: IGetMoviesParams) => Promise<void>;
}

export interface IUserGenre {
  userId: number;
  genreId: number;
}

export interface IGenresWithFavVars {
  userId: number;
}

export interface IGenresWithFavResp {
  getGenresWithFavourites: IGenre[];
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

export interface IUserMovie {
  movieId: number;
  userId: number;
}

export interface IUserMoviesVars {
  id: number;
}

export interface IUserMoviesResp {
  getUserById: { movies: IMovie[] };
}

export interface IFindMoviesVars {
  userId: number;
  findMoviesInputDto: IGetMoviesParams;
}

export interface IFindMoviesResp {
  findMoviesWithFavourites: IGetMoviesResponse;
}

export interface IAddMovieVars {
  addMovieDto: IMovie;
}

export interface IAddMovieResp {
  addMovie: IUserMovie;
}

export interface IRemoveMovieVars {
  removeMovieDto: IUserMovie;
}

export interface IRemoveMovieResp {
  id: number;
}

export interface IUpdateMovieVars {
  updateMovieDto: IUserMovie & { isViewed: boolean };
}

export interface IUpdateMovieResp {
  updateMovie: IUserMovie;
}
