import styled from "styled-components";
import tw from "twin.macro";
import { IGenreProps } from "./types";

const checkedStyle = tw`text-white bg-blue-500`;
const uncheckedStyle = tw`text-black bg-transparent`;

const Genre = styled.div<IGenreProps>`
  ${tw`border-2 border-blue-500 rounded-xl py-0.5 px-1 m-1 cursor-pointer select-none`}
  ${({ checked }) => (checked ? checkedStyle : uncheckedStyle)}


  &:active {
    ${({ checked }) => (checked ? uncheckedStyle : checkedStyle)}
  }
`;

export default Genre;
