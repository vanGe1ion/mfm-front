import styled, { css } from "styled-components";
import tw from "twin.macro";
import { IIconProps } from "./types";

const inverted = css`
  filter: invert(100%);
`;
const notInverted = css`
  filter: invert(0%);
`;

const Icon = styled.img<IIconProps>`
  ${tw`w-6`}
  
  ${({ colorInvert }) => colorInvert && inverted}

  &:hover {
    ${({ colorInvert, disabled }) => colorInvert && !disabled && notInverted}
  }
`;

export default Icon;
