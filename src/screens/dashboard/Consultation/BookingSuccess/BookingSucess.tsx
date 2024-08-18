import React, { useEffect } from "react";
import {
  Conatiner,
  ImageConatiner,
  InnerCircle,
  ThankYou,
  Success,
  SummaryContainer,
  ProfileContainer,
  ProfileImage,
  NameContainer,
  Name,
  Expert,
  ViewAppointment,
  Text,
  TimeContainer,
  Time,
  VerticalLine,
} from "./BookingSuccess.styled";
import { EvilIcons, AntDesign } from "@expo/vector-icons";

const BookingSucess = ({ navigation }) => {
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
  return (
    <Conatiner>
      <ImageConatiner>
        <InnerCircle>
          <AntDesign name="check" size={50} color="black" />
        </InnerCircle>
      </ImageConatiner>
      <ThankYou>Thank You!!</ThankYou>
      <Success>Your Appointment is booked Successfully!!</Success>
      <SummaryContainer>
        <ProfileContainer>
          <ProfileImage
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/e781/b355/0e0ea6ec2bafbd2f2cbd4fea9d8f0033?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HBzeIHRp2OSjF3Pa3W8tYLy9SHq1fMGWkqk0ynvGqQIkpXOgePksqBf5ACdRA-Oiao4CdaT0fGNe0cNXKSYGKKsM1bVji1zPNmOKJn9HCnKgV7BC4eCGmQVvOpHZ1tQySXgfhjloqXXY12zs1F498qMDC-xFVU6U~YCiXIa3lNCObFu36OEnw6LVkId8ORk2hf7vCu-erwPIg9~yki19ZMMC3ZAe6a87Kwfz9VYg0WNnAAjmUeXyo2xyyNC07TRyf0J5jZNsnjy72srFI8EjNt2647PZ3BJUW9LcBJoEnLTdNVLCYDfubLgBOAiDcCkLIQ0Q5ToEJUm5dYCE~z4HPw__",
            }}
          ></ProfileImage>
          <NameContainer>
            <Name>Dr. Kiran</Name>
            <Expert>Expert Physician</Expert>
          </NameContainer>
        </ProfileContainer>
        <TimeContainer>
          <EvilIcons name="clock" size={24} />
          <Time>9.00 AM</Time>
          <VerticalLine />
          <EvilIcons name="calendar" size={24} />
          <Time>12 March 2024</Time>
        </TimeContainer>
      </SummaryContainer>

      <ViewAppointment>
        <Text>View Appointment</Text>
      </ViewAppointment>
    </Conatiner>
  );
};

export default BookingSucess;
