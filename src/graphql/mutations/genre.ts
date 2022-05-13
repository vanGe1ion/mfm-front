import { gql } from "@apollo/client";

export const ADD_GENRE = gql`
  mutation addGenre($genreId: Int!) {
    addGenre(genreId: $genreId) {
      genreId
      userId
    }
  }
`;

export const REMOVE_GENRE = gql`
  mutation removeGenre($genreId: Int!) {
    removeGenre(genreId: $genreId)
  }
`;
