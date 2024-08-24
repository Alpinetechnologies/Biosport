import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const ImageContainer = styled.View`
  width: ${screenWidth * 0.5}px;
  height: ${screenWidth * 0.5}px;
  border-radius: ${screenWidth * 0.25}px;
  background-color: #f7f7f7;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const InnerCircle = styled.View`
  width: ${screenWidth * 0.3}px;
  height: ${screenWidth * 0.3}px;
  border-radius: ${screenWidth * 0.25}px;
  background-color: #ceff00;
  justify-content: center;
  align-items: center;
`;

export const ThankYou = styled.Text`
  font-weight: bold;
  color: #090909;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Success = styled.Text`
  font-size: 20px;
  color: #616161;
  text-align: center;
`;

export const SummaryContainer = styled.View``;

export const ViewAppointment = styled.TouchableOpacity`
  border-radius: 30px;
  padding: 20px;
  background: #181a20;
  position: absolute;
  bottom: 10px;
  left: 20px;
  right: 20px;
`;
export const Text = styled.Text`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
`;
