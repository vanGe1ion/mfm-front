import { css } from "styled-components";
import { IChangeableIndents } from "./types";

export const changeableIndents = css<IChangeableIndents>`
  padding: ${({ indents }) => indents ?? "2px"};
  margin: ${({ indents }) => indents ?? "2px"};
`;
