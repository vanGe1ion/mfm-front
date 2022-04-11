import styled from "styled-components";
import tw from "twin.macro";
import { IItemContainerProps } from "./types";

const viewedStyle = tw`opacity-40`;

export const ItemContainer = styled.div<IItemContainerProps>`
  ${tw`flex flex-row border-4 border-blue-500 rounded-lg p-2 mb-2`}
  
  ${({isViewed}) => isViewed && viewedStyle}
`;

export const IndexSpan = styled.span`
  ${tw`pl-2 pr-4 my-auto mx-0 font-bold select-none font-sans`}
`;

export const Poster = styled.img`
  ${tw`rounded-xl`}
`;

export const MovieInfo = styled.div`
  ${tw`px-6 flex flex-col flex-grow justify-between`}
`;

export const MovieText = styled.div`
  ${tw`flex flex-col`}
`;

export const MainTitle = styled.h1`
  ${tw`text-xl font-bold italic text-blue-900`}
`;

export const YearSpan = styled.span`
  ${tw`text-base italic text-blue-700`}
`;

export const OriginalTitle = styled.h3`
  ${tw`text-xs italic text-blue-900`}
`;

export const Overview = styled.div`
  ${tw`text-sm text-blue-900 mt-3`}
`;

export const Footer = styled.div`
  ${tw`flex flex-row align-bottom`}
`;

export const Genres = styled.div`
  ${tw`flex flex-row flex-grow items-end`}
`;

export const MovieGenre = styled.div`
${tw`border-2 border-blue-500 rounded-xl py-0.5 px-1 m-1 select-none text-xs`}
`;

export const Vote = styled.div`
  ${tw`min-w-max text-3xl font-bold italic text-blue-500`}
`;

export const VoteCount = styled.span`
  ${tw`text-lg text-blue-400`}
`;

export const MovieControls = styled.div`
${tw`min-w-max`}
`;
