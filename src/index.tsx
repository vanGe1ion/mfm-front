import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SERVER_ADDR } from "@config";

const apolloClient = new ApolloClient({
  uri: `${SERVER_ADDR}/graphql`,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
