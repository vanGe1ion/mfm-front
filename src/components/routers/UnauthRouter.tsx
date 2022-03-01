import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";

const UnauthRouter: FC = () => {
  return (
    <Switch>
      <Route path="/sign_in" exact>
        <LoginPage />
      </Route>
      <Route path="/" exact>
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default UnauthRouter;
