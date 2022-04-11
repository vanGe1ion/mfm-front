import styled from "styled-components";
import tw from "twin.macro";

export const PanelHead = styled.div`
  ${tw`flex flex-row justify-between px-10`}
`;

export const NameHeader = styled.h1`
  ${tw`text-2xl font-bold italic align-middle my-auto`}
`;

export const ControlDiv = styled.div`
  ${tw`flex align-top`}
`;

export const PanelBody = styled.div`
  ${tw`w-full p-5 overflow-auto`}
  height: 72vh;
`;
