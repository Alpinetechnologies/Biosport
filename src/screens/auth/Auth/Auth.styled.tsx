import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

const { height } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  height: ${height}px;
`;

export const BackBtnContainer = styled.TouchableOpacity`
  height: 33px;
  width: 33px;
  align-items: center;
  justify-content: center;
  border-radius: 33px;
  background-color: white;
  margin-left: 20px;
  margin-top: 50px;
`;

export const TitleContainer = styled.View`
  margin: 30px 0px;
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
  font-family: 'semibold';
`;

export const Subtitle = styled.Text`
  font-size: 13.5px;
  color: #888;
  font-family: 'regular';
`;

export const BottomTabsContainer = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 15px;
`;

export const ToggleContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #f0f0f0;
  border-radius: 40px;
  margin-bottom: 20px;
  padding: 7px;
`;

export const ToggleButton = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  background-color: ${props => (props.active ? '#fff' : 'transparent')};
  align-items: center;
`;

export const ToggleButtonTxt = styled.Text`
  font-size: 13px;
  color: black;
  font-family: 'medium';
`;

export const RowContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const ForgotPassword = styled.Text`
  font-size: 13px;
  color: #424242;
  font-family: 'regular';
`;

export const SignInOptions = styled.Text`
  font-size: 13px;
  color: ${colors.otherColors.lightGrey};
  font-family: 'regular';
  text-align: center;
  margin: 20px 0px 10px 00px;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 70px;
  margin: 20px 10px;
`;
