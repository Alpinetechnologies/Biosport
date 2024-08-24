import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { icons, images } from '../../../constants';
import { routeNames } from '../../../navigation/routeNames';
import {
  ActiveTab,
  ActiveTabText,
  BottomButtonContainer,
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
  PermissionDescription,
  PermissionRow,
  PermissionTextContainer,
  PermissionTitle,
  SkipButton,
  StepImage,
  SubHeading,
  TabsContainer,
  TabText,
} from './Permissions.styled';

export default function (props: any) {
  return (
    <Container source={images.onboarding3}>
      <HeaderContainer>
        <Heading>
          Amazing,{' '}
          <SubHeading>
            your BMI is 20.{'\n'}Give us permissions to give you more precision.
          </SubHeading>
        </Heading>
        <StepImage resizeMode="contain" source={icons.step3} />
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

          <ActiveTab>
            <IconImage resizeMode="contain" source={icons.permissionActive} />
            <ActiveTabText>Permission</ActiveTabText>
          </ActiveTab>

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
          <InfoHeading>Permission</InfoHeading>

          <View>
            <PermissionRow>
              <PermissionTextContainer>
                <PermissionTitle>GPS LOCATION</PermissionTitle>
                <PermissionDescription>
                  To track your location accordingly
                </PermissionDescription>
              </PermissionTextContainer>
            </PermissionRow>
            <PermissionRow>
              <PermissionTextContainer>
                <PermissionTitle>CAMERA PERMISSION</PermissionTitle>
                <PermissionDescription>
                  To track your location accordingly
                </PermissionDescription>
              </PermissionTextContainer>
            </PermissionRow>
          </View>
          <BottomButtonContainer>
            <TouchableOpacity>
              <SkipButton>Skip</SkipButton>
            </TouchableOpacity>

            <NextButton
              onPress={() => props.navigation.navigate(routeNames.DEVICES)}
            >
              <NextButtonText>Next</NextButtonText>
            </NextButton>
          </BottomButtonContainer>
        </InfoContainer>
      </ContentRow>
    </Container>
  );
}
