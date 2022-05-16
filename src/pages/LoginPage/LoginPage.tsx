import React, { FC } from "react";
import logo from "./logo.png";
import { LogoHeader, MainContainer, HeaderHolder, FormHolder } from "./style";
import LoginForm from "@components/LoginForm/LoginForm";

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
