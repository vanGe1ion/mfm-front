import styled from "styled-components";
import tw from "twin.macro";

export const GenresMain = styled.div`
  ${tw`flex m-5 px-1 pb-1 pt-2 border-4 border-blue-500 rounded-2xl`}
`;

export const GenresHeader = styled.span`
  ${tw`bg-blue-200 px-3 relative -mt-6 ml-4 whitespace-nowrap h-5`}
`;

export const GenresContainer = styled.div`
  ${tw`flex flex-row flex-wrap  w-full -ml-44`}
`;
