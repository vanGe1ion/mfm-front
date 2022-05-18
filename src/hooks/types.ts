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
  isLoading: boolean;
  addToFavourite: (movieId: number) => void;
  removeFromFavourite: (movieId: number) => void;
  toggleViewed: (movieId: number) => void;
  searchMovies: (searchParams: IGetMoviesParams) => Promise<void>;
}

export interface IGenresWithFavResp {
  getGenresWithFavourites: IGenre[];
}

export interface IAddGenreVars {
  genreId: number;
}

export interface IAddGenreResp {
  removeGenre: {
    genreId: number;
    userId: number;
  };
}

export interface IRemoveGenreVars {
  genreId: number;
}

export interface IRemoveGenreResp {
  removeGenre: number;
}

export interface IUserMoviesResp {
  getUserById: { movies: IMovie[] };
}

export interface IFindMoviesVars {
  findMoviesInputDto: IGetMoviesParams;
}

export interface IFindMoviesResp {
  findMoviesWithFavourites: IGetMoviesResponse;
}

export interface IAddMovieVars {
  addMovieDto: IMovie;
}

export interface IAddMovieResp {
  addMovie: {
    movieId: number;
    userId: number;
  };
}

export interface IRemoveMovieVars {
  movieId: number;
}

export interface IRemoveMovieResp {
  id: number;
}

export interface IUpdateMovieVars {
  updateMovieDto: {
    movieId: number;
    isViewed: boolean;
  };
}

export interface IUpdateMovieResp {
  updateMovie: {
    movieId: number;
    userId: number;
  };
}
