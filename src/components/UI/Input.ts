import styled from "styled-components";
import tw from "twin.macro";
import { changeableIndents } from "./style";
import { IInputProps } from "./types";

const errorStyle = tw`bg-red-300`;

const Input = styled.input<IInputProps>`
  ${tw`border-2 border-blue-600 rounded-lg`}

  ${({ indents }) => indents && changeableIndents}
   
  ${({ isError }) => isError && errorStyle}}
`;

export default Input;
