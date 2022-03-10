import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import Button from "../../components/UI/Button";
import { isSignedInLocalSorageApi } from "../../utils/localStorageAPI";

const MainPage: FC = () => {
  const { dismissUser } = useUserContext();
  const history = useHistory();

  if (!isSignedInLocalSorageApi()) history.replace("/sign-in");

  const logoutButtonHandler = (): void => {
    dismissUser();
    history.replace("/sign-in");
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
