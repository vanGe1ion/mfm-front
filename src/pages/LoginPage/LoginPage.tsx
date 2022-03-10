import React, { FC } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import logo from "./logo.png";
import { LogoHeader, MainContainer, HeaderHolder, FormHolder } from "./style";
import { useHistory } from "react-router-dom";
import { isSignedInLocalSorageApi } from "../../utils/localStorageAPI";

const LoginPage: FC = () => {
  const history = useHistory();

  if (isSignedInLocalSorageApi()) history.replace("/");

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
