import styled from "styled-components";

const TextInput = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "4px",
}))`
  border: 2px solid #0484c7;
  border-radius: 7px;
  padding: ${(props) => props.size};
  margin: ${(props) => props.size};
`;

export default TextInput;
