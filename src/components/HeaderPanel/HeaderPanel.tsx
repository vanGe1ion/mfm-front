import React, { FC, useEffect } from "react";
import Button from "@UI/Button";
import { useHistory } from "react-router-dom";
import {
  HeaderContainer,
  MainHeader,
  UserContainer,
  UserPanel,
  UserSpan,
} from "./style";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_USER } from "@queries/user";
import { IGetUserResp } from "./types";
import LocalStorageToken from "@utils/localStorageToken";
import { useTranslation } from "react-i18next";

const HeaderPanel: FC = () => {
  const history = useHistory();
  const apolloClient = useApolloClient();
  const { data, error } = useQuery<IGetUserResp>(GET_USER);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) signOutHandler();
  }, [error]);

  const signOutHandler = (): void => {
    LocalStorageToken.remove();
    apolloClient.clearStore();
    history.push("/sign-in");
  };

  return (
    <HeaderContainer>
      <MainHeader>My Favourite Movies</MainHeader>
      <UserPanel>
        <UserContainer>
          {t("headerPanel.hello")}
          <UserSpan>{data?.getUserById.login}</UserSpan>!
        </UserContainer>
        <Button indents="6px" onClick={signOutHandler}>
          {t("headerPanel.signOutBtn")}
        </Button>
      </UserPanel>
    </HeaderContainer>
  );
};

export default HeaderPanel;
