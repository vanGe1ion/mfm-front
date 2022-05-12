import { gql } from "@apollo/client";

export const GET_GENRES = gql`
  query getGenres {
    getGenres {
      id
      name
    }
  }
`;

export const GET_GENRES_WITH_FAVOURITES = gql`
  query getGenresWithFavourites($userId: Int!) {
    getGenresWithFavourites(userId: $userId) {
      id
      name
      isFavourite
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
