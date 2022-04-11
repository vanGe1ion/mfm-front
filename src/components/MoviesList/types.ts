import React from "react";
import { IMovie } from "@globalTypes";

export interface IMoviesListProps {
  movies: IMovie[];
  setMovies: (prev: React.SetStateAction<IMovie[]>) => void;
  isBlockView: boolean;
}

export interface IMoviePanelProps {
  isBlockView: boolean;
}
