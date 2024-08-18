import styled from "styled-components/native";

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
