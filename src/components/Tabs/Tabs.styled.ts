import styled from "styled-components/native";
import { TouchableOpacityProps, TextProps } from "react-native";

interface RoundOptionProps extends TouchableOpacityProps {
  active?: boolean;
}

interface ActiveTextProps extends TextProps {
  active?: boolean;
}

export const TabContainer = styled.View`
  flex-direction: row;
  margin-right: 5px;
  gap: 5px;
`;

export const TabButton = styled.TouchableOpacity<RoundOptionProps>`
  flex: 1;
  padding: 10px 15px;
  background-color: ${(props) => (props.active ? "#ECF5FF" : "#F7F7F7")};
  border-radius: 20px;
  align-items: center;
`;

export const TabText = styled.Text<ActiveTextProps>`
  font-size: 12px;
  color: ${(props) => (props.active ? "#1A96F0" : "#757575")};
`;
