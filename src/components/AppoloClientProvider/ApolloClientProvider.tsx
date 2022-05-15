import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config";

const ApolloClientProvider: FC = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
