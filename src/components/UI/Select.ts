import { fontSized } from "@globalStyle";
import { IFontSize } from "@globalTypes";
import styled from "styled-components";
import tw from "twin.macro";
import { changeableIndents } from "./style";
import { IChangeableIndents } from "./types";

const Select = styled.select<IChangeableIndents & IFontSize>`
  ${tw`border-2 border-blue-500 rounded-lg w-full`}

  ${({ indents }) => indents && changeableIndents}
  ${fontSized};
`;

export default Select;
