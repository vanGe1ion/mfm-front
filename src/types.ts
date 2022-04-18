export interface IUserContext {
  currentUser: string | null;
  approveUser: (newUser: string) => void;
  dismissUser: () => void;
}

export interface IGetMoviesParams {
  withGenres?: number[];
  primaryReleaseYear?: number;
  voteAverage?: IRange;
  page?: number;
}

interface IRange {
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
  posterPath: string;
  overview: string;
  releaseYear: number | null;
  genreIds: number[];
  id: number;
  originalTitle: string;
  title: string;
  voteCount: number | null;
  voteAverage: number | null;

  genres: string[];
  isViewed: boolean;
  isFavourite?:boolean;
}

export interface IGenre {
  id: number;
  name: string;
  isFavourite?: boolean;
}

export interface IGetGenresResponse {
  genres: IGenre[];
}

export interface IMovieControls{
  toggleViewed?: (movieId: number) => void;
  addToFavourite?: (movieId: number) => void;
  removeFromFavourite?: (movieId: number) => void;
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
