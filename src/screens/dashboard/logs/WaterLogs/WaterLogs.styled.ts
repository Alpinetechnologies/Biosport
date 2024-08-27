import colors from '@/src/styles/colors';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('screen');

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.otherColors.white};
  padding-top: 30px;
`;
export const TopContainer = styled.View`
  background-color: #fcfcfc;
  padding: 16px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const DropdownBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Btntxt = styled.Text`
  font-family: 'medium';
  font-size: 14px;
  color: ${colors.otherColors.grey};
  margin-right: 5px;
`;

export const GlassText = styled.Text`
  font-size: 16px;
  color: ${colors.otherColors.black};
  font-family: 'medium';
  line-height: 26px;
  letter-spacing: 0.2px;
`;

export const ToggleBtn = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-radius: 30px;
`;

export const WaterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const WaterImage = styled.Image`
  height: 140px;
  width: 140px;
`;

export const MlText = styled.Text`
  font-size: 14px;
  color: ${colors.otherColors.black};
  font-family: 'medium';
  text-align: center;
  margin-bottom: 15px;
`;

export const MessageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const MessageText = styled.Text`
  font-size: 14px;
  background-color: #ecf5ff;
  padding-vertical: 15px;
  padding-horizontal: 60px;
  border-radius: 60px;
  color: ${colors.otherColors.black};
  font-family: 'medium';
`;

export const ConnectButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-color: #e0e0e0;
  border-width: 1.5px;
  border-radius: 12px;
  margin-bottom: 15px;
  background-color: ${colors.otherColors.white};
`;

export const ConnectIcon = styled.Image`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

export const ConnectText = styled.Text`
  font-size: 10px;
  font-family: 'regular';
  color: ${colors.otherColors.black};
  flex: 1;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const TipIconContainer = styled.View`
  height: 27px;
  width: 27px;
  border-radius: 40px;
  border-width: 0.36px;
  border-color: ${colors.otherColors.skyBlue};
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const TipHeading = styled.Text`
  font-size: 16px;
  color: ${colors.otherColors.black};
  font-family: 'medium';
  letter-spacing: 0.2px;
  line-height: 24px;
`;

export const TipText = styled.Text`
  font-size: 12px;
  color: ${colors.otherColors.black};
  font-family: 'medium';
  letter-spacing: 0.2px;
`;

export const BottomContainer = styled.View`
  border-width: 1px;
  padding: 12.5px;
  border-color: #eeeeee;
  border-radius: 12px;
`;

export const BottomLogsContainer = styled.View`
  border-width: 1px;
  padding: 12.5px;
  border-color: #eeeeee;
  border-radius: 12px;
`;

export const BottomHeaderText = styled.Text`
  font-size: 18px;
  line-height: 25px;
  font-family: 'regular';
  color: ${colors.otherColors.black};
  letter-spacing: 0.2px;
  margin-bottom: 8px;
`;

export const GraphImage = styled.Image`
  resize-mode: contain;
  width: ${width - 58}px;
  height: 147px;
`;
