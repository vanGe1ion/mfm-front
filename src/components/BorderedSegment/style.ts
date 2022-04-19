import styled from "styled-components";
import tw from "twin.macro";
import { ISegmentContainerProps, ISegmentMainProps } from "./types";

export const SegmentMain = styled.div<ISegmentMainProps>`
  ${tw`flex ml-5 my-5 px-1 pb-1 pt-2 border-4 border-blue-500 rounded-2xl`}
  width: ${({ width }) => width ?? "100%"};
`;

export const SegmentHeader = styled.span`
  ${tw`bg-blue-200 px-3 relative -mt-6 ml-4 whitespace-nowrap h-5`}
`;

export const SegmnetContainer = styled.div<ISegmentContainerProps>`
  ${tw`flex flex-row flex-wrap w-full items-baseline`}

  margin-left: ${({ marginLeft }) => marginLeft ?? "0"}
`;
