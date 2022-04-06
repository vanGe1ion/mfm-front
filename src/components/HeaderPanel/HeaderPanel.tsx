import React, { FC } from "react";
import Button from "../../components/UI/Button";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import {
    HeaderContainer,
    MainHeader,
    UserContainer,
    UserPanel,
    UserSpan,
  } from "./style";

const HeaderPanel: FC = () => {
  const { currentUser, dismissUser } = useUserContext();
  const history = useHistory();

  const signOutButtonHandler = (): void => {
    dismissUser();
    history.replace("/sign-in");
  };

  return (
    <HeaderContainer>
      <MainHeader>My Favorite Movies</MainHeader>
      <UserPanel>
        <UserContainer>
          Hello, <UserSpan>{currentUser}</UserSpan>!
        </UserContainer>
        <Button indents="6px" onClick={signOutButtonHandler}>
          Sign out
        </Button>
      </UserPanel>
    </HeaderContainer>
  );
};

export default HeaderPanel;
