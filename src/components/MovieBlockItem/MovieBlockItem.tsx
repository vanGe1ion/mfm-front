import React, { FC } from "react";
import { IMovieListItemProps } from "@globalTypes";
import { Poster } from "@globalStyle";
import { TMDBImageHost } from "@config";
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

const MovieBlockItem: FC<IMovieListItemProps> = ({
  movie,
  controls,
}) => {
  const {
    id,
    title,
    isViewed,
    posterPath,
    releaseYear,
    voteAverage,
    voteCount,
  } = movie;

  return (
    <BlockContainer isViewed={isViewed}>
      <MediaBlock>
        <Poster src={TMDBImageHost + posterPath} alt="movie poster"></Poster>
        <ControlContainer>
          <MovieControl
            movieId={id}
            controls={controls}
          />
        </ControlContainer>
      </MediaBlock>
      <TextInfo>
        <MovieHead title={title} releaseYear={releaseYear} yearSize="small" />
        <Footer>
          {voteAverage && (
            <VoteAverage
              voteAverage={voteAverage}
              voteCount={voteCount!}
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
