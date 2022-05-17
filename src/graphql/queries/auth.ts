import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  query login($signInDto: SignInDto!) {
    login(signInDto: $signInDto) {
      accessToken
    }
  }
`;
