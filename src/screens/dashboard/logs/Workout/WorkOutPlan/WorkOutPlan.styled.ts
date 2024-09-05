import colors from '@/src/styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.otherColors.white};
  padding-top: 40px;
`;

export const TabBar = styled.View`
  flex-direction: row;
  background-color: ${colors.otherColors.white};
  justify-content: space-around;
  padding-vertical: 10px;
`;
export const ScrollableTabBar = styled.ScrollView`
  background-color: ${colors.otherColors.white};
  padding-vertical: 10px;
`;
export const TabButton = styled.TouchableOpacity`
  padding-horizontal: 15px;
  padding-vertical: 8px;
  border-radius: 20px;
  background-color: ${({ isSelected }) =>
    isSelected
      ? colors.parrotPrimary['primary-950']
      : colors.otherColors.LightWhite};
  margin-horizontal: 5px;
`;

export const TabText = styled.Text`
  color: ${({ isSelected }) =>
    isSelected ? colors.otherColors.black : colors.otherColors.grey};
  fonst-size: 12px;
  font-family: medium;
`;

export const ScreenContainer = styled.View`
  flex: 1;

  padding: 15px;
`;
export const InnerContainer = styled.View`
  border-width: 1px;
  border-color: ${colors.otherColors.LightWhite};
  padding: 15px;
  border-radius: 12px;
`;
export const ScreenText = styled.Text`
  font-size: 20px;
`;
export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 15px;
`;
export const HeaderText = styled.Text`
  font-size: 16px;
  font-family: medium;
  color: ${colors.otherColors.black};
  flex: 1;
`;

export const AddLog = styled.Text`
  font-size: 12px;
  font-family: regular;
  color: ${colors.otherColors.black};
`;
export const ButtonImage = styled.Image``;
export const ButtonRowContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const LogItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  border-width: 1px;
  padding: 12.5px;
  border-radius: 12px;
  border-color: ${colors.lightSecondary['secondary-200']};
`;
export const LogTitle = styled.Text`
  font-size: 14px;
  font-family: medium;
  color: ${colors.otherColors.black};
`;

export const LogCalories = styled.Text`
  font-size: 14px;
  color: ${colors.darkSecondary['secondary-800']};
  font-family: 'regular';
`;
export const LogDate = styled.Text`
  font-size: 16px;
  font-family: medium;
  margin-bottom: 8px;
  color: ${colors.otherColors.black};
`;

export const FlexContainer = styled.View`
  flex: 1;
`;
export const LogSection = styled.View`
  margin-bottom: 16px;
`;
