import { gql } from "@apollo/client";

export const GET_GENRES_WITH_FAVOURITES = gql`
  query getGenresWithFavourites($userId: Int!) {
    getGenresWithFavourites(userId: $userId) {
      id
      name
      isFavourite
    }
  }
`;

export const FIND_MOVIES_WITH_FAVOURITES = gql`
  query findMoviesWithFavourites(
    $userId: Int!
    $findMoviesInputDto: FindMoviesInputDto!
  ) {
    findMoviesWithFavourites(
      userId: $userId
      findMoviesInputDto: $findMoviesInputDto
    ) {
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
        voteCount
        voteAverage

        genres
        isFavourite
      }
    }
  }
`;
