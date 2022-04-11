import styled, { css } from "styled-components";
import tw from "twin.macro";
import { IViewed } from "@globalTypes";

const viewedStyle = tw`opacity-40`;

export const Poster = styled.img`
  ${tw`rounded-xl`}
`;

export const isViewed = css<IViewed>`
  ${({ isViewed }) => isViewed && viewedStyle}
`;
