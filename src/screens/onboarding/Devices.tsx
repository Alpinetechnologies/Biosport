import React from "react";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import { icons, images } from "../../constants";
import Feather from "@expo/vector-icons/Feather";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const devices = [
  {
    label: "FITBIT",
    icon: icons.fitbit,
  },
  {
    icon: icons.googleFit,
    label: "Google Fit",
  },
  {
    icon: icons.oura,
    label: "OURA RING",
  },
  {
    icon: icons.vo2,
    label: "VO2 MASTER",
  },
  {
    icon: icons.appleHealth,
    label: "Apple Health",
  },
  {
    icon: icons.garmin,
    label: "Garmin",
  },
];

export default function (props: any) {
  return (
    <Container source={images.onboarding3}>
      <HeaderContainer>
        <Heading>
          Wonderful,{" "}
          <SubHeading>
            To take it to the next level, you can connect any devices you want.
            {"\n\n"}Connecting these devices will allow you to track your
            progress better.
          </SubHeading>
        </Heading>
        <StepImage resizeMode="contain" source={icons.step4} />
      </HeaderContainer>

      <ContentRow>
        <TabsContainer>
          <InactiveTab>
            <IconImage resizeMode="contain" source={icons.basic} />
            <TabText>Basic</TabText>
          </InactiveTab>

          <InactiveTab>
            <IconImage resizeMode="contain" source={icons.bmi} />
            <TabText>BMI</TabText>
          </InactiveTab>

          <InactiveTab>
            <IconImage resizeMode="contain" source={icons.permission} />
            <TabText>Permission</TabText>
          </InactiveTab>

          <ActiveTab>
            <IconImage resizeMode="contain" source={icons.devicesActive} />
            <ActiveTabText>Devices</ActiveTabText>
          </ActiveTab>

          <InactiveTab>
            <IconImage resizeMode="contain" source={icons.goals} />
            <TabText>Goals</TabText>
          </InactiveTab>
        </TabsContainer>

        <InfoContainer>
          <InfoHeading>DEVICES</InfoHeading>

          <View>
            <DevicesList>
              {devices.map((device, index) => (
                <DeviceRow key={index}>
                  <Icon source={device.icon} resizeMode="contain" />
                  <View style={{ flex: 1 }}>
                    <Label numberOfLines={1}>{device.label}</Label>
                    <RowContainer>
                      <ConnectText>Connect</ConnectText>
                      <Feather
                        name="chevron-right"
                        color={colors.parrotPrimary["primary-950"]}
                        size={8}
                      />
                    </RowContainer>
                  </View>
                </DeviceRow>
              ))}
            </DevicesList>
          </View>
          <BottomButtonContainer>
            <TouchableOpacity>
              <SkipButton>Skip</SkipButton>
            </TouchableOpacity>

            <NextButton
              onPress={() => props.navigation.navigate("ONBOARDING_GOALS")}
            >
              <NextButtonText>Next</NextButtonText>
            </NextButton>
          </BottomButtonContainer>
        </InfoContainer>
      </ContentRow>
    </Container>
  );
}

const Container = styled.ImageBackground`
  flex: 1;
  background-color: ${colors.otherColors.transparentBlack};
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
  line-height: 22px;
  font-family: "regular";
  flex: 1;
`;

const SubHeading = styled.Text`
  color: white;
  font-size: 15px;
  font-family: "regular";
  line-height: 22px;
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
  margin: 10px 0px;
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
  padding: 15px;
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
  letter-spacing: 0.2px;
  color: white;
  text-transform: uppercase;
  margin: 5px 0px 20px 5px;
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

const DevicesList = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const DeviceRow = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  height: 63px;
  background-color: #212121;
  margin: 5px;
  padding: 8px;
  border-width: 0.5px;
  border-color: #424242;
  border-radius: 8px;
  width: ${width / 3 - 21}px;
`;

const Icon = styled.Image`
  height: 28px;
  width: 28px;
  margin-right: 5px;
`;
const Label = styled.Text`
  font-size: 8px;
  letter-spacing: 0.2px;
  color: white;
  line-height: 10px;
  text-transform: uppercase;
  font-family: "medium";
  margin-bottom: 2px;
`;

const ConnectText = styled.Text`
  font-size: 8px;
  letter-spacing: 0.2px;
  color: ${colors.parrotPrimary["primary-950"]};
  font-weight: 500;
  text-decoration-line: underline;
`;

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
