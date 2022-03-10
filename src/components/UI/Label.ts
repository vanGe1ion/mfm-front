import styled from "styled-components";
import { ILabelProps } from "./types";



const Label = styled.label<ILabelProps>`
  padding: 0 2em;
  margin: 3px 0;

  font-size: ${({ type }) => (type === "error" ? "small" : "large")};
  ${({ type }) => (type === "error" ? "font-style: italic;  color: red;" : "")};
`;

export default Label;
