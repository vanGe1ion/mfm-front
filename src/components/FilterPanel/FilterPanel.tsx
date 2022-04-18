import BorderedSegment from "@components/BorderedSegment/BorderedSegment";
import React, { FC } from "react";
import { IFilterPanel } from "./types";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const FilterPanel: FC<IFilterPanel> = ({ changeSearchCallback }) => {
  
  return (
    <BorderedSegment title="Filters" marginLeft="-5rem" width="40%">
      <Slider
        range
        defaultValue={[0, 10]}
        min={0}
        max={10}
        step={1}
        marks={{
          0:'0', 
          2:"2",
          4:"4",
          6:"6",
          8:"8",
          10:"10",
        }}
        trackStyle={[{ backgroundColor: "rgb(59 130 256)" }]}
        dotStyle={{ borderColor: "rgb(147 197 253)" }}
        activeDotStyle={{ borderColor: "blue" }}
        handleStyle={[{ backgroundColor: "blue" }, { backgroundColor: "blue" }]}
        railStyle={{ backgroundColor: "rgb(147 197 253)" }}
        onChange={(value) => {
          if (Array.isArray(value)) changeSearchCallback(value);
        }}
        allowCross={false}
      />
    </BorderedSegment>
  );
};

export default FilterPanel;
