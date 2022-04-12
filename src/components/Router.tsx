import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "@pages/LoginPage/LoginPage";
import MainPage from "@pages/MainPage/MainPage";
import SearchPage from "@pages/SearchPage/SearchPage";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" exact>
          <LoginPage />
        </Route>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
