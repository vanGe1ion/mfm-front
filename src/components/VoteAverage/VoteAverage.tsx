import { Vote, VoteCount } from "@globalStyle";
import React, { FC } from "react";
import { IVoteAverageProps } from "./types";

const VoteAverage: FC<IVoteAverageProps> = ({
  voteAverage,
  voteCount,
  voteAverageSize,
  voteCountSize,
}) => {
  return (
    <Vote fontSize={voteAverageSize}>
      {voteAverage}/10 <VoteCount fontSize={voteCountSize}>({voteCount})</VoteCount>
    </Vote>
  );
};

export default VoteAverage;
