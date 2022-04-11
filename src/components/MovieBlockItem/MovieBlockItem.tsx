import React, { FC } from "react";
import { IMovieListItemProps } from "@globalTypes";
import { Poster } from "@globalStyle";
import { TMDBImageHost } from "@config";
import {
  BlockContainer,
  ControlContainer,
  Footer,
  MediaBlock,
  MovieTitle,
  TextInfo,
  Vote,
  VoteCount,
  YearSpan,
} from "./style";
import MovieControl from "@components/MovieControl/MovieControl";

const MovieBlockItem: FC<IMovieListItemProps> = ({
  movie,
  setMovies,
  index,
}) => {
  const {
    id,
    title,
    isViewed,
    posterPath,
    releaseDate,
    voteAverage,
    voteCount,
  } = movie;
  const releaseYear = new Date(releaseDate!).getFullYear();

  return (
    <BlockContainer isViewed={isViewed}>
      <MediaBlock>
        <Poster src={TMDBImageHost + posterPath} alt="movie poster"></Poster>
        <ControlContainer>
          <MovieControl
            movieId={id!}
            index={index}
            title={title!}
            setMovies={setMovies}
          />
        </ControlContainer>
      </MediaBlock>
      <TextInfo>
        <MovieTitle>{title}</MovieTitle>
        <YearSpan>({releaseYear})</YearSpan>
        <Footer>
          <Vote>
            {voteAverage}/10 <VoteCount>({voteCount})</VoteCount>
          </Vote>
        </Footer>
      </TextInfo>
    </BlockContainer>
  );
};

export default MovieBlockItem;
