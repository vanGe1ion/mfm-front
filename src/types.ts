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
  posterPath?: string | null;
  adult?: boolean;
  overview?: string;
  releaseDate?: string;
  genreIds?: number[];
  id?: number;
  originalTitle?: string;
  originalLanguage?: string;
  title?: string;
  backdropPath?: string;
  popularity?: number;
  voteCount?: number;
  video?: boolean;
  voteAverage?: number;

  genres?: string[];
  isViewed?: boolean;
}

export interface IGenre {
  id: number;
  name: string;
  isFavourite?: boolean;
}

export interface IGetGenresResponse {
  genres: IGenre[];
}

export type TMovieView = "row" | "block";

export interface IMovieListItemProps {
  movie: IMovie;
  setMovies: (prev: React.SetStateAction<IMovie[]>) => void;
  index: number;
}
