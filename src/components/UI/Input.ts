import styled from "styled-components";

interface IInputProps {
  isError?: boolean;
}

const Input = styled.input<IInputProps>`
  border: 2px solid #0484c7;
  border-radius: 7px;
  padding: ${({ size }) => size ?? "4px"};
  margin: ${({ size }) => size ?? "4px"};
  background-color: ${({ isError }) =>
    isError ? "rgb(254 202 202)" : "white"};
`;

export default Input;
