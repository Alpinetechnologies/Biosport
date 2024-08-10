import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import {IMAGES} from '../../../constants/images';
import {COLORS} from '../../../constants/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomBtn from '../../../components/custom-btn';

export default function OtpVerification(props) {
  const [timer, setTimer] = useState(false);

  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
      setTimer(true);
    }
  }, [seconds]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.topimg} source={IMAGES.LOGIN_BG}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => props.navigation.goBack()}>
          <Feather name="arrow-left" color={COLORS.BLACK} />
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text style={styles.heading}>Verify{'\n'}Your Account</Text>
          <Text style={styles.subtxt}>
            We have texted on your email address{' '}
          </Text>
          <Text style={styles.mail}>myemail@gmail.com</Text>

          <View style={{marginVertical: 10}}>
            <OTPInputView
              style={styles.otpInput}
              pinCount={4}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              // onCodeFilled={code => setOtp(code)}
              autoFocusOnLoad={false}
            />

            <Text style={styles.timer}>
              00:
              {seconds < 10 ? `0${seconds}` : seconds} sec
            </Text>

            <CustomBtn marginVertical={20} title="Verify Code" />
            {timer ? (
              <>
                <Text style={styles.notrecieve}>Didn't receive the code?</Text>
                <TouchableOpacity>
                  <Text style={{...styles.resendCode, color: COLORS.LIGHT_RED}}>
                    Resend Code ?
                  </Text>
                </TouchableOpacity>
              </>
            ) : null}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
