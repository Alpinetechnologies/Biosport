import styled from "styled-components/native";

export const InputContainer = styled.TouchableOpacity`
  justify-content: center;
  margin: 8px;
`;

export const InputBox = styled.TextInput`
  font-family: "regular";
  font-size: 12px;
  padding-left: 50px;
  border-color: #9e9e9e;
  border-radius: 12px;
  border-width: 1px;
  background-color: white;
  color: black;
  height: 50px;
`;

export const IconContainer = styled.View`
  position: absolute;
  left: 17.5px;
  z-index: 1;
`;
