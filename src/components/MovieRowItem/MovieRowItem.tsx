import React, { FC } from "react";
import { TMDBImageHost } from "../../config";
import IconedButton from "../IconedButton";
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
import approveIco from "./approve.png";
import dismissIco from "./dismiss.png";
import { IMovieListItemProps } from "../../types";
import { LSAPIRemoveFavouriteMovie, LSAPIUpdateFavouriteMovie } from "../../utils/localStorageAPI";

const MovieRowItem: FC<IMovieListItemProps> = ({ movie, setMovies, index }) => {
  const removeMovieHandler = () => {
    const removeConfirm = window.confirm(
      `Are your sure, you want to remove "${movie.title}" from your favorite movies?`
    );
    if (removeConfirm) {
      setMovies(prev => {
        LSAPIRemoveFavouriteMovie(movie.id!)
        const newMovies = [...prev];
        newMovies.splice(index, 1);
        return newMovies
      })
    }
  };

  const toggleViewedMovieHandler = () => {
    setMovies(prev => {
      LSAPIUpdateFavouriteMovie(movie.id!)
      const newMovies = [...prev];
      newMovies[index].isViewed = !newMovies[index].isViewed;
      return newMovies
    })
  };

  return (
    <ItemContainer isViewed={movie.isViewed}>
      <IndexSpan>{index + 1}</IndexSpan>
      <Poster
        src={TMDBImageHost + movie.posterPath}
        alt="movie poster"
      ></Poster>
      <MovieInfo>
        <MovieText>
          <MainTitle>
            {movie.title}{" "}
            <YearSpan>({movie.releaseDate?.split("-")[0]})</YearSpan>
          </MainTitle>
          <OriginalTitle>{movie.originalTitle}</OriginalTitle>
          <Overview>{movie.overview}</Overview>
        </MovieText>
        <Footer>
          <Genres>
            {movie.genres?.map((genre) => (
              <MovieGenre key={genre}>{genre}</MovieGenre>
            ))}
          </Genres>
          <Vote>
            {movie.voteAverage}/10 <VoteCount>({movie.voteCount})</VoteCount>
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
