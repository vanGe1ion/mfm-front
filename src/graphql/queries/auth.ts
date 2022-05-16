import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  query signIn($signInDto: SignInDto!) {
    signIn(signInDto: $signInDto) {
      accessToken
    }
  }
`;
