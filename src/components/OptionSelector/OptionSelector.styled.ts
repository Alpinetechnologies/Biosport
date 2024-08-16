import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

interface RoundOptionProps extends TouchableOpacityProps {
  selected?: boolean;
}

export const OptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const OptionCircle = styled.TouchableOpacity<RoundOptionProps>`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: ${(props) => (props.selected ? "#CEFF00" : "#ecf0f1")};
  align-items: center;
  justify-content: center;
`;

export const OptionText = styled.Text`
  color: "#000000";
  font-weight: bold;
`;
