import FilterPanel from "@components/FilterPanel/FilterPanel";
import GenresPanel from "@components/GenresPanel/GenresPanel";
import HeaderPanel from "@components/HeaderPanel/HeaderPanel";
import MovieListControl from "@components/MovieListControl/MovieListControl";
import MoviesList from "@components/MoviesList/MoviesList";
import Button from "@components/UI/Button";
import { defaultFilters } from "@config";
import { useUserContext } from "@context/userContext";
import { PageContainer } from "@globalStyle";
import { IGetMoviesParams } from "@globalTypes";
import useToggleView from "@hooks/useToggleView";
import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiltersDiv } from "./style";

const SearchPage: FC = () => {
  const { currentUser } = useUserContext();
  const history = useHistory();
  const { isBlockView, toggleView } = useToggleView();
  const [filters, setFilters] = useState<IGetMoviesParams>(defaultFilters);

  if (!currentUser) history.replace("/sign-in");
  return (
    <PageContainer>
      <HeaderPanel />
      <FiltersDiv>
        <FilterPanel filters={filters} onChange={setFilters} />
        <GenresPanel
          filters={filters}
          onChange={setFilters}
          isSaveMode={false}
        />
      </FiltersDiv>
      <MovieListControl
        title="Search movies list"
        isBlockView={isBlockView}
        toggleView={toggleView}
      >
        <Button indents="3px" onClick={() => history.push("/")}>
          To favourite list
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
