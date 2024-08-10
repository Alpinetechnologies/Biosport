import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './src/navigations/app-navigator';
import {StatusBar} from 'react-native';
import AuthNavigator from './src/navigations/auth-navigator';
import BasicInfo from './src/screens/auth/add-info/step-1/basic-info';
import Measurement from './src/screens/auth/add-info/step-2/measurement';
import Permission from './src/screens/auth/add-info/step-3/permission';
import Devices from './src/screens/auth/add-info/step-4/devices';

export default function EntryPoint() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <Devices />
    </>
  );
}
