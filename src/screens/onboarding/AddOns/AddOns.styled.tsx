import colors from '@/src/styles/colors';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  background-color: white;
  justify-content: space-between;
`;
export const TopText = styled.Text`
  font-size: 32px;
  color: ${colors.otherColors.white};
  line-height: 38px;
  font-family: 'medium';
  margin-top: 10px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  margin: 15px 20px;
`;

export const AdOnContainer = styled(View)`
  padding: 22.5px;
  background-color: ${colors.otherColors.transparentBlack};
  border-radius: 12px;
  margin: 15px 20px;
  border-width: 1px;
  border-color: ${colors.otherColors.grey};
`;

export const ListItem = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
  padding: 10px 0;
`;

export const ItemText = styled.Text<{ active: Boolean }>`
  font-size: 12px;
  font-family: 'medium';
  flex: 1;
  margin-left: 10px;
  color: ${({ active }) =>
    active
      ? `${colors.parrotPrimary['primary-950']}`
      : `${colors.otherColors.white}`};
`;

export const PriceText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'regular';
`;

export const BottomContainer = styled.View`
  padding: 22.5px;
  background-color: ${colors.otherColors.transparentBlack};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-width: 1px;
  border-color: ${colors.otherColors.grey};
  border-bottom-width: 0;
`;

export const DetailContaier = styled.View``;

export const SummaryText = styled.Text`
  color: ${colors.otherColors.lightGrey};
  font-size: 14px;
  font-family: 'regular';
  line-height: 21px;
  margin-bottom: 15px;
`;
export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const SelectedPlan = styled.Text`
  font-size: 14px;
  font-family: thin;
  color: ${colors.otherColors.white};
  margin-bottom: 10px;
`;

export const PlanName = styled.Text`
  font-size: 12px;
  color: ${colors.otherColors.white};
  font-family: regular;
  line-height: 21px;
`;

export const PlanAmount = styled.Text`
  font-size: 14px;
  color: ${colors.otherColors.white};
  font-family: regular;
  line-height: 21px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #ddd;
  margin: 10px 0;
`;
