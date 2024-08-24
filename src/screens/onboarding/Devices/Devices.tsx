import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { icons, images } from '../../../constants';
import { routeNames } from '../../../navigation/routeNames';
import colors from '../../../styles/colors';
import {
  ActiveTab,
  ActiveTabText,
  BottomButtonContainer,
  ConnectText,
  Container,
  ContentRow,
  DeviceRow,
  DevicesList,
  HeaderContainer,
  Heading,
  Icon,
  IconImage,
  InactiveTab,
  InfoContainer,
  InfoHeading,
  Label,
  NextButton,
  NextButtonText,
  RowContainer,
  SkipButton,
  StepImage,
  SubHeading,
  TabsContainer,
  TabText,
} from './Devices.styled';

const devices = [
  {
    label: 'FITBIT',
    icon: icons.fitbit,
  },
  {
    icon: icons.googleFit,
    label: 'Google Fit',
  },
  {
    icon: icons.oura,
    label: 'OURA RING',
  },
  {
    icon: icons.vo2,
    label: 'VO2 MASTER',
  },
  {
    icon: icons.appleHealth,
    label: 'Apple Health',
  },
  {
    icon: icons.garmin,
    label: 'Garmin',
  },
];

export default function (props: any) {
  return (
    <Container source={images.onboarding3}>
      <HeaderContainer>
        <Heading>
          Wonderful,{' '}
          <SubHeading>
            To take it to the next level, you can connect any devices you want.
            {'\n\n'}Connecting these devices will allow you to track your
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
                        color={colors.parrotPrimary['primary-950']}
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
              onPress={() => props.navigation.navigate(routeNames.GOALS)}
            >
              <NextButtonText>Next</NextButtonText>
            </NextButton>
          </BottomButtonContainer>
        </InfoContainer>
      </ContentRow>
    </Container>
  );
}
