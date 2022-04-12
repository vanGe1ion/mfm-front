import styled from "styled-components";
import tw from "twin.macro";
import { IViewed } from "@globalTypes";
import { isViewed } from "@globalStyle";

export const BlockContainer = styled.div<IViewed>`
  ${tw`flex flex-col border-4 border-blue-500 rounded-lg p-2 mr-2 mb-2`}

  ${isViewed}
`;

export const MediaBlock = styled.div`
  ${tw`flex flex-row pl-2`}
`;

export const ControlContainer = styled.div`
  ${tw`flex flex-col pl-2`}
`;

export const TextInfo = styled.div`
  ${tw`p-2 flex flex-col flex-grow`}
`;

export const Footer = styled.div`
  ${tw`flex place-content-end flex-grow`}
`;