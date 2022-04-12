import styled from "styled-components";
import tw from "twin.macro";
import { IViewed } from "@globalTypes";
import { isViewed } from "@globalStyle";

export const RowContainer = styled.div<IViewed>`
  ${tw`flex flex-row border-4 border-blue-500 rounded-lg p-2 mb-2`}

  ${isViewed}
`;

export const IndexSpan = styled.span`
  ${tw`pl-2 pr-4 my-auto mx-0 font-bold select-none font-sans`}
`;

export const MovieInfo = styled.div`
  ${tw`px-6 flex flex-col flex-grow justify-between`}
`;

export const MovieBody = styled.div`
  ${tw`flex flex-row`}
`;

export const MovieText = styled.div`
  ${tw`flex flex-col flex-grow`}
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

export const ControlContainer = styled.div`
  ${tw`min-w-max pt-6 ml-6`}
`;
