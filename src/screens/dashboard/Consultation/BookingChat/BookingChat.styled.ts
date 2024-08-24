import styled from 'styled-components/native';

export const ChatContainer = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  margin-top: 50px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const AvatarContainer = styled.View`
  position: relative;
  margin-right: 10px;
`;

export const AvatarImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const OnlineIndicator = styled.View<{ isOnline: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => (props.isOnline ? '#57B77D' : '#FF3B30')};
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid white;
`;

export const NameContainer = styled.View`
  flex: 1;
`;

export const NameText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const StatusText = styled.Text`
  font-size: 12px;
  color: #12d18e;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const ChatMessages = styled.ScrollView`
  flex: 1;
  padding: 10px;
`;

export const MessageContainer = styled.View`
  flex-direction: row;
  gap: 4px;
`;

export const AvatarIcon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const MessageBubble = styled.View<{ isMine: boolean }>`
  max-width: 75%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${props => (props.isMine ? '#d1e7dd' : '#ffffff')};
  border-radius: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Time = styled.Text`
  color: #616161;
`;

export const MessageText = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ExpertContainer = styled.View`
  max-width: 75%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;
export const ExpertTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;
export const ProfileImgage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px;
  border-color: #ceff00;
`;
export const ProfileNameContainer = styled.View`
  margin-left: 20px;
`;

export const ExpertName = styled.Text`
  font-weight: bold;
`;
export const ExpertPosition = styled.Text`
  color: #616161;
`;

export const SkillContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Skill = styled.Text`
  font-size: 10px;
  margin-right: 10px;
`;

export const ExpertDescription = styled.Text`
  margin-top: 10px;
`;

export const BookAppointment = styled.TouchableOpacity`
  border-radius: 30px;
  padding: 20px;
  background: #181a20;
  margin-top: 20px;
`;
export const AppointmentText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border: 1px solid #e0e0e0;
  margin: 20px;
  border-radius: 30px;
`;

export const FileUpload = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
export const MessageInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 14px;
`;

export const SendButton = styled.TouchableOpacity`
  background-color: #212121;
  padding: 10px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
