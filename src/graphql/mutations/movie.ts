import { gql } from "@apollo/client";

export const ADD_MOVIE = gql`
  mutation addMovie($movieId: Int!) {
    addMovie(movieId: $movieId) {
      movieId
      userId
    }
  }
`;

export const REMOVE_MOVIE = gql`
  mutation removeMovie($movieId: Int!) {
    removeMovie(movieId: $movieId)
  }
`;

export const UPDATE_MOVIE = gql`
  mutation updateMovie($updateMovieDto: UpdateMovieDto!) {
    updateMovie(updateMovieDto: $updateMovieDto) {
      movieId
      userId
    }
  }
`;
