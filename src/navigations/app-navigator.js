// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../screens/screen1/screen1';
import Screen2 from '../screens/screen2/screen2';
import Screen3 from '../screens/screen3/screen3';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
