import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { icons, images } from '../../../constants';
import { routeNames } from '../../../navigation/routeNames';
import {
  ActiveTab,
  ActiveTabText,
  BottomButtonContainer,
  Button,
  ButtonTxt,
  Container,
  ContentRow,
  HeaderContainer,
  Heading,
  IconImage,
  InactiveTab,
  InfoContainer,
  InfoHeading,
  NextButton,
  NextButtonText,
  SkipButton,
  StepImage,
  SubHeading,
  TabsContainer,
  TabText,
} from './BMI.styled';

export default function (props: any) {
  return (
    <Container source={images.onboarding3}>
      <HeaderContainer>
        <Heading>
          Thank you,{' '}
          <SubHeading>
            we would like to know about your height and weight for better
            personalization.
          </SubHeading>
        </Heading>
        <StepImage resizeMode="contain" source={icons.step2} />
      </HeaderContainer>

      <ContentRow>
        <TabsContainer>
          <InactiveTab>
            <IconImage resizeMode="contain" source={icons.basic} />
            <TabText>Basic</TabText>
          </InactiveTab>

          <ActiveTab>
            <IconImage resizeMode="contain" source={icons.bmiActive} />
            <ActiveTabText>BMI</ActiveTabText>
          </ActiveTab>

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
          <InfoHeading>BMI</InfoHeading>

          <View>
            <Button>
              <ButtonTxt>Height</ButtonTxt>
              <Ionicons name="add-circle" size={16} color="white" />
            </Button>

            <Button>
              <ButtonTxt>Weight</ButtonTxt>
              <Ionicons name="add-circle" size={16} color="white" />
            </Button>
          </View>
          <BottomButtonContainer>
            <TouchableOpacity>
              <SkipButton>Skip</SkipButton>
            </TouchableOpacity>

            <NextButton
              onPress={() => props.navigation.navigate(routeNames.PERMISSIONS)}
            >
              <NextButtonText>Next</NextButtonText>
            </NextButton>
          </BottomButtonContainer>
        </InfoContainer>
      </ContentRow>
    </Container>
  );
}
