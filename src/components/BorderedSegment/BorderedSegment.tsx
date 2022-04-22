import Label from "@components/UI/Label";
import React, { FC } from "react";
import { SegmentMain, SegmnetContainer } from "./style";
import { IBorderedSegmentProps } from "./types";

const BorderedSegment: FC<IBorderedSegmentProps> = ({ title, children }) => {
  return (
    <SegmentMain>
      <Label withLeftPadding>{title}</Label>
      <SegmnetContainer>{children}</SegmnetContainer>
    </SegmentMain>
  );
};

export default BorderedSegment;
