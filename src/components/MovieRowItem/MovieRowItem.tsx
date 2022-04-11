import React, { FC } from "react";
import {
  Footer,
  Genres,
  IndexSpan,
  ItemContainer,
  MainTitle,
  MovieControls,
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
import approveIco from "./approve.svg";
import dismissIco from "./dismiss.svg";

import { TMDBImageHost } from "@config";
import IconedButton from "@components/IconedButton";
import { IMovieListItemProps } from "@globalTypes";
import {
  LSAPIRemoveFavouriteMovie,
  LSAPIUpdateFavouriteMovie,
} from "@utils/localStorageAPI";

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

  const removeMovieHandler = () => {
    const removeConfirm = window.confirm(
      `Are your sure, you want to remove "${title}" from your favorite movies?`
    );
    if (removeConfirm) {
      LSAPIRemoveFavouriteMovie(id!);
      setMovies((prev) => {
        const newMovies = [...prev];
        newMovies.splice(index, 1);
        return newMovies;
      });
    }
  };

  const toggleViewedMovieHandler = () => {
    LSAPIUpdateFavouriteMovie(id!);
    setMovies((prev) => {
      const newMovies = [...prev];
      newMovies[index].isViewed = !newMovies[index].isViewed;
      return newMovies;
    });
  };

  return (
    <ItemContainer isViewed={isViewed}>
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
      <MovieControls>
        <IconedButton
          indents="3px"
          colorInvert
          src={approveIco}
          onClick={toggleViewedMovieHandler}
        />
        <IconedButton
          indents="3px"
          colorInvert
          src={dismissIco}
          onClick={removeMovieHandler}
        />
      </MovieControls>
    </ItemContainer>
  );
};

export default MovieRowItem;
