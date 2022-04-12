import HeaderPanel from "@components/HeaderPanel/HeaderPanel";
import MovieListControl from "@components/MovieListControl/MovieListControl";
import Button from "@components/UI/Button";
import { useUserContext } from "@context/userContext";
import { PageContainer } from "@globalStyle";
import useToggleView from "@hooks/useToggleView";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";

const SearchPage: FC = () => {
  const { currentUser } = useUserContext();
  const history = useHistory();
  const { isBlockView, toggleView } = useToggleView();

  if (!currentUser) history.replace("/sign-in");
  return (
    <PageContainer>
      <HeaderPanel />
      <MovieListControl
        title="Search movies list"
        isBlockView={isBlockView}
        toggleView={toggleView}
      >
        <Button indents="3px" onClick={() => history.push("/")}>
          To favorite list
        </Button>
      </MovieListControl>
    </PageContainer>
  );
};

export default SearchPage;
