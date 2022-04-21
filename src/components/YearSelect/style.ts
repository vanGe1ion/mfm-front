import styled from "styled-components";
import tw from "twin.macro";
import Label from "@components/UI/Label";

export const SelectContainer = styled.div`
  ${tw`w-full flex px-2 pt-2 pb-1`}
`;

export const StyledLabel = styled(Label)`
  ${tw`pr-2`}
`;
