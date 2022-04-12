import styled, { css } from "styled-components";
import tw from "twin.macro";
import { IViewed, IFontSize } from "@globalTypes";

const viewedStyle = tw`opacity-40`;

export const Poster = styled.img`
  ${tw`rounded-xl`}
`;

export const isViewed = css<IViewed>`
  ${({ isViewed }) => isViewed && viewedStyle}
`;

export const fontSized = css<IFontSize>`
  font-size: ${({ fontSize }) => fontSize ?? "medium"};
`;

export const YearSpan = styled.span<IFontSize>`
  ${tw`italic text-blue-700`}
  ${fontSized}
`;

export const Vote = styled.div<IFontSize>`
  ${tw`min-w-max font-bold italic text-blue-500 self-end`}
  ${fontSized}
`;

export const VoteCount = styled.span<IFontSize>`
  ${tw` text-blue-400`}
  ${fontSized}
`;

export const MovieTitle = styled.h1<IFontSize>`
  ${tw`font-bold italic text-blue-900`}
  max-width: fit-content;
  ${fontSized}
`;

export const PageContainer = styled.div`
  ${tw`flex flex-col h-screen bg-blue-200 `}
`;