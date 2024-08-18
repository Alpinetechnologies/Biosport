import React, { useEffect, useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  ChatContainer,
  HeaderContainer,
  AvatarContainer,
  AvatarImage,
  OnlineIndicator,
  NameContainer,
  NameText,
  StatusText,
  BackButton,
  ChatMessages,
  MessageContainer,
  AvatarIcon,
  MessageBubble,
  Time,
  MessageText,
  ExpertContainer,
  InputContainer,
  MessageInput,
  SendButton,
  ExpertTitle,
  ProfileContainer,
  ProfileImgage,
  ProfileNameContainer,
  ExpertName,
  ExpertPosition,
  SkillContainer,
  Skill,
  ExpertDescription,
  BookAppointment,
  AppointmentText,
  FileUpload,
} from "./BookingChat.styled";
import { View } from "react-native";
import { routeNames } from "../../../../navigation/routeNames";
import { dummyData } from "./dummyData";

const BookingChat = ({ navigation }) => {
  const [messages, setMessages] = useState(dummyData);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, isMine: true }]);
      setNewMessage("");
    }
  };

  //   To hide the bottom bar
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "flex",
        },
      });
    };
  }, []);
  const botImg =
    "https://s3-alpha-sig.figma.com/img/52dc/bf84/b36e3d19392c98f469dfd5b41c102276?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FJHAY6LXJVkthWOiJTsY2RjT-d83GMAU5IaUZVBTYm5t6Gm84GEcG~Ri-neMBRq3CLkmldh1LVO6~hD-5VGK1XqgLyCROhmU6e5q1g5Dxjj57W4VcwlQkcXc6WlmiWGy4TOm2whZeYpauC-9zEBfK-LPHngk3lfMDl3oZACC1ux-IrVTCy4jInq9wmmS9MVHiCCl8UNB1gLIwctf0I7xbR80pfNVH37yoQ8PJeTQrjs47Mk-D-LVNeOGaDDiUgI7DVAG4sytQMtKZZ5cdMjXcW3d1T6l83r2rixxkUavDW6gIWQWiOhXQN-FAf3jyvoqo9vuuH~3KwwA~bTJY7hqKA__";

  return (
    <ChatContainer>
      <HeaderContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="#000" />
        </BackButton>
        <AvatarContainer>
          <AvatarImage
            source={{
              uri: botImg,
            }}
          />
          <OnlineIndicator isOnline={true} />
        </AvatarContainer>
        <NameContainer>
          <NameText>BioSports Bot</NameText>
          <StatusText>Online</StatusText>
        </NameContainer>
      </HeaderContainer>

      <ChatMessages>
        {messages.map((message, index) => (
          <MessageContainer>
            <View style={{ alignItems: "flex-end", flexDirection: "row" }}>
              <AvatarIcon
                source={{
                  uri: botImg,
                }}
              />
            </View>
            {message?.action ? (
              <ExpertContainer>
                <ExpertTitle>
                  Hey You Can book a appointment with Injury Expert.
                </ExpertTitle>
                <ProfileContainer>
                  <ProfileImgage
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/e781/b355/0e0ea6ec2bafbd2f2cbd4fea9d8f0033?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HBzeIHRp2OSjF3Pa3W8tYLy9SHq1fMGWkqk0ynvGqQIkpXOgePksqBf5ACdRA-Oiao4CdaT0fGNe0cNXKSYGKKsM1bVji1zPNmOKJn9HCnKgV7BC4eCGmQVvOpHZ1tQySXgfhjloqXXY12zs1F498qMDC-xFVU6U~YCiXIa3lNCObFu36OEnw6LVkId8ORk2hf7vCu-erwPIg9~yki19ZMMC3ZAe6a87Kwfz9VYg0WNnAAjmUeXyo2xyyNC07TRyf0J5jZNsnjy72srFI8EjNt2647PZ3BJUW9LcBJoEnLTdNVLCYDfubLgBOAiDcCkLIQ0Q5ToEJUm5dYCE~z4HPw__",
                    }}
                  ></ProfileImgage>
                  <ProfileNameContainer>
                    <ExpertName>{message?.info?.name}</ExpertName>
                    <ExpertPosition>{message?.info?.position}</ExpertPosition>
                  </ProfileNameContainer>
                </ProfileContainer>
                <SkillContainer>
                  {message?.info?.skills.map((val) => <Skill>{val}</Skill>)}
                </SkillContainer>
                <ExpertDescription>{message?.info?.desc}</ExpertDescription>
                <BookAppointment
                  onPress={() =>
                    navigation.navigate(routeNames.CONSULTATION_BOOK)
                  }
                >
                  <AppointmentText>Book Your Appointment</AppointmentText>
                </BookAppointment>
              </ExpertContainer>
            ) : (
              <MessageBubble key={index} isMine={message.isMine}>
                <MessageText>{message?.text}</MessageText>
              </MessageBubble>
            )}
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Time>{message?.time}</Time>
            </View>
          </MessageContainer>
        ))}
      </ChatMessages>

      <InputContainer>
        <FileUpload onPress={() => {}}>
          <Entypo name="attachment" size={20} color="black" />
        </FileUpload>

        <MessageInput
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Write a message..."
        />
        <SendButton onPress={sendMessage}>
          <Ionicons name="send" size={20} color="#fff" />
        </SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default BookingChat;
