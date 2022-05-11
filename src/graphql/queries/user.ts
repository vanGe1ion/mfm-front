import { gql } from "@apollo/client";
import { MOVIE_FIELDS_FRAGMENT } from "../fragments";

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
        ${MOVIE_FIELDS_FRAGMENT}
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
