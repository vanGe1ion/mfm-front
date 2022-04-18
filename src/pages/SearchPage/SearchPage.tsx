import FilterPanel from "@components/FilterPanel/FilterPanel";
import GenresPanel from "@components/GenresPanel/GenresPanel";
import HeaderPanel from "@components/HeaderPanel/HeaderPanel";
import MovieListControl from "@components/MovieListControl/MovieListControl";
import MoviesList from "@components/MoviesList/MoviesList";
import Button from "@components/UI/Button";
import { useUserContext } from "@context/userContext";
import { PageContainer } from "@globalStyle";
import { IGetMoviesParams } from "@globalTypes";
import useToggleView from "@hooks/useToggleView";
import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchDiv } from "./style";

const SearchPage: FC = () => {
  const { currentUser } = useUserContext();
  const history = useHistory();
  const { isBlockView, toggleView } = useToggleView();
  const [search, setSearch] = useState<IGetMoviesParams>({});

  if (!currentUser) history.replace("/sign-in");
  return (
    <PageContainer>
      <HeaderPanel />
      <SearchDiv>
        <FilterPanel
          changeSearchCallback={(range) =>
            setSearch((prev) => {
              return { ...prev, voteAverage: { gte: range[0], lte: range[1] } };
            })
          }
        />
        <GenresPanel isSaveMode={false} />
      </SearchDiv>
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
        search={search}
      />
    </PageContainer>
  );
};

export default SearchPage;
