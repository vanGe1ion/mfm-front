import React, { FC } from "react";
import MovieBlockItem from "../MovieBlockItem/MovieBlockItem";
import MovieRowItem from "../MovieRowItem/MovieRowItem";
import { MoviePanel } from "./style";
import { IMoviesListProps } from "./types";

const MoviesList: FC<IMoviesListProps> = ({ movies, setMovies, view }) => {
  const ListItem = view === "row" ? MovieRowItem : MovieBlockItem;

  return (
    <MoviePanel view={view}>
      {movies.map((movie, idx) => {
        return <ListItem key={movie.id} movie={movie} setMovies={setMovies} index={idx} />;
      })}
    </MoviePanel>
  );
};

export default MoviesList;
