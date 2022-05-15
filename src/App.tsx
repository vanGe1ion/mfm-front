import React, { FC } from "react";
import Router from "@components/Router";
import ApolloClientProvider from "@components/AppoloClientProvider/ApolloClientProvider";

const App: FC = () => {
  return (
    <ApolloClientProvider>
      <Router />
    </ApolloClientProvider>
  );
};

export default App;
