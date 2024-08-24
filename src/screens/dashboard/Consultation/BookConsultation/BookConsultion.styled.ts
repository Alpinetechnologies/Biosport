import styled from 'styled-components/native';
import { TouchableOpacityProps, TextProps } from 'react-native';

interface TimeOptions extends TouchableOpacityProps {
  selected: boolean;
}

interface SelectedTime extends TextProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const ExpertContainer = styled.View`
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 4;
  margin-bottom: 10px;
`;
export const ProfileContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const Profile = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const NameContainer = styled.View``;

export const Name = styled.Text`
  font-weight: 500;
  color: #212121;
  font-size: 20px;
`;

export const Expert = styled.Text`
  color: #616161;
  font-size: 12px;
`;

export const ExpertDescription = styled.Text`
  margin-top: 10px;
`;

export const HourContainer = styled.View`
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 4;
  margin-top: 10px;
`;

export const VisitHour = styled.Text`
  margin-bottom: 10px;
  color: #424242;
  font-size: 18px;
`;

export const OptionContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 3px;
`;

export const Option = styled.TouchableOpacity<TimeOptions>`
  width: 24%;
  padding: 10px;
  background-color: ${props => (props.selected ? '#424242' : '#ecf0f1')};
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const OptionText = styled.Text<SelectedTime>`
  color: ${props => (props.selected ? '#FFFFFF' : '#616161')};
  font-weight: 400;
  font-size: 14px;
`;

export const PaymentContainer = styled.TouchableOpacity`
  border-radius: 30px;
  padding: 20px;
  background: #181a20;
  position: absolute;
  bottom: 10px;
  left: 20px;
  right: 20px;
`;
export const Amount = styled.Text`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
`;
