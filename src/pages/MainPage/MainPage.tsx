import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import {} from "./MainPage.style";
import { useUserContext } from "../../context/userContext";
import Button from "../../components/UI/Button";

const MainPage: FC = () => {
  const { dismissUser } = useUserContext();
  const history = useHistory();

  const logoutButtonHandler = (): void => {
    dismissUser();
    history.replace("/");
  };

  return (
    <div>
      <Button size="6px" onClick={logoutButtonHandler}>
        logout
      </Button>
    </div>
  );
};

export default MainPage;
