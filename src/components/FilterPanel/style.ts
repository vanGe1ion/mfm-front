import styled from "styled-components";
import tw from "twin.macro";

export const rangeTrackStyle = [{ backgroundColor: "rgb(59 130 256)" }];
export const rangeDotStyle = { borderColor: "rgb(147 197 253)" };
export const rangeActiveDotStyle = { borderColor: "blue" };
export const rangeHandleStyle = [
  { backgroundColor: "blue" },
  { backgroundColor: "blue" },
];
export const rangeRailStyle = { backgroundColor: "rgb(147 197 253)" };

export const BaseContainer = styled.div`
  ${tw`w-full`}
  min-width: 25rem
`;

export const SelectContainer = styled.div`
  ${tw`w-full flex px-2 pt-2`}
`;

export const RangeContainer = styled.div`
  ${tw`w-full px-3 pb-4`}
`;

export const LeftPaddingDiv = styled.div`
  ${tw`w-full pl-2`}
`;
