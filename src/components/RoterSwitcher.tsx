import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import AuthRouter from "./routers/AuthRouter";
import UnauthRouter from "./routers/UnauthRouter";

const RoterSwitcher: FC = () => {
  const { currentUser } = useUserContext();

  return (
    <BrowserRouter>
      {currentUser === null ? <UnauthRouter /> : <AuthRouter />}
    </BrowserRouter>
  );
};

export default RoterSwitcher;
