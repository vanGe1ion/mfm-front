import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PageContainer } from "@globalStyle";

import GenresPanel from "@components/GenresPanel/GenresPanel";
import HeaderPanel from "@components/HeaderPanel/HeaderPanel";
import MovieListControl from "@components/MovieListControl/MovieListControl";
import MoviesList from "@components/MoviesList/MoviesList";
import { useUserContext } from "@context/userContext";
import { IMovie } from "@globalTypes";
import { LSAPIGetFavouriteMovies } from "@utils/localStorageAPI";
import Button from "@components/UI/Button";
import useToggleView from "@hooks/useToggleView";

const MainPage: FC = () => {
  const history = useHistory();
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { currentUser } = useUserContext();
  const { isBlockView, toggleView } = useToggleView();
  
  useEffect(() => {
    const favouriteMovies = LSAPIGetFavouriteMovies();
    setMovies(favouriteMovies);
  }, []);

  if (!currentUser) history.replace("/sign-in");

  return (
    <PageContainer>
      <HeaderPanel />
      <GenresPanel isSaveMode={true}/>
      <MovieListControl
        title="Favourite movies list"
        isBlockView={isBlockView}
        toggleView={toggleView}
      >
        <Button indents="3px" onClick={() => history.push("/search")}>
          Add from catalog
        </Button>
      </MovieListControl>
      <MoviesList
        movies={movies}
        setMovies={setMovies}
        isBlockView={isBlockView}
      />
    </PageContainer>
  );
};

export default MainPage;
