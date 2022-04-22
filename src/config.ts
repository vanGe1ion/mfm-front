import { IGetMoviesParams } from "@globalTypes";

export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const TMDB_IMAGE_HOST = "https://image.tmdb.org/t/p/w154";
export const TMDB_SEARCH_LIMIT_PAGE = 5;
export const DEFAULT_FILTERS: IGetMoviesParams = {
  primaryReleaseYear: new Date().getFullYear(),
  voteAverage: {
    gte: 5,
    lte: 10,
  },
  withGenres: [],
};
