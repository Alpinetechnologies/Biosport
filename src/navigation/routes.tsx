/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { forwardRef, memo } from 'react';
import { useUserStore } from '../store';
import { AuthStackNavigator } from './navigators/AuthStackNavigator';
import { DashboardTabNavigator } from './navigators/DashboardTabNavigator';
import { OnboardingStackNavigator } from './navigators/OnboardingStackNavigator';

const Stack = createNativeStackNavigator();

const Routes = forwardRef(() => {
  const { isLoggedIn } = useUserStore();
  // const isLoggedIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AUTH_ROUTES"
        screenOptions={{ headerShown: false }}
      >
        {!isLoggedIn ? (
          <Stack.Screen name="AUTH_ROUTES" component={AuthStackNavigator} />
        ) : (
          <>
            <Stack.Screen
              name="ONBOARDING"
              component={OnboardingStackNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="DASHBOARD" component={DashboardTabNavigator} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

Routes.displayName = 'Routes';

export default memo(Routes);
