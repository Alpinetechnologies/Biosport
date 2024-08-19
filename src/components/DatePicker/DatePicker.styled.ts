import styled from "styled-components/native";
import { TouchableOpacityProps, TextProps } from "react-native";

interface DateOptions extends TouchableOpacityProps {
  selected: boolean;
}

interface SelectedDate extends TextProps {
  selected: boolean;
}
export const DatePickerContainer = styled.View`
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 4;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const DateSelector = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const MonthSelector = styled.View`
  width: 150px;
`;

export const DateButton = styled.TouchableOpacity<DateOptions>`
  padding: 10px;
  background-color: ${({ selected }) => (selected ? "#424242" : "#ecf0f1")};
  border-radius: 4px;
  margin-right: 8px;
`;

export const DateText = styled.Text<SelectedDate>`
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  text-align: center;
`;

export const WeekText = styled.Text<SelectedDate>`
  color: ${({ selected }) => (selected ? "#FFFFFF" : "#616161")};
`;
