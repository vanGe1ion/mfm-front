import React, { FC } from "react";
import {
  Footer,
  Genres,
  IndexSpan,
  RowContainer,
  ControlContainer,
  MovieGenre,
  MovieInfo,
  MovieText,
  OriginalTitle,
  Overview,
  MovieBody,
} from "./style";
import { Poster } from "@globalStyle";

import { TMDBImageHost } from "@config";
import { IMovieListItemProps } from "@globalTypes";
import MovieControl from "@components/MovieControl/MovieControl";
import VoteAverage from "@components/VoteAverage/VoteAverage";
import MovieHead from "@components/MovieHead/MovieHead";

const MovieRowItem: FC<IMovieListItemProps> = ({ movie, setMovies, index }) => {
  const {
    id,
    title,
    isViewed,
    posterPath,
    releaseYear,
    originalTitle,
    overview,
    genres,
    voteAverage,
    voteCount,
  } = movie;

  return (
    <RowContainer isViewed={isViewed}>
      <IndexSpan>{index + 1}</IndexSpan>
      <Poster src={TMDBImageHost + posterPath} alt="movie poster"></Poster>
      <MovieInfo>
        <MovieBody>
          <MovieText>
            <MovieHead
              title={title}
              releaseYear={releaseYear}
              titleSize="x-large"
            />
            <OriginalTitle>{originalTitle}</OriginalTitle>
            <Overview>{overview}</Overview>
          </MovieText>
          <ControlContainer>
            <MovieControl
              movieId={id!}
              index={index}
              title={title!}
              setMovies={setMovies}
            />
          </ControlContainer>
        </MovieBody>

        <Footer>
          <Genres>
            {genres.map((genre) => (
              <MovieGenre key={genre}>{genre}</MovieGenre>
            ))}
          </Genres>
          {voteAverage && (
            <VoteAverage
              voteAverage={voteAverage}
              voteCount={voteCount!}
              voteAverageSize="xx-large"
              voteCountSize="large"
            />
          )}
        </Footer>
      </MovieInfo>
    </RowContainer>
  );
};

export default MovieRowItem;
