import React, { useState } from "react";
import { View, TouchableOpacity, StatusBar, Dimensions } from "react-native";
import styled from "styled-components/native";

import Icon from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import { COLORS } from "../../constants/colors";
import { IMAGES } from "../../constants/images";
import { ICONS } from "../../constants/icons";
import LabelDropdown from "../../components/LabelDropdown";

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const BasicInfo: React.FC = () => {
  const handleGenderChange = () => {};

  return (
    <Container source={IMAGES.BG2}>
      <InnerContainer>
        <HeaderContainer>
          <View>
            <Heading>Hi 👋 John,</Heading>
            <SubHeading>
              Let's setup a few things for{"\n"}a seamless experience.
            </SubHeading>
          </View>
          <StyledImage source={ICONS.STEP_1} />
        </HeaderContainer>

        <ContentRow>
          <TabsContainer>
            <ActiveTab>
              <Feather
                name="info"
                size={16}
                color={COLORS.BLACK}
                style={{ marginBottom: 10 }}
              />
              <ActiveTabText>Basic</ActiveTabText>
            </ActiveTab>

            <InactiveTab>
              <SimpleLineIcons
                name="fire"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>BMI</TabText>
            </InactiveTab>

            <InactiveTab>
              <SimpleLineIcons
                name="lock"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>Permission</TabText>
            </InactiveTab>

            <InactiveTab>
              <Icon
                name="watch-outline"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>Devices</TabText>
            </InactiveTab>

            <InactiveTab>
              <Icon
                name="watch-outline"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>Goals</TabText>
            </InactiveTab>
          </TabsContainer>

          <InfoContainer>
            <InfoHeading>Basic Information</InfoHeading>

            <View>
              <LabelDropdown
                items={genderOptions}
                title="Gender"
                onChangeItem={handleGenderChange}
                search
              />
              <LabelDropdown
                items={genderOptions}
                title="Age"
                onChangeItem={handleGenderChange}
                search
              />
            </View>
            <BottomButtonContainer>
              <TouchableOpacity>
                <SkipButton>Skip</SkipButton>
              </TouchableOpacity>

              <NextButton>
                <NextButtonText>Next</NextButtonText>
              </NextButton>
            </BottomButtonContainer>
          </InfoContainer>
        </ContentRow>
      </InnerContainer>
    </Container>
  );
};

export default BasicInfo;

const Container = styled.ImageBackground`
  flex: 1;
  background-color: ${COLORS.TRANSPARENT_BLACK};
`;

const InnerContainer = styled.View`
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
  color: ${COLORS.PRIMARY};
  font-size: 16px;
  margin-bottom: 5px;
  line-height: 24px;
  font-weight: 400;
`;

const SubHeading = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const StyledImage = styled.Image`
  height: 170px;
  width: 170px;
`;

const ContentRow = styled.View`
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

const ActiveTab = styled.View`
  background-color: ${COLORS.PRIMARY};
  height: 61px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-bottom: 20px;
`;

const ActiveTabText = styled.Text`
  font-size: 10px;
  color: ${COLORS.BLACK};
  font-weight: 500;
  line-height: 12.6px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const InactiveTab = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabText = styled.Text`
  font-size: 10px;
  color: ${COLORS.WHITE};
  font-weight: 400;
  line-height: 12.6px;
  letter-spacing: 0.2px;
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
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 15px;
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
  font-size: 14px;

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

  color: ${COLORS.WHITE};
  letter-spacing: 0.2px;
`;
