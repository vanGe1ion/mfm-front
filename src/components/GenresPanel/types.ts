import { IFilterChanged } from "@globalTypes";

export interface IGenresPanelProps extends IFilterChanged {
  title: string;
  isSaveMode: boolean;
}
