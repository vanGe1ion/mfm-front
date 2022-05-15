import styled from "styled-components";
import tw from "twin.macro";

export const MainContainer = styled.div`
  ${tw`flex flex-col h-screen justify-center space-y-10 items-center bg-blue-200`}
`;

export const HeaderHolder = styled.div`
  ${tw`flex flex-col items-center`}
`;

export const LogoHeader = styled.h1`
  ${tw`text-5xl font-serif italic font-bold my-3`}
`;

export const FormHolder = styled.div`
  ${tw`bg-white h-80 w-1/4 border-4 border-blue-600 rounded-lg shadow-2xl`}
  min-width: 20rem;
`;
