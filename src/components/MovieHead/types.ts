import { TFontSize } from "@globalTypes";

export interface IMovieHeadProps {
  title: string;
  releaseYear: number | null;
  titleSize?: TFontSize;
  yearSize?: TFontSize;
}
