import React from "react";
import { View, StatusBar, TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";

import Icon from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import { IMAGES } from "../../constants/images";
import { ICONS } from "../../constants/icons";
import { COLORS } from "../../constants/colors";

const BMI: React.FC = () => {
  return (
    <StyledImageBackground source={IMAGES.BG2}>
      <Container>
        <HeaderContainer>
          <View>
            <Heading>
              Thank you,{" "}
              <SubHeading>
                we would like to{"\n"}know about your height{"\n"}and weight for
                better{"\n"}personalization.
              </SubHeading>
            </Heading>
          </View>
          <StyledImage source={ICONS.STEP_2} />
        </HeaderContainer>

        <ContentRow>
          <TabsContainer>
            <InactiveTab>
              <Feather
                name="info"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>Basic</TabText>
            </InactiveTab>

            <ActiveTab>
              <SimpleLineIcons
                name="fire"
                size={16}
                color={COLORS.BLACK}
                style={{ marginBottom: 10 }}
              />
              <ActiveTabText>BMI</ActiveTabText>
            </ActiveTab>

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
            <InfoHeading>Body mass index</InfoHeading>
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
      </Container>
    </StyledImageBackground>
  );
};

export default BMI;

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  background-color: ${COLORS.TRANSPARENT_BLACK};
`;

const Container = styled.View`
  flex: 1;
`;

const HeaderContainer = styled.View`
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 25 : 25}px;
  padding-vertical: 25px;

  margin-horizontal: 15px;
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
  text-transform: capitalize;
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
  border-left-width: 0px;
`;

const InactiveTab = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ActiveTab = styled.View`
  background-color: ${COLORS.PRIMARY};
  height: 61px;
  width: 80px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-bottom: 20px;
`;

const TabText = styled.Text`
  font-size: 10px;
  color: ${COLORS.WHITE};
  text-transform: uppercase;
  line-height: 12.6px;
  letter-spacing: 0.2px;
  font-weight: 400;
`;

const ActiveTabText = styled(TabText)`
  color: ${COLORS.BLACK};
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
  font-weight: 400;
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
  line-height: 21px;
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
