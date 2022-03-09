import React, { FC } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import logo from "./logo.png";
import { LogoHeader, MainContainer, HeaderHolder, FormHolder } from "./LoginPage.style";

const LoginPage: FC = () => {
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
