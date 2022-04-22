import Label from "@components/UI/Label";
import React, { FC } from "react";
import { RangeContainer } from "./style";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { IVoteRangeProps } from "./types";
import {
  ACTIVE_DOT_STYLE,
  DOT_STYLE,
  HANDLE_STYLE,
  RAIL_STYLE,
  TRACK_STYLE,
  MARKS,
  MAX,
  MIN,
  STEP,
} from "./config";

const VoteRange: FC<IVoteRangeProps> = ({ voteAverage, onAfterChange }) => {
  const { gte, lte } = voteAverage;

  return (
    <RangeContainer>
      <Label>
        Vote average: {gte} - {lte}
      </Label>
      <Slider
        range
        draggableTrack={true}
        allowCross={false}
        defaultValue={[gte!, lte!]}
        min={MIN}
        max={MAX}
        step={STEP}
        marks={MARKS}
        trackStyle={TRACK_STYLE}
        railStyle={RAIL_STYLE}
        dotStyle={DOT_STYLE}
        activeDotStyle={ACTIVE_DOT_STYLE}
        handleStyle={HANDLE_STYLE}
        onAfterChange={onAfterChange}
      />
    </RangeContainer>
  );
};

export default VoteRange;
