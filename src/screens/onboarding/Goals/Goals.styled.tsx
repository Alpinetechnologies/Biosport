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
  font-family: 'regular';
  flex: 1;
  line-height: 24px;
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
  align-items: flex-start;
`;

export const TabsContainer = styled.View`
  width: 80px;
  border-width: 0.25px;
  border-color: ${colors.otherColors.lightGrey};
  border-top-right-radius: 12px;
  border-bottom-right-radius: 15px;
  background-color: ${colors.otherColors.transparentBlack};
  overflow: hidden;
  border-bottom-right-radius: 5px;
  border-left-width: 0;
`;

export const ActiveTab = styled.View`
  background-color: ${colors.parrotPrimary['primary-950']};

  justify-content: center;
  align-items: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-top: 20px;
  height: 67px;
`;

export const ActiveTabText = styled.Text`
  font-size: 10px;
  color: black;
  text-transform: uppercase;
  font-family: 'regular';
`;

export const InactiveTab = styled.View`
  justify-content: center;
  align-items: center;
  height: 67px;
  margin: 10px 0;
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
  margin-top: 50px;
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

export const GoalOption = styled.TouchableOpacity<{ isSelected: boolean }>`
  flex-direction: row;
  align-items: center;
  background-color: ${props =>
    props.isSelected ? colors.parrotPrimary['primary-950'] : '#212121'};
  margin: 5px;
  border-radius: 8px;
  padding: 10px;
`;

export const GoalText = styled.Text<{ isSelected: boolean }>`
  font-size: 12px;
  color: ${props => (props.isSelected ? '#000' : colors.otherColors.lightGrey)};
  flex: 1;
  font-family: 'medium';
`;

export const GoalImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 9px;
`;
