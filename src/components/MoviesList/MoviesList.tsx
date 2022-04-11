import React, { FC } from "react";
import MovieBlockItem from "@components/MovieBlockItem/MovieBlockItem";
import MovieRowItem from "@components/MovieRowItem/MovieRowItem";
import { MoviePanel } from "./style";
import { IMoviesListProps } from "./types";

const MoviesList: FC<IMoviesListProps> = ({ movies, setMovies, isBlockView }) => {
  const ListItem = isBlockView ? MovieBlockItem : MovieRowItem;

  return (
    <MoviePanel isBlockView={isBlockView}>
      {movies.map((movie, idx) => {
        return <ListItem key={movie.id} movie={movie} setMovies={setMovies} index={idx} />;
      })}
    </MoviePanel>
  );
};

export default MoviesList;
