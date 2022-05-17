import styled from "styled-components";
import tw from "twin.macro";
import { IMoviePanelProps } from "./types";

const flexBlock = tw`flex flex-wrap content-start`;

export const MoviePanel = styled.div<IMoviePanelProps>`
  ${tw`w-full px-5 mt-5 overflow-auto`}
  height: 72vh;

  ${({ isBlockView }) => isBlockView && flexBlock}
`;

export const Loading = styled.div`
  ${tw`text-center text-3xl py-8`}
`;
