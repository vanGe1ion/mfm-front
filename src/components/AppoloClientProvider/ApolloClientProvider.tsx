import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import { LSAPIGetUserToken } from "@utils/localStorageAPI";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { SERVER_ADDR } from "@config";

const ApolloClientProvider: FC = ({ children }) => {
  const currentUserToken = LSAPIGetUserToken();
  const httpLink = createHttpLink({
    uri: `${SERVER_ADDR}/graphql`,
  });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: currentUserToken ? `Bearer ${currentUserToken}` : "",
    },
  }));

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
