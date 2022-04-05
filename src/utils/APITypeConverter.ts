import { GetMoviesParams, GetMoviesResponse, Movie } from "../types";
import {
  APIMovie,
  moviesAPIRequestParams,
  moviesAPIRsponseParams,
} from "./types";

export const toMoviesAPIRequestParams = (
  appParams: GetMoviesParams
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

export const toGetMoviesResponse = (
  APIResponse: moviesAPIRsponseParams
): GetMoviesResponse => {
  const { results, page, total_results, total_pages } = APIResponse;

  const movies: Movie[] = [];
  results.forEach(
    ({
      poster_path,
      adult,
      overview,
      release_date,
      genre_ids,
      id,
      original_title,
      original_language,
      title,
      backdrop_path,
      popularity,
      vote_count,
      video,
      vote_average,
    }: APIMovie) => {
      movies.push({
        posterPath: poster_path,
        adult,
        overview,
        releaseDate: release_date,
        genreIds: Array.from(genre_ids),
        id,
        originalTitle: original_title,
        originalLanguage: original_language,
        title,
        backdropPath: backdrop_path,
        popularity,
        voteCount: vote_count,
        video,
        voteAverage: vote_average,
      });
    }
  );

  return {
    movies,
    page,
    totalResults: total_results,
    totalPages: total_pages,
  };
};
