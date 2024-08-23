import styled from "styled-components/native";
import colors from "../../styles/colors";

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: ${colors.parrotPrimary["primary-950"]};
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTxt = styled.Text`
  font-size: 14px;
  color: ${colors.otherColors.black};
  font-family: "regular";
  text-align: center;
  letter-spacing: 0.5px;
`;
