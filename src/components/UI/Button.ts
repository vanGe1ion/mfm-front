import styled from "styled-components";
import { IButtonProps } from "./types";

const Button = styled.button<IButtonProps>`
  border: 3px solid #0484c7;
  border-radius: 7px;
  color: white;
  background-color: #0484c7;

  font-size: ${({ fontSize }) => fontSize ?? "medium"};
  padding: ${({ size }) => size ?? "2px"};
  margin: ${({ size }) => size ?? "2px"};

  &:hover {
    color: #0484c7;
    background-color: white;
  }
`;

export default Button;
