import React from "react";
import { IMovie, TMovieView } from "../../types";

export interface IMoviesListProps {
  movies: IMovie[];
  setMovies: (prev: React.SetStateAction<IMovie[]>) => void;
  view: TMovieView;
}

export interface IMoviePanelProps {
  view: TMovieView;
}
