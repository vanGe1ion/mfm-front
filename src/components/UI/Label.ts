import styled from "styled-components";
import { ILabelProps } from "./types";
import tw from "twin.macro";
import { fontSized } from "@globalStyle";

const errorStyle = tw`px-4 text-sm italic text-red-600`;
const leftPadding = tw`pl-8`;

const Label = styled.label<ILabelProps>`
  ${tw`py-0 my-1 mx-0 text-lg font-medium whitespace-nowrap`}

  ${({ type }) => type === "error" && errorStyle}
  ${({ withLeftPadding }) => withLeftPadding && leftPadding}
  ${fontSized}
`;

export default Label;
