import colors from '@/src/styles/colors';
import styled from 'styled-components/native';

export const DetailContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${colors.otherColors.LightWhiteGrey};
  padding: 15.5px;
  border-radius: 8px;
  margin-vertical: 10px;
`;
export const DishName = styled.Text`
  font-size: 14px;
  color: ${colors.otherColors.grey};
  fonst-family: regular;
  flex: 1;
`;
