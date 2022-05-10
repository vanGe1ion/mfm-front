import { gql } from "@apollo/client";

export const ADD_GENRE = gql`
  mutation addGenre($addGenreDto: AddGenreDto!) {
    addGenre(addGenreDto: $addGenreDto) {
      genreId
      userId
    }
  }
`;

export const REMOVE_GENRE = gql`
  mutation removeGenre($removeGenreDto: RemoveGenreDto!) {
    removeGenre(removeGenreDto: $removeGenreDto)
  }
`;
