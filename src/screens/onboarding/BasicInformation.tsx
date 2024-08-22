import React from "react";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import colors from "../../styles/colors";
import { icons, images } from "../../constants";
import Dropdown from "../../components/Dropdown/Dropdown";

export default function (props: any) {
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const handleGenderChange = () => {};

  return (
    <Container source={images.onboarding3}>
      <InnerContainer>
        <HeaderContainer>
          <View>
            <Heading>Hi 👋 John,</Heading>
            <SubHeading>
              Let's setup a few things for{"\n"}a seamless experience.
            </SubHeading>
          </View>
          <StepImage resizeMode="contain" source={icons.step1} />
        </HeaderContainer>

        <ContentRow>
          <TabsContainer>
            <ActiveTab>
              <IconImage resizeMode="contain" source={icons.basicActive} />
              <ActiveTabText>Basic</ActiveTabText>
            </ActiveTab>

            <InactiveTab>
              <IconImage resizeMode="contain" source={icons.bmi} />
              <TabText>BMI</TabText>
            </InactiveTab>

            <InactiveTab>
              <IconImage resizeMode="contain" source={icons.permission} />
              <TabText>Permission</TabText>
            </InactiveTab>

            <InactiveTab>
              <IconImage resizeMode="contain" source={icons.devices} />
              <TabText>Devices</TabText>
            </InactiveTab>

            <InactiveTab>
              <IconImage resizeMode="contain" source={icons.goals} />
              <TabText>Goals</TabText>
            </InactiveTab>
          </TabsContainer>

          <InfoContainer>
            <InfoHeading>Basic Information</InfoHeading>

            <View>
              <Dropdown
                items={genderOptions}
                title="Gender"
                onChangeItem={handleGenderChange}
              />

              <Dropdown
                items={[]}
                title="Enter DOB: DD/MM/YYYY"
                onChangeItem={handleGenderChange}
              />
            </View>
            <BottomButtonContainer>
              <TouchableOpacity>
                <SkipButton>Skip</SkipButton>
              </TouchableOpacity>

              <NextButton
                onPress={() => props.navigation.navigate("ONBOARDING_BMI")}
              >
                <NextButtonText>Next</NextButtonText>
              </NextButton>
            </BottomButtonContainer>
          </InfoContainer>
        </ContentRow>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.ImageBackground`
  flex: 1;
  background-color: ${colors.otherColors.transparentBlack};
`;

const InnerContainer = styled.View`
  flex: 1;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 55px 20px 20px 20px;
`;

const Heading = styled.Text`
  color: ${colors.parrotPrimary["primary-950"]};
  font-size: 16px;
  margin-bottom: 5px;
  line-height: 24px;
  font-family: "regular";
`;

const SubHeading = styled.Text`
  color: white;
  font-size: 15px;
  line-height: 24px;
  font-family: "regular";
`;

const StepImage = styled.Image`
  height: 120px;
  width: 120px;
`;

const IconImage = styled.Image`
  height: 20px;
  width: 20px;
  margin-bottom: 7.5px;
`;

const ContentRow = styled.View`
  flex-direction: row;
  flex: 1;
  margin-bottom: 75px;
`;

const TabsContainer = styled.View`
  width: 80px;
  border-width: 0.25px;
  border-color: ${colors.otherColors.lightGrey};
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${colors.otherColors.transparentBlack};
  overflow: hidden;
  margin-bottom: 40px;
  border-bottom-right-radius: 5px;
  border-left-width: 0;
`;

const ActiveTab = styled.View`
  background-color: ${colors.parrotPrimary["primary-950"]};

  justify-content: center;
  align-items: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  flex: 1;
  margin-bottom: 20px;
`;

const ActiveTabText = styled.Text`
  font-size: 10px;
  color: black;
  text-transform: uppercase;
  font-family: "regular";
`;

const InactiveTab = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
`;

const TabText = styled.Text`
  font-size: 10px;
  color: white;
  font-family: "regular";
  text-transform: uppercase;
`;

const InfoContainer = styled.View`
  padding: 20px;
  border-width: 0.5px;
  border-color: grey;
  border-radius: 12px;
  background-color: ${colors.otherColors.transparentBlack};
  overflow: hidden;
  margin: 0px 15px 40px 15px;
  flex: 1;
`;

const InfoHeading = styled.Text`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: "regular";
`;

const BottomButtonContainer = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 15px;
  bottom: 30px;
`;

const SkipButton = styled.Text`
  font-size: 12px;
  color: white;
  letter-spacing: 0.2px;
  text-decoration-line: underline;
  text-decoration-color: ${colors.parrotPrimary["primary-950"]};
  margin: 0px 20px;
  font-family: "regular";
`;

const NextButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  border-width: 1px;
  border-color: ${colors.parrotPrimary["primary-950"]};
  justify-content: center;
  align-items: center;
  background-color: ${colors.otherColors.transparentBlack};
  border-radius: 50px;
`;

const NextButtonText = styled.Text`
  font-size: 11px;
  color: white;
  letter-spacing: 0.2px;
  font-family: "regular";
`;
