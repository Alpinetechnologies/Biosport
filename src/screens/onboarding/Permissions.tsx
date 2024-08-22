import React, { useState } from "react";
import {
  ImageBackground,
  Image,
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
import AnimatedSwitchBtn from "../../components/animated-switch-btn";

const Permission: React.FC = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <StyledImageBackground source={IMAGES.BG2}>
      <Container>
        <HeaderContainer>
          <HeaderText>
            Amazing
            <SubHeaderText>
              your BMI is 20.{"\n"}Give us permissions to give{"\n"}you more
              precision.
            </SubHeaderText>
          </HeaderText>
          <StyledImage source={ICONS.STEP_3} />
        </HeaderContainer>

        <ContentContainer>
          <TabsContainer>
            <Tab isActive={false}>
              <Feather
                name="info"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText isActive={false}>Basic</TabText>
            </Tab>

            <Tab isActive={false}>
              <SimpleLineIcons
                name="fire"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText isActive={false}>BMI</TabText>
            </Tab>

            <Tab isActive={true}>
              <SimpleLineIcons
                name="lock"
                size={16}
                color={COLORS.BLACK}
                style={{ marginBottom: 10 }}
              />
              <TabText isActive={true}>Permission</TabText>
            </Tab>

            <Tab isActive={false}>
              <Icon
                name="watch-outline"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText isActive={false}>Devices</TabText>
            </Tab>

            <Tab isActive={false}>
              <Icon
                name="watch-outline"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText isActive={false}>Goals</TabText>
            </Tab>
          </TabsContainer>

          <InfoContainer>
            <InfoHeading>PERMISSION</InfoHeading>

            <PermissionRow>
              <PermissionTextContainer>
                <PermissionTitle>GPS LOCATION</PermissionTitle>
                <PermissionDescription>
                  To track your location accordingly
                </PermissionDescription>
              </PermissionTextContainer>
              <AnimatedSwitchBtn isOn={isSwitchOn} onToggle={setIsSwitchOn} />
            </PermissionRow>

            <PermissionRow>
              <PermissionTextContainer>
                <PermissionTitle>CAMERA PERMISSION</PermissionTitle>
                <PermissionDescription>
                  To track your location accordingly
                </PermissionDescription>
              </PermissionTextContainer>
              <AnimatedSwitchBtn isOn={isSwitchOn} onToggle={setIsSwitchOn} />
            </PermissionRow>

            <BottomButtonContainer>
              <SkipButton>
                <SkipButtonText>Skip</SkipButtonText>
              </SkipButton>
              <NextButton>
                <NextButtonText>Next</NextButtonText>
              </NextButton>
            </BottomButtonContainer>
          </InfoContainer>
        </ContentContainer>
      </Container>
    </StyledImageBackground>
  );
};

export default Permission;

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

const HeaderText = styled.Text`
  font-weight: 500;
  color: ${COLORS.PRIMARY};
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 5px;
`;

const SubHeaderText = styled.Text`
  font-weight: 500;
  color: ${COLORS.WHITE};
  font-size: 16px;
`;

const StyledImage = styled(Image)`
  height: 170px;
  width: 170px;
`;

const ContentContainer = styled.View`
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
  border-left-width: 0;
`;

interface TabProps {
  isActive: boolean;
}

const Tab = styled.View<TabProps>`
  background-color: ${(props) =>
    props.isActive ? COLORS.PRIMARY : COLORS.TRANSPARENT_BLACK};
  height: 61px;
  width: 80px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${(props) => (props.isActive ? "12px" : "0")};
  border-bottom-right-radius: ${(props) => (props.isActive ? "12px" : "0")};
  margin-bottom: 20px;
`;

const TabText = styled.Text<TabProps>`
  font-size: 10px;
  color: ${(props) => (props.isActive ? COLORS.BLACK : COLORS.WHITE)};

  line-height: 12.6px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const InfoContainer = styled.View`
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

  text-transform: uppercase;
  margin-bottom: 30px;
`;

const PermissionRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const PermissionTextContainer = styled.View`
  flex: 1;
`;

const PermissionTitle = styled.Text`
  font-size: 10px;
  color: ${COLORS.WHITE};

  text-transform: uppercase;
  line-height: 12.6px;
  letter-spacing: 0.2px;
`;

const PermissionDescription = styled.Text`
  font-size: 8px;
  color: ${COLORS.BORDER_GREY};

  text-transform: capitalize;
  line-height: 10.8px;
  letter-spacing: 0.2px;
`;

const BottomButtonContainer = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 15px;
  bottom: 30px;
`;

const SkipButton = styled(TouchableOpacity)``;

const SkipButtonText = styled.Text`
  font-size: 14px;
  color: ${COLORS.WHITE};
  letter-spacing: 0.2px;
  text-decoration-line: underline;
  text-decoration-color: ${COLORS.PRIMARY};
  margin-horizontal: 20px;
`;

const NextButton = styled(TouchableOpacity)`
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

  color: ${COLORS.WHITE};
  letter-spacing: 0.2px;
`;
