import styled from 'styled-components/native';

import colors from '@/src/styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.otherColors.white};
  padding: 15px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-vertical: 15px;
`;
export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-vertical: 10px;
`;
export const ButonTxt = styled.Text`
  fonst-size: 14px;
  color: ${colors.otherColors.black};
  font-family: regular;
  margin-right: 5px;
`;
export const CaloryText = styled.Text`
  fonst-size: 16px;
  color: ${colors.otherColors.black};
  font-family: medium;
  margin-right: 5px;
`;
