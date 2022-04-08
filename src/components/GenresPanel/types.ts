import { IGenre } from "../../types";

export interface IGenresPanelProps {
  genres: IGenre[];
  setGenres: (prev: React.SetStateAction<IGenre[]>) => void;
}
