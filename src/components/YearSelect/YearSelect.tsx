import Select from "@components/UI/Select";
import React, { FC } from "react";
import reverseYearArray from "./config";
import { SelectContainer, StyledLabel } from "./style";
import { IYearSelectProps } from "./types";

const YearSelect: FC<IYearSelectProps> = ({ onChange }) => {
  return (
    <SelectContainer>
      <StyledLabel>Release year</StyledLabel>
      <Select indents="2px" onChange={onChange}>
        {reverseYearArray.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default YearSelect;
