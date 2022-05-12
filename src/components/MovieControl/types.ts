import { IMovieControls } from "@globalTypes";

export interface IMovieControlProps {
  movieId: number;
  title: string;
  isFavourite?: boolean;
  controls: IMovieControls;
}
