import { gql } from "@apollo/client";
import { MOVIE_FIELDS_FRAGMENT } from "../fragments";

export const GET_GENRES = gql`
  query getGenres {
    getGenres {
      id
      name
    }
  }
`;

export const FIND_MOVIES = gql`
  query findMovies($findMoviesInputDto: FindMoviesInputDto!) {
    findMovies(findMoviesInputDto: $findMoviesInputDto) {
      page
      totalPages
      totalResults
      movies {
        ${MOVIE_FIELDS_FRAGMENT}
      }
    }
  }
`;
