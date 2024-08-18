import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export const Conatiner = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const ImageConatiner = styled.View`
  width: ${screenWidth * 0.5}px;
  height: ${screenWidth * 0.5}px;
  border-radius: ${screenWidth * 0.25}px;
  background-color: #f7f7f7;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const InnerCircle = styled.View`
  width: ${screenWidth * 0.3}px;
  height: ${screenWidth * 0.3}px;
  border-radius: ${screenWidth * 0.25}px;
  background-color: #ceff00;
  justify-content: center;
  align-items: center;
`;

export const ThankYou = styled.Text`
  font-weight: bold;
  color: #090909;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Success = styled.Text`
  font-size: 20px;
  color: #616161;
  text-align: center;
`;

export const SummaryContainer = styled.View``;
export const ProfileContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const NameContainer = styled.View``;

export const Name = styled.Text`
  font-weight: 500;
  color: #212121;
  font-size: 20px;
`;

export const Expert = styled.Text`
  color: #616161;
  font-size: 12px;
`;

export const ExpertDescription = styled.Text`
  margin-top: 10px;
`;
export const TimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Time = styled.Text`
  font-size: 12px;
`;
export const VerticalLine = styled.View`
  height: 20px;
  width: 1px;
  background: #9e9e9e;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ViewAppointment = styled.TouchableOpacity`
  border-radius: 30px;
  padding: 20px;
  background: #181a20;
  position: absolute;
  bottom: 10px;
  left: 20px;
  right: 20px;
`;
export const Text = styled.Text`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
`;
