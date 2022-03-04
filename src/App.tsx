import React, { FC } from "react";
import UserContextProvirer from "./components/UserContextProvirer";
import RoterSwitcher from "./components/RoterSwitcher";

const App: FC = () => {
  return (
    <UserContextProvirer>
      <RoterSwitcher />
    </UserContextProvirer>
  );
};

export default App;
