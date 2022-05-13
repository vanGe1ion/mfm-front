import { gql } from "@apollo/client";

export const GET_USER = gql`
  query userGenres {
    getUserById {
      id
      login
    }
  }
`;

export const USER_GENRES = gql`
  query userGenres {
    getUserById {
      id
      genres {
        genreId
      }
    }
  }
`;

export const USER_MOVIES = gql`
  query userMovies {
    getUserById {
      id
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
        isViewed
      }
    }
  }
`;
