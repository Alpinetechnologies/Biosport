import colors from '@/src/styles/colors';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

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
  margin: 50px 0px 30px 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
  color: black;
  font-family: 'bold';
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 13px;
  color: ${colors.otherColors.lightGrey};
  font-family: 'regular';
  text-align: center;
`;

export const Email = styled.Text`
  font-size: 13px;
  color: black;
  text-align: center;
  font-family: 'regular';
`;

export const TitleContainer = styled.View`
  margin: 30px 20px;
`;

export const BottomTabsContainer = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 15px;
`;

export const ResendCode = styled.Text`
  font-size: 13px;
  color: #424242;
  font-family: 'regular';
  text-align: center;
  margin-bottom: 5px;
`;
