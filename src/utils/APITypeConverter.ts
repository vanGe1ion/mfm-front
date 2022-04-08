import { IGetMoviesParams, IGetMoviesResponse, IMovie } from "../types";
import {
  APIMovie,
  moviesAPIRequestParams,
  moviesAPIRsponseParams,
} from "./types";

export const toMoviesAPIRequestParams = (
  appParams: IGetMoviesParams
): moviesAPIRequestParams => {
  const { withGenres, primaryReleaseYear, voteAverage, page } = appParams;
  return {
    with_genres: withGenres?.join(", "),
    primary_release_year: primaryReleaseYear,
    "vote_average.gte": voteAverage?.gte,
    "vote_average.lte": voteAverage?.lte,
    page,
  };
};

export const toIGetMoviesResponse = (
  APIResponse: moviesAPIRsponseParams
): IGetMoviesResponse => {
  const { results, page, total_results, total_pages } = APIResponse;

  const movies: IMovie[] = results.map(
    ({
      poster_path,
      release_date,
      genre_ids,
      original_title,
      original_language,
      backdrop_path,
      vote_count,
      vote_average,
      ...rest
    }: APIMovie) => {
      return {
        isViewed: false,
        genres: [],

        posterPath: poster_path,
        releaseDate: release_date,
        genreIds: Array.from(genre_ids),
        originalTitle: original_title,
        originalLanguage: original_language,
        backdropPath: backdrop_path,
        voteCount: vote_count,
        voteAverage: vote_average,
        ...rest,
      };
    }
  );

  return {
    movies,
    page,
    totalResults: total_results,
    totalPages: total_pages,
  };
};
