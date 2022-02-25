import React, { FC, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import { localStorageApiInit } from "./utils";

const App: FC = () => {
  useEffect(() => {
    localStorageApiInit();
  }, []);

  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default App;
