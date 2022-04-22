import React, { FC, useEffect } from "react";
import MovieBlockItem from "@components/MovieBlockItem/MovieBlockItem";
import MovieRowItem from "@components/MovieRowItem/MovieRowItem";
import { MoviePanel } from "./style";
import { IMoviesListProps } from "./types";
import useMovies from "@hooks/useMovies";
import { IMovieControls } from "@globalTypes";

const MoviesList: FC<IMoviesListProps> = ({
  isBlockView,
  isFavouriteMovies,
  filters,
}) => {
  const {
    movies,
    removeFromFavourite,
    toggleViewed,
    addToFavourite,
    searchMovies,
  } = useMovies(isFavouriteMovies);
  const ListItem = isBlockView ? MovieBlockItem : MovieRowItem;

  let controls: IMovieControls = isFavouriteMovies
    ? { removeFromFavourite, toggleViewed }
    : { addToFavourite };

  useEffect(() => {
    if (!isFavouriteMovies)
      searchMovies(filters!).catch((error) =>
        console.log("Movie search list loading error: ", error)
      );
  }, [filters]);

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
