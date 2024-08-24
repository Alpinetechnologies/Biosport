import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../styles/colors';

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
  line-height: 24px;
  font-family: 'regular';
`;

export const SubHeading = styled.Text`
  color: white;
  font-size: 15px;
  line-height: 24px;
  font-family: 'regular';
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
  margin-bottom: 20px;
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
  padding: 20px;
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
  line-height: 24px;
  letter-spacing: 0.2px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'regular';
`;

export const BottomButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 15px;
  bottom: 30px;
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
export const ModalContent = styled.View`
  width: 90%;
  height: 80%;
  padding: 30px 20px;
  background-color: ${colors.otherColors.grey};
  border-radius: 16px;
  justify-content: space-between;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  color: black;
  margin-bottom: 20px;
  color: ${colors.otherColors.white};
  font-family: 'medium';
  text-align: center;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.otherColors.transparentBlack};
`;
export const CheckBoxContainer = styled.View`
  flex-direction: row;
`;

export const CheckBox = styled(TouchableOpacity)`
  height: 20px;
  width: 20px;
  background-color: ${colors.otherColors.white};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 10px;
  margin-top: 2.5px;
`;

export const SmallCheckBox = styled(TouchableOpacity)`
  height: 16px;
  width: 16px;
  background-color: ${colors.parrotPrimary['primary-950']};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 10px;
  margin-top: 2.5px;
`;

export const CheckboxTitle = styled.Text`
  font-size: 16px;
  font-family: 'regular';
  color: ${colors.otherColors.black};
  line-height: 24px;
`;

export const CheckboxTitleBold = styled.Text`
  font-size: 16px;
  font-family: 'regular';
  color: #ffc107;
`;

export const CheckboxTitleSmall = styled.Text`
  font-size: 10px;
  font-family: 'regular';
  color: white;
`;

export const TermsServices = styled.Text`
  font-size: 10px;
  font-family: 'regular';
  color: #ffc107;
  text-decoration-line: underline;
`;
