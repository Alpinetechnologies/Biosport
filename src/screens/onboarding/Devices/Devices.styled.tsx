import { Dimensions, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';
const { width } = Dimensions.get('window');

export const Container = styled.ImageBackground`
  flex: 1;
  background-color: ${colors.otherColors.transparentBlack};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 55px 20px 20px 20px;
`;

export const Heading = styled.Text`
  color: ${colors.parrotPrimary['primary-950']};
  font-size: 16px;
  margin-bottom: 5px;
  line-height: 22px;
  font-family: 'regular';
  flex: 1;
`;

export const SubHeading = styled.Text`
  color: white;
  font-size: 15px;
  font-family: 'regular';
  line-height: 22px;
`;

export const StepImage = styled.Image`
  height: 120px;
  width: 120px;
`;

export const IconImage = styled.Image`
  height: 20px;
  width: 20px;
  margin-bottom: 7.5px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  flex: 1;
  margin-bottom: 75px;
`;

export const TabsContainer = styled.View`
  width: 80px;
  border-width: 0.25px;
  border-color: ${colors.otherColors.lightGrey};
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${colors.otherColors.transparentBlack};
  overflow: hidden;
  margin-bottom: 40px;
  border-bottom-right-radius: 5px;
  border-left-width: 0;
`;

export const ActiveTab = styled.View`
  background-color: ${colors.parrotPrimary['primary-950']};

  justify-content: center;
  align-items: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  flex: 1;
  margin: 10px 0px;
`;

export const ActiveTabText = styled.Text`
  font-size: 10px;
  color: black;
  text-transform: uppercase;
  font-family: 'regular';
`;

export const InactiveTab = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
`;

export const TabText = styled.Text`
  font-size: 10px;
  color: white;
  font-family: 'regular';
  text-transform: uppercase;
`;

export const InfoContainer = styled.View`
  padding: 15px;
  border-width: 0.5px;
  border-color: grey;
  border-radius: 12px;
  background-color: ${colors.otherColors.transparentBlack};
  overflow: hidden;
  margin: 0px 15px 40px 15px;
  flex: 1;
`;

export const InfoHeading = styled.Text`
  font-size: 16px;
  letter-spacing: 0.2px;
  color: white;
  text-transform: uppercase;
  margin: 5px 0px 20px 5px;
  font-family: 'regular';
`;

export const BottomButtonContainer = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 15px;
  bottom: 30px;
`;

export const SkipButton = styled.Text`
  font-size: 12px;
  color: white;
  letter-spacing: 0.2px;
  text-decoration-line: underline;
  text-decoration-color: ${colors.parrotPrimary['primary-950']};
  margin: 0px 20px;
  font-family: 'regular';
`;

export const NextButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  border-width: 1px;
  border-color: ${colors.parrotPrimary['primary-950']};
  justify-content: center;
  align-items: center;
  background-color: ${colors.otherColors.transparentBlack};
  border-radius: 50px;
`;

export const NextButtonText = styled.Text`
  font-size: 11px;
  color: white;
  letter-spacing: 0.2px;
  font-family: 'regular';
`;

export const DevicesList = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DeviceRow = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  height: 63px;
  background-color: #212121;
  margin: 5px;
  padding: 8px;
  border-width: 0.5px;
  border-color: #424242;
  border-radius: 8px;
  width: ${width / 3 - 21}px;
`;

export const Icon = styled.Image`
  height: 28px;
  width: 28px;
  margin-right: 5px;
`;
export const Label = styled.Text`
  font-size: 8px;
  letter-spacing: 0.2px;
  color: white;
  line-height: 10px;
  text-transform: uppercase;
  font-family: 'medium';
  margin-bottom: 2px;
`;

export const ConnectText = styled.Text`
  font-size: 8px;
  letter-spacing: 0.2px;
  color: ${colors.parrotPrimary['primary-950']};
  font-weight: 500;
  text-decoration-line: underline;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
