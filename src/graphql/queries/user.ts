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
      genres {
        genreId
      }
    }
  }
`;
