import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { PageContainer } from "@globalStyle";

import GenresPanel from "@components/GenresPanel/GenresPanel";
import HeaderPanel from "@components/HeaderPanel/HeaderPanel";
import MovieListControl from "@components/MovieListControl/MovieListControl";
import MoviesList from "@components/MoviesList/MoviesList";
import Button from "@components/UI/Button";
import useToggleView from "@hooks/useToggleView";
import { GenreContainer } from "./style";
import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
  const history = useHistory();
  const { isBlockView, toggleView } = useToggleView();
  const { t } = useTranslation();

  return (
    <PageContainer>
      <HeaderPanel />
      <GenreContainer>
        <GenresPanel title={t("mainPage.genreTitle")} isSaveMode={true} />
      </GenreContainer>

      <MovieListControl
        title={t("mainPage.movieListTitle")}
        isBlockView={isBlockView}
        toggleView={toggleView}
      >
        <Button indents="3px" onClick={() => history.push("/search")}>
          {t("mainPage.navigateBtn")}
        </Button>
      </MovieListControl>
      <MoviesList isBlockView={isBlockView} isFavouriteMovies={true} />
    </PageContainer>
  );
};

export default MainPage;
