import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";
import { LogoHeader, MainContainer, HeaderHolder, FormHolder } from "./style";

import LoginForm from "@components/LoginForm/LoginForm";
import { useUserContext } from "@context/userContext";

const LoginPage: FC = () => {
  const history = useHistory();
  const { currentUser } = useUserContext();

  if (currentUser) {
    history.replace("/");
    return <></>;
  }

  return (
    <MainContainer>
      <HeaderHolder>
        <img src={logo} alt="Cinema logo" />
        <LogoHeader>My Favorite Movies</LogoHeader>
      </HeaderHolder>
      <FormHolder>
        <LoginForm />
      </FormHolder>
    </MainContainer>
  );
};

export default LoginPage;
