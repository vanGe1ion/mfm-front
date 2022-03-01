import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const MainPage: FC = () => {
  const { dismissUser } = useUserContext();
  const history = useHistory();

  const logoutButtonHandler = (): void => {
    dismissUser();
    history.replace("/");
  };

  return (
    <div>
      <button onClick={logoutButtonHandler}>logout</button>
    </div>
  );
};

export default MainPage;
