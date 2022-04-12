import { IGenre } from "@globalTypes";

export interface IGenresPanelProps {
  isSaveMode: boolean;
  getCheckedGenres?: (checkedGenresId:number[]) => void;
}
