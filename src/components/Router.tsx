import React, { FC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "@pages/LoginPage/LoginPage";
import MainPage from "@pages/MainPage/MainPage";
import SearchPage from "@pages/SearchPage/SearchPage";
import { useUserContext } from "@context/userContext";

const Router: FC = () => {
  const { currentUser } = useUserContext();

  return (
    <BrowserRouter>
      <Switch>
        {!currentUser && (
          <>
            <Route path="/sign-in" exact>
              <LoginPage />
            </Route>
            <Route render={() => <Redirect to={{ pathname: "/sign-in" }} />} />
          </>
        )}
        {currentUser && (
          <>
            <Route path="/search" exact>
              <SearchPage />
            </Route>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
