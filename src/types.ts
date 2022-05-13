export interface IUser {
  id: number;
  login: string;
}

export interface IUserContext {
  currentUser: IUser | null;
  approveUser: (accessToken: string) => Promise<void>;
  dismissUser: () => Promise<void>;
}

export interface IGetMoviesParams {
  withGenres?: number[];
  primaryReleaseYear?: number;
  voteAverage?: IRange;
  page?: number;
}

export interface IRange {
  gte?: number;
  lte?: number;
}

export interface IGetMoviesResponse {
  movies: IMovie[];
  page: number;
  totalResults: number;
  totalPages: number;
}

export interface IMovie {
  movieId: number;
  title: string;
  originalTitle: string;
  releaseYear: number;
  overview: string;
  posterPath: string;
  voteCount: number;
  voteAverage: number;

  genres: string[];
  isViewed: boolean;
  isFavourite?: boolean;
  userId?: number;
}

export interface IGenre {
  id: number;
  name: string;
  isFavourite?: boolean;
}

export interface IGetGenresResponse {
  genres: IGenre[];
}

export interface IMovieControls {
  toggleViewed?: (movieId: number) => void;
  addToFavourite?: (movieId: number) => void;
  removeFromFavourite?: (movieId: number, title: string) => void;
}

export interface IMovieListItemProps {
  movie: IMovie;
  controls: IMovieControls;
  index: number;
}

export interface IViewed {
  isViewed?: boolean;
}

export interface IFontSize {
  fontSize?: TFontSize;
}

export type TFontSize =
  | "smaller"
  | "xx-small"
  | "x-small"
  | "small"
  | "medium"
  | "large"
  | "x-large"
  | "xx-large"
  | "xxx-large"
  | "larger";

export interface IFilterChanged {
  filters?: IGetMoviesParams;
  onChange?: (filters: IGetMoviesParams) => void;
}
