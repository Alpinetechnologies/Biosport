import { useNavigation } from "@react-navigation/native";
import DatePicker from "../../../../components/DatePicker/DatePicker";
import {
  Container,
  ExpertContainer,
  ProfileConatiner,
  Profile,
  NameContainer,
  Name,
  Expert,
  ExpertDescription,
  HourContainer,
  VisitHour,
  OptionContainer,
  Option,
  OptionText,
  PaymentContainer,
  Amount,
} from "./BookConsultion.styled";

import React, { useState } from "react";
import { routeNames } from "../../../../navigation/routeNames";

const BookConsultation = () => {
  const [selectedTime, setSelectedTime] = useState(0);
  const navigation = useNavigation();
  return (
    <Container>
      <ExpertContainer>
        <ProfileConatiner>
          <Profile
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/e781/b355/0e0ea6ec2bafbd2f2cbd4fea9d8f0033?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HBzeIHRp2OSjF3Pa3W8tYLy9SHq1fMGWkqk0ynvGqQIkpXOgePksqBf5ACdRA-Oiao4CdaT0fGNe0cNXKSYGKKsM1bVji1zPNmOKJn9HCnKgV7BC4eCGmQVvOpHZ1tQySXgfhjloqXXY12zs1F498qMDC-xFVU6U~YCiXIa3lNCObFu36OEnw6LVkId8ORk2hf7vCu-erwPIg9~yki19ZMMC3ZAe6a87Kwfz9VYg0WNnAAjmUeXyo2xyyNC07TRyf0J5jZNsnjy72srFI8EjNt2647PZ3BJUW9LcBJoEnLTdNVLCYDfubLgBOAiDcCkLIQ0Q5ToEJUm5dYCE~z4HPw__",
            }}
          />
          <NameContainer>
            <Name>Dr. Kiran</Name>
            <Expert>Expert Physician</Expert>
          </NameContainer>
        </ProfileConatiner>
        <ExpertDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
          deleniti tenetur iste, nisi eos! Quisquam rem exercitationem ipsum
          distinctio.
        </ExpertDescription>
      </ExpertContainer>
      <DatePicker />
      <HourContainer>
        <VisitHour>Visit Hour</VisitHour>
        <OptionContainer>
          {[...new Array(7)].map((val, indx) => (
            <Option
              key={indx}
              selected={indx === selectedTime}
              onPress={() => setSelectedTime(indx)}
            >
              <OptionText selected={indx === selectedTime}>9.00am</OptionText>
            </Option>
          ))}
        </OptionContainer>
      </HourContainer>
      <PaymentContainer
        onPress={() =>
          navigation.navigate(routeNames.CONSULTATION_BOOKING_SUCCESS)
        }
      >
        <Amount>Pay $100</Amount>
      </PaymentContainer>
    </Container>
  );
};

export default BookConsultation;
