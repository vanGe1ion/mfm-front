import BorderedSegment from "@components/BorderedSegment/BorderedSegment";
import React, { FC } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  RangeContainer,
  rangeActiveDotStyle,
  SelectContainer,
  rangeDotStyle,
  rangeHandleStyle,
  rangeRailStyle,
  rangeTrackStyle,
  BaseContainer,
  LeftPaddingDiv,
} from "./style";
import Select from "@components/UI/Select";
import Label from "@components/UI/Label";
import { IFilterChanged, IGetMoviesParams } from "@globalTypes";

const FilterPanel: FC<IFilterChanged> = ({ filters, onChange }) => {
  const { voteAverage } = filters!;
  const { gte, lte } = voteAverage!;
  const yearArray: number[] = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i > 1899; --i) yearArray.push(i);

  return (
    <BorderedSegment title="Filters" marginLeft="-5rem" width="auto">
      <BaseContainer>
        <RangeContainer>
          <Label>
            Vote average: {gte} - {lte}
          </Label>
          <Slider
            range
            draggableTrack={true}
            allowCross={false}
            defaultValue={[gte!, lte!]}
            min={0}
            max={10}
            step={0.1}
            marks={{
              0: "0",
              2: "2",
              4: "4",
              6: "6",
              8: "8",
              10: "10",
            }}
            trackStyle={rangeTrackStyle}
            railStyle={rangeRailStyle}
            dotStyle={rangeDotStyle}
            activeDotStyle={rangeActiveDotStyle}
            handleStyle={rangeHandleStyle}
            onAfterChange={(rangeValue) => {
              if (Array.isArray(rangeValue))
                onChange!({
                  ...filters,
                  voteAverage: { gte: rangeValue[0], lte: rangeValue[1] },
                } as IGetMoviesParams);
            }}
          />
        </RangeContainer>
        <SelectContainer>
          <Label>Release year</Label>
          <LeftPaddingDiv>
            <Select
              indents="2px"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                onChange!({
                  ...filters,
                  primaryReleaseYear: +e.target.value,
                } as IGetMoviesParams);
              }}
            >
              {yearArray.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </LeftPaddingDiv>
        </SelectContainer>
      </BaseContainer>
    </BorderedSegment>
  );
};

export default FilterPanel;
