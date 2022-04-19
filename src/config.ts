import { IGetMoviesParams } from "@globalTypes";

export const TMDBAPIKey = process.env.REACT_APP_TMDB_API_KEY;
export const TMDBImageHost = 'https://image.tmdb.org/t/p/w154';
export const TMDBSearchLimitPage = 5;
export const defaultFilters: IGetMoviesParams = {
  primaryReleaseYear: new Date().getFullYear(),
  voteAverage: {
    gte: 5,
    lte: 10,
  },
  withGenres: [],
};
