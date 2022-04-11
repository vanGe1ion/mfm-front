import React, { FC } from "react";
import {
  Footer,
  Genres,
  IndexSpan,
  RowContainer,
  MainTitle,
  ControlContainer,
  MovieGenre,
  MovieInfo,
  MovieText,
  OriginalTitle,
  Overview,
  Poster,
  Vote,
  VoteCount,
  YearSpan,
} from "./style";

import { TMDBImageHost } from "@config";
import { IMovieListItemProps } from "@globalTypes";
import MovieControl from "@components/MovieControl/MovieControl";

const MovieRowItem: FC<IMovieListItemProps> = ({ movie, setMovies, index }) => {
  const {
    id,
    title,
    isViewed,
    posterPath,
    releaseDate,
    originalTitle,
    overview,
    genres,
    voteAverage,
    voteCount,
  } = movie;
  const releaseYear = new Date(releaseDate!).getFullYear();

  return (
    <RowContainer isViewed={isViewed}>
      <IndexSpan>{index + 1}</IndexSpan>
      <Poster src={TMDBImageHost + posterPath} alt="movie poster"></Poster>
      <MovieInfo>
        <MovieText>
          <MainTitle>
            {title} <YearSpan>({releaseYear})</YearSpan>
          </MainTitle>
          <OriginalTitle>{originalTitle}</OriginalTitle>
          <Overview>{overview}</Overview>
        </MovieText>
        <Footer>
          <Genres>
            {genres?.map((genre) => (
              <MovieGenre key={genre}>{genre}</MovieGenre>
            ))}
          </Genres>
          <Vote>
            {voteAverage}/10 <VoteCount>({voteCount})</VoteCount>
          </Vote>
        </Footer>
      </MovieInfo>
      <ControlContainer>
        <MovieControl
          movieId={id!}
          index={index}
          title={title!}
          setMovies={setMovies}
        />
      </ControlContainer>
    </RowContainer>
  );
};

export default MovieRowItem;
