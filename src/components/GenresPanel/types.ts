import { IGenre } from "@globalTypes";

export interface IGenresPanelProps {
  genres: IGenre[];
  setGenres: (prev: React.SetStateAction<IGenre[]>) => void;
}
