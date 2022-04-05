import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import Button from "../../components/UI/Button";
import { tmdbGetGenres, tmdbGetDiscover } from "../../utils/tmdbAPI";

const MainPage: FC = () => {
  const { currentUser, dismissUser } = useUserContext();
  const history = useHistory();

  //api test
  useEffect(() => {
    tmdbGetDiscover({
      withGenres: [28],
      primaryReleaseYear: 2020,
      voteAverage: {
        gte: 3,
        lte: 5,
      },
    }).then((data) => console.log(data));

    tmdbGetGenres().then((data) => console.log(data));
  }, []);

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
