import FilterPanel from "@components/FilterPanel/FilterPanel";
import GenresPanel from "@components/GenresPanel/GenresPanel";
import HeaderPanel from "@components/HeaderPanel/HeaderPanel";
import MovieListControl from "@components/MovieListControl/MovieListControl";
import MoviesList from "@components/MoviesList/MoviesList";
import Button from "@components/UI/Button";
import { DEFAULT_FILTERS } from "@config";
import { PageContainer } from "@globalStyle";
import { IGetMoviesParams } from "@globalTypes";
import useToggleView from "@hooks/useToggleView";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { FiltersDiv } from "./style";

const SearchPage: FC = () => {
  const history = useHistory();
  const { isBlockView, toggleView } = useToggleView();
  const [filters, setFilters] = useState<IGetMoviesParams>(DEFAULT_FILTERS);
  const { t } = useTranslation();

  return (
    <PageContainer>
      <HeaderPanel />
      <FiltersDiv>
        <FilterPanel filters={filters} onChange={setFilters} />
        <GenresPanel
          title={t("searchPage.genreTitle")}
          filters={filters}
          onChange={setFilters}
          isSaveMode={false}
        />
      </FiltersDiv>
      <MovieListControl
        title={t("searchPage.movieListTitle")}
        isBlockView={isBlockView}
        toggleView={toggleView}
      >
        <Button indents="3px" onClick={() => history.push("/")}>
          {t("searchPage.navigateBtn")}
        </Button>
      </MovieListControl>
      <MoviesList
        isBlockView={isBlockView}
        isFavouriteMovies={false}
        filters={filters}
      />
    </PageContainer>
  );
};

export default SearchPage;
