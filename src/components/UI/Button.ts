import styled from "styled-components";
import { IButtonProps } from "./types";
import tw from "twin.macro";
import { changeableIndents } from "./style";

const disabledStyle = tw`border-blue-400 bg-blue-400`;
const hovering = tw`text-black bg-transparent`;

const Button = styled.button<IButtonProps>`
  ${tw`border-4 border-blue-500 rounded-lg text-white bg-blue-500`}
  
  ${({indents})=> indents && changeableIndents}

  ${({disabled})=> disabled && disabledStyle}
  
  font-size: ${({ fontSize }) => fontSize ?? "medium"};
  
  &:hover {
    ${({disabled})=> !disabled && hovering}
  }
`;

export default Button;
