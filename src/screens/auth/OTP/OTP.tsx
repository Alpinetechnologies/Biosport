import { Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { images } from "../../../constants";
import Button from "../../../components/Buttom/Button";
import OtpInput from "../../../components/OtpInput/OtpInput";

const { height } = Dimensions.get("screen");

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  height: ${height}px;
`;

const BackBtnContainer = styled.TouchableOpacity`
  height: 33px;
  width: 33px;
  align-items: center;
  justify-content: center;
  border-radius: 33px;
  background-color: white;
  margin: 50px 0px 30px 20px;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
  color: black;
  font-family: "bold";
  text-align: center;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: #9e9e9e;
  font-family: "normal";
  font-family: "regular";
  text-align: center;
`;

const Email = styled.Text`
  font-size: 13px;
  color: black;
  font-family: "normal";
  text-align: center;
  font-family: "regular";
`;

const TitleContainer = styled.View`
  margin: 30px 20px;
`;

const BottomTabsContainer = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 15px;
`;

const ResendCode = styled.Text`
  font-size: 13px;
  color: #424242;
  font-family: "regular";
  text-align: center;
  margin-bottom: 5px;
`;

export default function (props: any) {
  const [otp, setOtp] = useState("");

  console.log(otp + " : OTP");
  return (
    <Container>
      <BackgroundImage source={images.peopleExercising}>
        <BackBtnContainer onPress={() => props.navigation.goBack()}>
          <Feather name="arrow-left" size={16} color={"black"} />
        </BackBtnContainer>

        <BottomTabsContainer>
          <TitleContainer>
            <Title>Verify{"\n"}Your Account</Title>
            <Subtitle>We have texted on your email address</Subtitle>
            <Email>myemail@gmail.com</Email>
          </TitleContainer>
          <OtpInput
            numOfDigits={4}
            onOtpChange={(otpValue) => setOtp(otpValue)}
          />
          <Button title="Verify Code" marginVertical={40} />
          <ResendCode>Didn't receive the code?</ResendCode>
          <TouchableOpacity>
            <ResendCode style={{ color: "red" }}>Resend OTP</ResendCode>
          </TouchableOpacity>
        </BottomTabsContainer>
      </BackgroundImage>
    </Container>
  );
}
