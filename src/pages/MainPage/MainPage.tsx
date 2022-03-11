import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import Button from "../../components/UI/Button";

const MainPage: FC = () => {
  const { currentUser, dismissUser } = useUserContext();
  const history = useHistory();

  if (!currentUser) history.replace("/sign-in");

  const logoutButtonHandler = (): void => {
    dismissUser();
    history.replace("/sign-in");
  };

  return (
    <div>
      <Button indents="6px" onClick={logoutButtonHandler}>
        logout
      </Button>
    </div>
  );
};

export default MainPage;
