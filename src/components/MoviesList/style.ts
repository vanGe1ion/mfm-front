import styled from "styled-components";
import tw from "twin.macro";
import { IMoviePanelProps } from './types';

const flexBlock = tw``;//todo blockview

export const MoviePanel = styled.div<IMoviePanelProps>`
  ${tw`w-full px-5 mt-5 overflow-auto`}
  height: 72vh;

  ${({view}) => view === 'block' && flexBlock}
`;
