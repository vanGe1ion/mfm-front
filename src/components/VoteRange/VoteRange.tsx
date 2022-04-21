import Label from "@components/UI/Label";
import React, { FC } from "react";
import { RangeContainer } from "./style";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { IVoteRangeProps } from "./types";
import {
  rangeActiveDotStyle,
  rangeDotStyle,
  rangeHandleStyle,
  rangeRailStyle,
  rangeTrackStyle,
  rangeMarks,
  rangeMax,
  rangeMin,
  rangeStep,
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
        min={rangeMin}
        max={rangeMax}
        step={rangeStep}
        marks={rangeMarks}
        trackStyle={rangeTrackStyle}
        railStyle={rangeRailStyle}
        dotStyle={rangeDotStyle}
        activeDotStyle={rangeActiveDotStyle}
        handleStyle={rangeHandleStyle}
        onAfterChange={onAfterChange}
      />
    </RangeContainer>
  );
};

export default VoteRange;
