import { TFontSize } from "@globalTypes";

export interface IVoteAverageProps{
  voteAverage:number;
  voteCount:number;
  voteAverageSize?:TFontSize;
  voteCountSize?:TFontSize;
}