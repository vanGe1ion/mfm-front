import { IMovie, IMovieControls } from "@globalTypes";

export interface IMovieControlProps {
  movieId: number;
  isFavourite?: boolean;
  controls: IMovieControls;
}
