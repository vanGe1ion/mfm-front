import { IRange } from "@globalTypes";

export interface IVoteRangeProps {
  voteAverage: IRange;
  onAfterChange: (value: number | number[]) => void;
}
