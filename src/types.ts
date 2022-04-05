export interface IUserContext {
  currentUser: string | null;
  approveUser: (newUser: string) => void;
  dismissUser: () => void;
}

export interface GetMoviesParams {
  withGenres?: number[];
  primaryReleaseYear?: number;
  voteAverage?: Range;
  page?: number;
}

interface Range {
  gte?: number;
  lte?: number;
}

export interface GetMoviesResponse {
  movies: Movie[];
  page: number;
  totalResults: number;
  totalPages: number;
}

export interface Movie {
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
}
