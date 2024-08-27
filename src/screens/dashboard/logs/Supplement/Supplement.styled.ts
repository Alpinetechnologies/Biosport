import colors from '@/src/styles/colors';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.otherColors.white};
  padding: 15px;
`;

export const SelectImgContainer = styled.View`
  height: 172px;
  border-radius: 16px;
  background-color: #616161;
  justify-content: center;
  align-items: center;
  margin-vertical: 15px;
`;

export const Note = styled.Text`
  font-size: 14px;
  color: ${colors.otherColors.white};
  font-family: 'regular';
  line-height: 21px;
  letter-spacing: 0.2px;
  margin-top: 5px;
`;

export const UploadBtn = styled.TouchableOpacity`
  height: 64px;
  padding: 20px;
  border-width: 1px;
  border-color: ${colors.otherColors.extraLightGrey};
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const UploadBtnText = styled.Text`
  font-size: 16px;
  color: ${colors.otherColors.grey};
  font-family: 'regular';
  line-height: 24px;
  letter-spacing: 0.2px;
  flex: 1;
`;

export const LogSection = styled.View`
  margin-bottom: 16px;
`;

export const LogDate = styled.Text`
  font-size: 16px;
  font-weight: medium;
  margin-bottom: 8px;
`;

export const LogItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  border-width: 1px;
  padding: 7.5px;
  border-radius: 12px;
  border-color: ${colors.lightSecondary['secondary-200']};
`;

export const LogImage = styled.Image`
  width: 49px;
  height: 49px;
  border-radius: 4px;
  margin-right: 16px;
  overflow: hidden;
`;

export const LogTitle = styled.Text`
  font-size: 16px;
  font-weight: medium;
  color: ${colors.otherColors.black};
`;

export const LogCalories = styled.Text`
  font-size: 14px;
  color: ${colors.darkSecondary['secondary-800']};
  font-family: 'regular';
`;

export const BottomContainer = styled.View`
  border-width: 1px;
  border-radius: 12px;
  padding: 15px;
  border-color: ${colors.otherColors.extraLightGrey};
`;

export const Heading = styled.Text`
  font-size: 16px;
  font-family: 'medium';
  color: ${colors.otherColors.black};
  margin-bottom: 10px;
`;

export const GraphImage = styled.Image`
  width: ${width - 60}px;
  height: 134px;
  resize-mode: contain;
  margin-bottom: 10px;
`;
