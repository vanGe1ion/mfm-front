import { TMovieView } from "../../types";

export interface IMovieControlProps{
  view: TMovieView;
  setView: (prev: React.SetStateAction<TMovieView>) => void;
}