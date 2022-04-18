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
  search,
}) => {
  const {
    movies,
    removeFromFavourite,
    toggleViewed,
    addToFavourite,
    searchMovies,
  } = useMovies(isFavouriteMovies);
  const ListItem = isBlockView ? MovieBlockItem : MovieRowItem;

  let controls: IMovieControls = {};
  if (isFavouriteMovies) controls = { removeFromFavourite, toggleViewed };
  else controls = { addToFavourite };

  useEffect(() => {
    if (!isFavouriteMovies)
      searchMovies(search!).catch((error) =>
        console.log("Movie search list loading error: ", error)
      );
  }, [search]);

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
