import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { IMAGES } from "../../constants/images";
import { ICONS } from "../../constants/icons";
import { COLORS } from "../../constants/colors";

type Device = {
  uri: string;
  label: string;
};

const devices: Device[] = [
  {
    uri: "https://cdn.icon-icons.com/icons2/2699/PNG/512/fitbit_logo_icon_171153.png",
    label: "FITBIT",
  },
  {
    uri: "https://gstatic.com/images/branding/product/1x/gfit_512dp.png",
    label: "Google Fit",
  },
  {
    uri: "https://storage.googleapis.com/studio-cms-assets/projects/xPORlN6Yar/s-428x273_webp_25f6726b-47de-4f8f-a6d2-64f8a051f692.png",
    label: "OURA RING",
  },
  {
    uri: "https://play-lh.googleusercontent.com/iujdewqN1BjX47P9sSvFyMEIuonP5fWRZxN1SJUGMJxvXTD7RjSJuqIa0gFwXkt65ZQ=w600-h300-pc0xffffff-pd",
    label: "VO2 MASTER",
  },
  {
    uri: "https://cdn3d.iconscout.com/3d/free/thumb/free-apple-health-application-logo-2950083-2447877.png",
    label: "Apple Health",
  },
  {
    uri: "https://pngimg.com/d/garmin_PNG6.png",
    label: "Garmin",
  },
];

const Devices: React.FC = () => {
  return (
    <StyledImageBackground source={IMAGES.BG2}>
      <Container>
        <HeaderContainer>
          <View>
            <Heading>
              Wonderful!{" "}
              <SubHeading>
                To take it to the{"\n"}next level, you can connect{"\n"}any
                devices you want.
              </SubHeading>
            </Heading>
            <SubHeading>
              Connecting these devices{"\n"}will allow you to track your{"\n"}
              progress better.
            </SubHeading>
          </View>
          <StyledImage source={ICONS.STEP_4} />
        </HeaderContainer>

        <Content>
          <TabsContainer>
            <Tab>
              <Feather
                name="info"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>Basic</TabText>
            </Tab>

            <Tab>
              <SimpleLineIcons
                name="fire"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>BMI</TabText>
            </Tab>

            <Tab>
              <SimpleLineIcons
                name="lock"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>Permission</TabText>
            </Tab>

            <ActiveTab>
              <Icon
                name="watch-outline"
                size={16}
                color={COLORS.BLACK}
                style={{ marginBottom: 10 }}
              />
              <ActiveTabText>Devices</ActiveTabText>
            </ActiveTab>

            <Tab>
              <Icon
                name="watch-outline"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>Goals</TabText>
            </Tab>
          </TabsContainer>

          <InfoContainer>
            <InfoHeading>Devices</InfoHeading>

            <DevicesList>
              {devices.map((device, index) => (
                <DeviceRow key={index}>
                  <DeviceImage source={{ uri: device.uri }} />
                  <View>
                    <Label>{device.label}</Label>
                    <ConnectText>
                      connect{" "}
                      <Feather
                        name="chevron-right"
                        color={COLORS.PRIMARY}
                        size={8}
                      />
                    </ConnectText>
                  </View>
                </DeviceRow>
              ))}
            </DevicesList>

            <BottomButtonContainer>
              <SkipButton>
                <SkipButtonText>Skip</SkipButtonText>
              </SkipButton>

              <NextButton>
                <NextButtonText>Next</NextButtonText>
              </NextButton>
            </BottomButtonContainer>
          </InfoContainer>
        </Content>
      </Container>
    </StyledImageBackground>
  );
};

export default Devices;

// Styled Components

const StyledImageBackground = styled(ImageBackground)`
  flex: 1;
  background-color: ${COLORS.TRANSPARENT_BLACK};
`;

const Container = styled.View`
  flex: 1;
`;

const HeaderContainer = styled.View`
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 25 : 50}px;
  padding-vertical: 25px;
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Heading = styled.Text`
  font-weight: 500;
  color: ${COLORS.PRIMARY};
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 5px;
`;

const SubHeading = styled.Text`
  font-weight: 500;
  color: ${COLORS.WHITE};
  font-size: 14px;
  line-height: 24px;
`;

const StyledImage = styled.Image`
  height: 170px;
  width: 170px;
  margin-top: 10px;
`;

const Content = styled.View`
  flex-direction: row;
  flex: 1;
`;

const TabsContainer = styled.View`
  width: 80px;
  border-width: 0.5px;
  border-color: ${COLORS.GREY};
  border-radius: 12px;
  background-color: ${COLORS.TRANSPARENT_BLACK};
  overflow: hidden;
  margin-bottom: 40px;
  flex: 1;
  border-bottom-right-radius: 5px;
`;

const Tab = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ActiveTab = styled(Tab)`
  background-color: ${COLORS.PRIMARY};
  height: 61px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-bottom: 20px;
`;

const TabText = styled.Text`
  font-size: 10px;
  color: ${COLORS.WHITE};
  font-weight: 400;
  line-height: 12.6px;
  letter-spacing: 0.2px;
`;

const ActiveTabText = styled(TabText)`
  color: ${COLORS.BLACK};
  text-transform: uppercase;
`;

const InfoContainer = styled(View)`
  padding: 12.5px;
  border-width: 0.5px;
  border-color: ${COLORS.GREY};
  margin-horizontal: 20px;
  border-radius: 12px;
  background-color: ${COLORS.TRANSPARENT_BLACK};
  overflow: hidden;
  margin-bottom: 40px;
  flex: 3.25;
`;

const InfoHeading = styled.Text`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: ${COLORS.WHITE};
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const DevicesList = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const DeviceRow = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  width: 124px;
  height: 63px;
  background-color: ${COLORS.TRANSPARENT_BLACK};
  margin: 5px;
  padding: 8px;
  border-width: 0.5px;
  border-color: ${COLORS.DARK_GREY};
  border-radius: 8px;
`;

const DeviceImage = styled(Image)`
  height: 28px;
  width: 28px;
  resize-mode: contain;
  margin-right: 5px;
`;

const Label = styled(Text)`
  font-size: 8px;
  letter-spacing: 0.2px;
  color: ${COLORS.WHITE};
  font-weight: 500;
  line-height: 10px;
  text-transform: uppercase;
`;

const ConnectText = styled.Text`
  font-size: 8px;
  letter-spacing: 0.2px;
  color: ${COLORS.PRIMARY};
  font-weight: 500;
  line-height: 10px;
  text-decoration-line: underline;
`;

const BottomButtonContainer = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 15px;
  bottom: 30px;
`;

const SkipButton = styled.TouchableOpacity``;

const SkipButtonText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.WHITE};
  letter-spacing: 0.2px;
  text-decoration-line: underline;
  text-decoration-color: ${COLORS.PRIMARY};
  margin-horizontal: 20px;
`;

const NextButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  border-width: 1px;
  border-color: ${COLORS.PRIMARY};
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.TRANSPARENT_BLACK};
  border-radius: 50px;
`;

const NextButtonText = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: ${COLORS.WHITE};
  letter-spacing: 0.2px;
`;
