import styled from "styled-components";
import { ILabelProps } from "./types";
import tw from "twin.macro";

const errorStyle = tw`px-4 text-sm italic text-red-600`;

const Label = styled.label<ILabelProps>`
  ${tw`py-0 pl-8 my-1 mx-0 text-lg font-medium`}
  
  ${({ type }) => type === "error" && errorStyle}
`;

export default Label;
