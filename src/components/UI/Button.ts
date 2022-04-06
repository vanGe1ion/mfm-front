import styled from "styled-components";
import { IButtonProps } from "./types";
import tw from "twin.macro";
import { changeableIndents } from "./style";

const Button = styled.button<IButtonProps>`
  ${tw`border-4 border-blue-500 rounded-lg text-white bg-blue-500`}
  
  ${({indents})=> indents && changeableIndents}
  
  font-size: ${({ fontSize }) => fontSize ?? "medium"};
  
  &:hover {
    ${tw`text-black bg-transparent`}
  }
`;

export default Button;
