import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #000000;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 4px;
  font-family: semibold;
  letter-spacing: 2px;
`;

export const SubText = styled.Text`
  font-size: 24px;
  color: #424242;
  text-align: center;
  line-height: 33px;
  font-family: normal;
`;
export const BoldText = styled.Text`
  font-family: semibold;
  color: #ffffff;
`;

export const CenterContainer = styled.View`
  align-items: center;
`;

export const CategoryType = styled.Text`
  color: #757575;
  font-size: 14px;
  font-family: normal;
  line-height: 21px;
`;

export const CategoryNum = styled.Text<{ color?: string }>`
  color: ${({ color }) => color || '#ffffff'};
  font-size: 18px;
  margin-top: 8px;
  font-family: medium;
  letter-spacing: 0.2px;
`;
export const RowCenteredContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 20px;
  justify-content: center;
`;
export const VLine = styled.View`
  height: 50px;
  width: 2px;
  background-color: #e0e0e0;
  margin: 0 12px;
`;

export const BtnContainer = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: 100px;
  padding-vertical: 18px;
  margin: 20px 20px;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  font-size: 14px;
  color: #090909;
  font-family: normal;
  letter-spacing: 0.2px;
  line-height: 21px;
`;
