import React, { useState } from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import colors from "../../styles/colors";
import { icons, images } from "../../constants";
import Dropdown from "../../components/Dropdown/Dropdown";
import Feather from "@expo/vector-icons/Feather";
import { BlurView } from "expo-blur";

export default function (props: any) {
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState(false);
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
            <BlurView
              tint="dark"
              intensity={100}
              style={{
                flex: 1,
              }}
            >
              <InfoHeading>Basic Information</InfoHeading>

              <View style={{ flex: 1 }}>
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
                <SmallCheckBox onPress={() => setChecked(!checked)}>
                  {checked && (
                    <Feather
                      name="check"
                      color={colors.otherColors.black}
                      size={10}
                    />
                  )}
                </SmallCheckBox>
                <View style={{ flex: 1 }}>
                  <CheckboxTitleSmall>
                    i agree with BioSports
                  </CheckboxTitleSmall>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <TermsServices>Terms Of Service</TermsServices>
                  </TouchableOpacity>
                </View>
                <NextButton
                  onPress={() => props.navigation.navigate("ONBOARDING_BMI")}
                >
                  <NextButtonText>Next</NextButtonText>
                </NextButton>
              </BottomButtonContainer>
            </BlurView>
          </InfoContainer>
        </ContentRow>
      </InnerContainer>

      {/* Modal  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalContainer>
          <ModalContent>
            <ModalText>Terms Of Service</ModalText>

            <CheckBoxContainer>
              <CheckBox onPress={() => setChecked(!checked)}>
                {checked && (
                  <Feather
                    name="check"
                    color={colors.otherColors.black}
                    size={14}
                  />
                )}
              </CheckBox>
              <CheckboxTitle>
                i agree with BioSports{"\n"}
                <CheckboxTitleBold>terms of service</CheckboxTitleBold>
              </CheckboxTitle>
            </CheckBoxContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>
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
  flex-direction: row;
  align-items: center;
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
const ModalContent = styled.View`
  width: 90%;
  height: 80%;
  padding: 30px 20px;
  background-color: ${colors.otherColors.grey};
  border-radius: 16px;
  justify-content: space-between;
`;

const ModalText = styled.Text`
  font-size: 18px;
  color: black;
  margin-bottom: 20px;
  color: ${colors.otherColors.white};
  font-family: "medium";
  text-align: center;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.otherColors.transparentBlack};
`;
const CheckBoxContainer = styled.View`
  flex-direction: row;
`;

const CheckBox = styled(TouchableOpacity)`
  height: 20px;
  width: 20px;
  background-color: ${colors.otherColors.white};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 10px;
  margin-top: 2.5px;
`;

const SmallCheckBox = styled(TouchableOpacity)`
  height: 16px;
  width: 16px;
  background-color: ${colors.parrotPrimary["primary-950"]};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 10px;
  margin-top: 2.5px;
`;

const CheckboxTitle = styled.Text`
  font-size: 16px;
  font-family: "regular";
  color: ${colors.otherColors.black};
  line-height: 24px;
`;

const CheckboxTitleBold = styled.Text`
  font-size: 16px;
  font-family: "regular";
  color: #ffc107;
`;

const CheckboxTitleSmall = styled.Text`
  font-size: 10px;
  font-family: "regular";
  color: white;
`;

const TermsServices = styled.Text`
  font-size: 10px;
  font-family: "regular";
  color: #ffc107;
  text-decoration-line: underline;
`;
