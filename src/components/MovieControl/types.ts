import { IMovie } from "@globalTypes";

export interface IMovieControlProps {
  movieId: number;
  index: number;
  title: string;
  setMovies: (prev: React.SetStateAction<IMovie[]>) => void;
}
