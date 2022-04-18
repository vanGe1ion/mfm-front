import React, { FC } from "react";
import { SegmentHeader, SegmentMain, SegmnetContainer } from "./style";
import { IBorderedSegmentProps } from "./types";

const BorderedSegment: FC<IBorderedSegmentProps> = ({
  marginLeft,
  width,
  title,
  children,
}) => {
  return (
    <SegmentMain width={width}>
      <SegmentHeader>{title}</SegmentHeader>
      <SegmnetContainer marginLeft={marginLeft}>{children}</SegmnetContainer>
    </SegmentMain>
  );
};

export default BorderedSegment;
