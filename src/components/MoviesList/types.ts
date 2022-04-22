import { IGetMoviesParams } from "@globalTypes";

export interface IMoviesListProps {
  isBlockView: boolean;
  isFavouriteMovies: boolean;
  filters?: IGetMoviesParams;
}

export interface IMoviePanelProps {
  isBlockView: boolean;
}
