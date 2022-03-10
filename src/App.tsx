import React, { FC } from "react";
import UserContextProvirer from "./components/UserContextProvirer";
import Router from "./components/Router";

const App: FC = () => {
  return (
    <UserContextProvirer>
      <Router />
    </UserContextProvirer>
  );
};

export default App;
