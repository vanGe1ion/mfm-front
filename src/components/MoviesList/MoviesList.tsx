import React, { FC } from "react";
import MovieBlockItem from "@components/MovieBlockItem/MovieBlockItem";
import MovieRowItem from "@components/MovieRowItem/MovieRowItem";
import { MoviePanel } from "./style";
import { IMoviesListProps } from "./types";
import useMovies from "@hooks/useMovies";

const MoviesList: FC<IMoviesListProps> = ({ isBlockView }) => {
  const isFavouriteMovies = true;
  const { movies, addToFavourite, ...controls } = useMovies(isFavouriteMovies);

  const ListItem = isBlockView ? MovieBlockItem : MovieRowItem;

  return (
    <MoviePanel isBlockView={isBlockView}>
      {movies.map((movie, idx) => {
        return (
          <ListItem
            key={movie.id}
            movie={movie}
            controls={controls}
            index={idx}
          />
        );
      })}
    </MoviePanel>
  );
};

export default MoviesList;
