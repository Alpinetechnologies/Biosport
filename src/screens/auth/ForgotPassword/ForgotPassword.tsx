import { BlackButton } from '@/src/components/Buttom/Button';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import OtpInput from '../../../components/OtpInput/OtpInput';
import { images } from '../../../constants';
import {
  BackBtnContainer,
  BackgroundImage,
  BottomTabsContainer,
  Container,
  Email,
  ResendCode,
  Subtitle,
  Title,
  TitleContainer,
} from './ForgotPassword.styled';

export default function (props: any) {
  const [otp, setOtp] = useState('');

  console.log(otp + ' : OTP');
  return (
    <Container>
      <BackgroundImage source={images.peopleExercising}>
        <BackBtnContainer onPress={() => props.navigation.goBack()}>
          <Feather name="arrow-left" size={16} color={'black'} />
        </BackBtnContainer>

        <BottomTabsContainer>
          <TitleContainer>
            <Title>Forgot{'\n'}Password</Title>
            <Subtitle>We have texted on your email address</Subtitle>
            <Email>myemail@gmail.com</Email>
          </TitleContainer>
          <OtpInput
            numOfDigits={4}
            onOtpChange={otpValue => setOtp(otpValue)}
          />
          <BlackButton
            title="Verify Code"
            marginVertical={40}
            onPress={() => props.navigation.navigate('ONBOARDING')}
          />
          <ResendCode>Didn't receive the code?</ResendCode>
          <TouchableOpacity>
            <ResendCode style={{ color: 'red' }}>Resend OTP</ResendCode>
          </TouchableOpacity>
        </BottomTabsContainer>
      </BackgroundImage>
    </Container>
  );
}
