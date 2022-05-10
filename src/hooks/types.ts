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
  removeFromFavourite: (movieId: number) => void;
  toggleViewed: (movieId: number) => void;
  searchMovies: (searchParams: IGetMoviesParams) => Promise<void>;
}

export interface IUserGenresVars {
  id: number;
}

export interface IUserGenresResp {
  getUserById: {
    genres: {
      genreId: number;
    }[];
  };
}

export interface IUserMoviesVars {
  id: number;
}

export interface IUserMoviesResp {
  getUserById: { movies: IMovie[] };
}

export interface IUserMoviesIdsVars {
  id: number;
}

export interface IUserMoviesIdsResp {
  getUserById: {
    movies: {
      movieId: number;
    }[];
  };
}

export interface IGetGenresResp {
  getGenres: IGenre[];
}

export interface IFindMoviesVars {
  findMoviesInputDto: IGetMoviesParams;
}

export interface IFindMoviesResp {
  findMovies: IGetMoviesResponse;
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

export interface IUserMovie {
  movieId: number;
  userId: number;
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
