import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: black;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTxt = styled.Text`
  font-size: 14px;
  color: white;
  font-family: 'regular';
  text-align: center;
  letter-spacing: 0.5px;
`;

export const PrimaryButtonContainer = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: ${colors.parrotPrimary['primary-950']};
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const PrimaryButtonTxt = styled.Text`
  font-size: 14px;
  color: black;
  font-family: medium;
  text-align: center;
  letter-spacing: 0.5px;
`;
