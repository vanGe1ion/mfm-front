import { IGetMoviesParams, Languge } from "@globalTypes";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
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
export const LANGUAGE: Languge = "en";
