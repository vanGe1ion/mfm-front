import { gql } from "@apollo/client";

export const SIGN_IN_USER = gql`
  query signIn($signInUserDto: SignInUserDto!) {
    signInUser(signInUserDto: $signInUserDto) {
      id
      login
    }
  }
`;

export const USER_GENRES = gql`
  query userGenres($id: Int!) {
    getUserById(id: $id) {
      id
      genres {
        genreId
      }
    }
  }
`;

export const USER_MOVIES = gql`
  query userMovies($id: Int!) {
    getUserById(id: $id) {
      id
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
        isViewed
      }
    }
  }
`;

export const USER_MOVIES_IDS = gql`
  query userMovies($id: Int!) {
    getUserById(id: $id) {
      id
      movies {
        movieId
      }
    }
  }
`;
