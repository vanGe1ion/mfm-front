import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { PageContainer } from "@globalStyle";

import GenresPanel from "@components/GenresPanel/GenresPanel";
import HeaderPanel from "@components/HeaderPanel/HeaderPanel";
import MovieListControl from "@components/MovieListControl/MovieListControl";
import MoviesList from "@components/MoviesList/MoviesList";
import { useUserContext } from "@context/userContext";
import Button from "@components/UI/Button";
import useToggleView from "@hooks/useToggleView";
import { GenreContainer } from "./style";

const MainPage: FC = () => {
  const history = useHistory();
  const { currentUser } = useUserContext();
  const { isBlockView, toggleView } = useToggleView();

  if (!currentUser) history.replace("/sign-in");

  return (
    <PageContainer>
      <HeaderPanel />
      <GenreContainer>
        <GenresPanel isSaveMode={true} />
      </GenreContainer>

      <MovieListControl
        title="Favourite movies list"
        isBlockView={isBlockView}
        toggleView={toggleView}
      >
        <Button indents="3px" onClick={() => history.push("/search")}>
          Add from catalog
        </Button>
      </MovieListControl>
      <MoviesList isBlockView={isBlockView} isFavouriteMovies={true} />
    </PageContainer>
  );
};

export default MainPage;
