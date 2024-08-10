import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './src/navigations/app-navigator';
import {StatusBar} from 'react-native';
import AuthNavigator from './src/navigations/auth-navigator';

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
      <AuthNavigator />
    </>
  );
}
