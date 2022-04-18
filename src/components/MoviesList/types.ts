import { IGetMoviesParams } from "@globalTypes";

export interface IMoviesListProps {
  isBlockView: boolean;
  isFavouriteMovies: boolean;
  search?: IGetMoviesParams;
}

export interface IMoviePanelProps {
  isBlockView: boolean;
}
