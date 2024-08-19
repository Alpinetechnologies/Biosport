import React, { useState } from "react";
import {
  ChatContainer,
  Container,
  Image,
  DescriptionContainer,
  DescriptionTitle,
  DescriptionInfo,
  Time,
} from "./Consultation.styled";
import Tabs from "../../../components/Tabs/Tabs";
import { useNavigation } from "@react-navigation/native";
import { routeNames } from "../../../navigation/routeNames";
import ConsultionHistory from "./ConsultationHistory/ConsultionHistory";
export default function () {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate(routeNames.CONSULTATION_BOOKING_CHAT);
  };
  return (
    <Container>
      <Tabs
        tabs={["Chat History", "Consultation"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === 0 && (
        <ChatContainer onPress={handleOnPress}>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/52dc/bf84/b36e3d19392c98f469dfd5b41c102276?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AFARl3uXgyxtwNza~OnLnWBMvFhJS7Kd7diKl3ofe3Q1QNGvjIaobCI3rDLzL9KjoXoasmEf4OOTY39gzFH-UDIYQdbPVvSaGzjCDMoAni0gy0bMqL3tAsMm0PPk9H2ln8r8~dUrPA2G-ZMd-hqJsP8LOZcQhWq4aoW4yNq1QowQ~QGP~kK5kuWmk-i~CruEgRPrOqCaCddZ~bKA0p41OOmmq2iAf7TjXCp3Qfowi7fUHDhhrGkEgBxvXoGuvy~b453-WnMSy9WL~kS1xJkZJk-~jhOAJZrxmPaBqQqk3V~sRcdmeLSskbMzEZNmKo99AkfwYETW2gcBMLMpKBauOQ__",
            }}
          />
          <DescriptionContainer>
            <DescriptionTitle>BioSports Bot</DescriptionTitle>
            <DescriptionInfo>Looks like you were sq....</DescriptionInfo>
          </DescriptionContainer>
          <Time>08:31 PM</Time>
        </ChatContainer>
      )}
      {activeTab === 1 && <ConsultionHistory />}
    </Container>
  );
}
