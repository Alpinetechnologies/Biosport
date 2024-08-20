import { View, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { icons, images } from "../../../constants";
import Button from "../../../components/Buttom/Button";
import IconInput from "../../../components/IconInput/IconInput";

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
  margin-left: 20px;
  margin-top: 50px;
`;

const TitleContainer = styled.View`
  margin: 30px 0px;
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
  font-family: "semibold";
`;

const Subtitle = styled.Text`
  font-size: 13.5px;
  color: #888;
  font-family: "normal";
`;

const BottomTabsContainer = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 15px;
`;

const ToggleContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #f0f0f0;
  border-radius: 40px;
  margin-bottom: 20px;
  padding: 7px;
`;

const ToggleButton = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? "#fff" : "transparent")};
  align-items: center;
`;

const ToggleButtonTxt = styled.Text`
  font-size: 13px;
  color: black;
  font-family: "medium";
`;

const RowContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

const ForgotPassword = styled.Text`
  font-size: 13px;
  color: #424242;
  font-family: "regular";
`;

const SignInOptions = styled.Text`
  font-size: 13px;
  color: #9e9e9e;
  font-family: "regular";
  text-align: center;
  margin: 20px 0px 10px 00px;
`;

const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.Image`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 70px;
  margin: 20px 10px;
`;

export default function (props: any) {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Container>
      <BackgroundImage source={images.peopleExercising}>
        <BackBtnContainer
        //onPress={() => props.navigation.goBack()}
        >
          <Feather name="arrow-left" size={16} color={"black"} />
        </BackBtnContainer>
        <TitleContainer>
          <Title>Go Ahead and setup Your Account</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Subtitle>
        </TitleContainer>

        <BottomTabsContainer>
          <ToggleContainer>
            <ToggleButton
              active={activeTab === "login"}
              onPress={() => setActiveTab("login")}
            >
              <ToggleButtonTxt>Login</ToggleButtonTxt>
            </ToggleButton>
            <ToggleButton
              active={activeTab === "signup"}
              onPress={() => setActiveTab("signup")}
            >
              <ToggleButtonTxt>Sign Up</ToggleButtonTxt>
            </ToggleButton>
          </ToggleContainer>

          <View style={{ flex: 1 }}>
            {activeTab === "login" ? (
              <>
                <IconInput icon={"mail"} placeholder="Enter Email" />
                <IconInput icon={"lock"} placeholder="Enter Your Password" />
                <Button
                  title="Login"
                  marginVertical={20}
                  onPress={() => props.navigation.navigate("OTP")}
                />
                <RowContainer>
                  <ForgotPassword>Trouble In Signing In? </ForgotPassword>
                  <TouchableOpacity>
                    <ForgotPassword style={{ color: "red" }}>
                      Need help
                    </ForgotPassword>
                  </TouchableOpacity>
                </RowContainer>
              </>
            ) : (
              <>
                <IconInput icon={"user"} placeholder="Enter Your Name" />
                <IconInput icon={"mail"} placeholder="Enter Email" />
                <IconInput icon={"lock"} placeholder="Enter Your Password" />
                <Button title="Sign Up" marginVertical={20} />
              </>
            )}
          </View>

          <SignInOptions>Or Sign In with</SignInOptions>

          <IconsContainer>
            <TouchableOpacity>
              <Icon source={icons.google} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon source={icons.apple} resizeMode="contain" />
            </TouchableOpacity>
          </IconsContainer>
        </BottomTabsContainer>
      </BackgroundImage>
    </Container>
  );
}
