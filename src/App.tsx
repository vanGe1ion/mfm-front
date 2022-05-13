import React, { FC } from "react";
import UserContextProvider from "@components/UserContextProvirer";
import Router from "@components/Router";
import ApolloClientProvider from "@components/AppoloClientProvider/ApolloClientProvider";

const App: FC = () => {
  return (
    <ApolloClientProvider>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </ApolloClientProvider>
  );
};

export default App;
