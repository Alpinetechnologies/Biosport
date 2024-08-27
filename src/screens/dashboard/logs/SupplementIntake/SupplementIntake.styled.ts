import colors from '@/src/styles/colors';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${colors.otherColors.white};
  padding: 15px;
`;
export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-vertical: 10px;
`;
export const ButonTxt = styled.Text`
  fonst-size: 14px;
  color: ${colors.otherColors.black};
  font-family: medium;
  margin-right: 5px;
`;
export const TopImage = styled.Image`
  height: 176px;
  width: ${width - 30}px;
  resize-mode: contain;
  margin-bottom: 15px;
`;

export const Heading = styled.Text`
  fonst-size: 16px;
  color: ${colors.otherColors.black};
  font-family: bold;
  margin-right: 5px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;
export const BottomContainer = styled.View`
  padding: 15px;
  background-color: ${colors.otherColors.white};
`;
