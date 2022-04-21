import React, { FC } from "react";
import { IMovieListItemProps } from "@globalTypes";
import {
  BlockContainer,
  ControlContainer,
  Footer,
  MediaBlock,
  TextInfo,
} from "./style";
import MovieControl from "@components/MovieControl/MovieControl";
import VoteAverage from "@components/VoteAverage/VoteAverage";
import MovieHead from "@components/MovieHead/MovieHead";
import Poster from "@components/Poster/Poster";

const MovieBlockItem: FC<IMovieListItemProps> = ({ movie, controls }) => {
  const {
    id,
    title,
    isFavourite,
    isViewed,
    posterPath,
    releaseYear,
    voteAverage,
    voteCount,
  } = movie;

  return (
    <BlockContainer isViewed={isViewed}>
      <MediaBlock>
        <Poster posterPath={posterPath}></Poster>
        <ControlContainer>
          <MovieControl
            movieId={id}
            isFavourite={isFavourite}
            controls={controls}
          />
        </ControlContainer>
      </MediaBlock>
      <TextInfo>
        <MovieHead title={title} releaseYear={releaseYear} yearSize="small" />
        <Footer>
          {voteCount > 0 && (
            <VoteAverage
              voteAverage={voteAverage}
              voteCount={voteCount}
              voteAverageSize="large"
              voteCountSize="small"
            />
          )}
        </Footer>
      </TextInfo>
    </BlockContainer>
  );
};

export default MovieBlockItem;
