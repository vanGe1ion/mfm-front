import { gql } from "@apollo/client";

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
        movieId
        title
        originalTitle
        releaseYear
        overview
        posterPath
        genreIds
        voteCount
        voteAverage
      }
    }
  }
`;
