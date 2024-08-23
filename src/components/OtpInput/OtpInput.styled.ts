import styled from "styled-components/native";
import { TextInput } from "react-native";
import colors from "../../styles/colors";

export const InputContainer = styled.TouchableOpacity`
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

export const OtpBox = styled(TextInput).attrs({
  selectionColor: colors.parrotPrimary["primary-950"],
})`
  height: 60px;
  width: 60px;
  border-width: 1px;
  border-color: #bdbdbd;
  border-radius: 8px;
  text-align: center;
  font-size: 22px;
  font-family: "bold";
  color: black;
`;
