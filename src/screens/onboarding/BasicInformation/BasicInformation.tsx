import React, { useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { icons, images } from '../../../constants';
import colors from '../../../styles/colors';
import {
  ActiveTab,
  ActiveTabText,
  BottomButtonContainer,
  CheckBox,
  CheckBoxContainer,
  CheckboxTitle,
  CheckboxTitleBold,
  CheckboxTitleSmall,
  Container,
  ContentRow,
  HeaderContainer,
  Heading,
  IconImage,
  InactiveTab,
  InfoContainer,
  InfoHeading,
  ModalContainer,
  ModalContent,
  ModalText,
  NextButton,
  NextButtonText,
  SmallCheckBox,
  StepImage,
  SubHeading,
  TabsContainer,
  TabText,
  TermsServices,
} from './BasicInformation.styled';

export default function (props: any) {
  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const handleGenderChange = () => {};

  return (
    <Container source={images.onboarding3}>
      <HeaderContainer>
        <View>
          <Heading>Hi 👋 John,</Heading>
          <SubHeading>
            Let's setup a few things for{'\n'}a seamless experience.
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
              <CheckboxTitleSmall>i agree with BioSports</CheckboxTitleSmall>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <TermsServices>Terms Of Service</TermsServices>
              </TouchableOpacity>
            </View>
            <NextButton
              onPress={() => props.navigation.navigate('ONBOARDING_BMI')}
            >
              <NextButtonText>Next</NextButtonText>
            </NextButton>
          </BottomButtonContainer>
        </InfoContainer>
      </ContentRow>

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
                i agree with BioSports{'\n'}
                <CheckboxTitleBold>terms of service</CheckboxTitleBold>
              </CheckboxTitle>
            </CheckBoxContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
