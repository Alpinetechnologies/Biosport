import React from "react";
import { View } from "react-native";
import {
  ProfileContainer,
  ProfileImage,
  NameContainer,
  Name,
  Expert,
  TimeContainer,
  Time,
  VerticalLine,
} from "./ProfileCard.styled";
import { EvilIcons } from "@expo/vector-icons";

const ProfileCard = ({ data }) => {
  return (
    <View>
      <ProfileContainer>
        <ProfileImage
          source={{
            uri: data?.image,
          }}
        ></ProfileImage>
        <NameContainer>
          <Name>{data?.name}</Name>
          <Expert>{data.expert}</Expert>
        </NameContainer>
      </ProfileContainer>
      <TimeContainer>
        <EvilIcons name="clock" size={24} />
        <Time>{data.time}</Time>
        <VerticalLine />
        <EvilIcons name="calendar" size={24} />
        <Time>{data.date}</Time>
      </TimeContainer>
    </View>
  );
};

export default ProfileCard;
