import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { BACKEND_URL } from "@config";
import LocalStorageToken from "@utils/localStorageToken";

const httpLink = createHttpLink({
  uri: `${BACKEND_URL}/graphql`,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const currentUserToken = LocalStorageToken.get();
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: currentUserToken ? `Bearer ${currentUserToken}` : "",
    },
  }));

  return forward(operation);
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authMiddleware.concat(httpLink),
});

export default apolloClient;
