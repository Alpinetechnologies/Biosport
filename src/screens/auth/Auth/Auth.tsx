import { routeNames } from '@/src/navigation/routeNames';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { BlackButton } from '../../../components/Buttom/Button';
import IconInput from '../../../components/IconInput/IconInput';
import { icons, images } from '../../../constants';

import {
  BackBtnContainer,
  BackgroundImage,
  BottomTabsContainer,
  Container,
  ForgotPassword,
  Icon,
  IconsContainer,
  RowContainer,
  SignInOptions,
  Subtitle,
  Title,
  TitleContainer,
  ToggleButton,
  ToggleButtonTxt,
  ToggleContainer,
} from './Auth.styled';

export default function (props: any) {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <Container>
      <BackgroundImage source={images.peopleExercising}>
        <BackBtnContainer onPress={() => props.navigation.goBack()}>
          <Feather name="arrow-left" size={16} color={'black'} />
        </BackBtnContainer>
        <TitleContainer>
          <Title>Go Ahead and setup Your Account</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Subtitle>
        </TitleContainer>

        <BottomTabsContainer>
          <ToggleContainer>
            <ToggleButton
              active={activeTab === 'login'}
              onPress={() => setActiveTab('login')}
            >
              <ToggleButtonTxt>Login</ToggleButtonTxt>
            </ToggleButton>
            <ToggleButton
              active={activeTab === 'signup'}
              onPress={() => setActiveTab('signup')}
            >
              <ToggleButtonTxt>Sign Up</ToggleButtonTxt>
            </ToggleButton>
          </ToggleContainer>

          <View style={{ flex: 1 }}>
            {activeTab === 'login' ? (
              <>
                <IconInput icon={'mail'} placeholder="Enter Email" />
                <IconInput icon={'lock'} placeholder="Enter Your Password" />
                <BlackButton
                  title="Login"
                  marginVertical={20}
                  onPress={() => props.navigation.navigate(routeNames.OTP)}
                />
                <RowContainer>
                  <ForgotPassword>Trouble In Signing In? </ForgotPassword>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(routeNames.FORGOT_PASSWORD)
                    }
                  >
                    <ForgotPassword style={{ color: 'red' }}>
                      Need help
                    </ForgotPassword>
                  </TouchableOpacity>
                </RowContainer>
              </>
            ) : (
              <>
                <IconInput icon={'user'} placeholder="Enter Your Name" />
                <IconInput icon={'mail'} placeholder="Enter Email" />
                <IconInput icon={'lock'} placeholder="Enter Your Password" />
                <BlackButton title="Sign Up" marginVertical={20} />
              </>
            )}
          </View>

          <SignInOptions>Or Sign In with</SignInOptions>

          <IconsContainer>
            <TouchableOpacity>
              <Icon source={icons.google} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon source={icons.apple} resizeMode="contain" />
            </TouchableOpacity>
          </IconsContainer>
        </BottomTabsContainer>
      </BackgroundImage>
    </Container>
  );
}
