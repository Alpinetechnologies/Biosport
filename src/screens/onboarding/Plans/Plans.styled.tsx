import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  background-color: ${colors.otherColors.white};
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export const TopText = styled.Text`
  font-size: 32px;
  color: ${colors.otherColors.white};
  line-height: 38px;
  font-family: 'regular';
`;

export const TopSubText = styled.Text`
  font-size: 32px;
  color: ${colors.parrotPrimary['primary-950']};
  font-family: 'regular';
  line-height: 38px;
  margin-bottom: 10px;
`;

export const PlanContainer = styled.View`
  padding: 20px;
  background-color: ${colors.otherColors.transparentBlack};
  border-radius: 12px;
  margin: 15px 0;
  border-width: 1px;
  border-color: #616161;
`;

export const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const PlanText = styled.Text`
  font-size: 15px;
  color: ${colors.otherColors.white};
  font-family: medium;
`;

export const PlanAmountText = styled.Text`
  font-size: 14px;
  color: ${colors.otherColors.white};
  font-family: light;
`;

export const PointText = styled.Text`
  font-size: 13.5px;
  color: ${colors.otherColors.white};
  font-family: light;
  line-height: 20px;
  letter-spacing: 0.2px;
  flex: 1;
  margin-left: 10px;
`;

export const PointsRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 7.5px;
`;
