import React, { useEffect } from "react";
import {
  Conatiner,
  ImageConatiner,
  InnerCircle,
  ThankYou,
  Success,
  SummaryContainer,
  ViewAppointment,
  Text,
} from "./BookingSuccess.styled";
import { AntDesign } from "@expo/vector-icons";
import ProfileCard from "../../../../components/ProfileCard/ProfileCard";
import { dummyData } from "./temp";

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
        <ProfileCard data={dummyData} />
      </SummaryContainer>

      <ViewAppointment>
        <Text>View Appointment</Text>
      </ViewAppointment>
    </Conatiner>
  );
};

export default BookingSucess;
