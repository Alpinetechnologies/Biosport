// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../screens/screen1/screen1';
import Screen2 from '../screens/screen2/screen2';
import Screen3 from '../screens/screen3/screen3';
import OnBoarding from '../screens/auth/onboarding/on-boarding';
import Login from '../screens/auth/login/login';
import OtpVerification from '../screens/auth/otp-verification/otp-verification';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Screen1" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
