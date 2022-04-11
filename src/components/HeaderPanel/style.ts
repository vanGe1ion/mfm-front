import styled from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.div`
  ${tw`flex flex-row justify-between bg-blue-300 p-3`}
`;

export const MainHeader = styled.h1`
  ${tw`text-4xl font-serif italic font-bold align-middle my-auto px-2`}
`;

export const UserPanel = styled.div`
  ${tw`flex flex-row`}
`;

export const UserContainer = styled.h1`
  ${tw`text-xl font-serif align-middle my-auto mr-2`}
`;

export const UserSpan = styled.span`
  ${tw`font-bold italic`}
`;
