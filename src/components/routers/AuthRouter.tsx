import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";

const AuthRouter: FC = () => {
  return (
    <Switch>
      <Route path="/main" exact>
        <MainPage />
      </Route>
      <Route path="/" exact>
        <MainPage />
      </Route>
    </Switch>
  );
};

export default AuthRouter;
