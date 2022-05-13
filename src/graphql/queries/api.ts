import { gql } from "@apollo/client";

export const GET_GENRES_WITH_FAVOURITES = gql`
  query getGenresWithFavourites {
    getGenresWithFavourites {
      id
      name
      isFavourite
    }
  }
`;

export const FIND_MOVIES_WITH_FAVOURITES = gql`
  query findMoviesWithFavourites($findMoviesInputDto: FindMoviesInputDto!) {
    findMoviesWithFavourites(findMoviesInputDto: $findMoviesInputDto) {
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
