import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import GenresPanel from "../../components/GenresPanel/GenresPanel";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import { useUserContext } from "../../context/userContext";
import { MainPageContainer } from "./style";

const MainPage: FC = () => {
  const { currentUser } = useUserContext();
  const history = useHistory();

  if (!currentUser) history.replace("/sign-in");

  return (
    <MainPageContainer>
      <HeaderPanel />
      <GenresPanel />
    </MainPageContainer>
  );
};

export default MainPage;
