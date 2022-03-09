import styled from "styled-components";

interface IFormInputProps {
  isError?: boolean;
}

const FormInput = styled.input<IFormInputProps>`
  border: 2px solid #0484c7;
  border-radius: 7px;
  padding: ${({ size }) => size ?? "4px"};
  margin: ${({ size }) => size ?? "4px"};
  background-color: ${({ isError }) =>
    isError ? "rgb(254 202 202)" : "white"};
`;

export default FormInput;
