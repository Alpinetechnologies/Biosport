import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

interface RowViewProps extends ViewProps {
  backgroundColor?: string;
}
export const RowView = styled.View<RowViewProps>`
  flex-direction: row;
  padding: 20px 0 0 20px;
  align-items: center;
  background-color: ${props => props.backgroundColor || 'transparent'};
`;
export const HeaderTitle = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: medium;
`;

export const CircleView = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  background-color: #ffffff;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const ImageView = styled.Image`
  height: 12px;
  width: 12px;
`;
