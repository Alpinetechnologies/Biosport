import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { forwardRef, memo } from 'react';
import { routeNames } from './routeNames';
import Personalization from '../screens/auth/pitch/Personalization';
import BioFitScore from '../screens/auth/pitch/BioFitScore';
import ImproveAndWin from '../screens/auth/pitch/ImproveAndWin';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import ForgotPassword from '../screens/auth/ForgotPassword';
import OTP from '../screens/auth/OTP';
import BasicInformation from '../screens/onboarding/BasicInformation';
import BMI from '../screens/onboarding/BMI';
import Address from '../screens/onboarding/Address';
import Permissions from '../screens/onboarding/Permissions';
import Home from '../screens/dashboard/Home';
import Shop from '../screens/dashboard/Shop';
import Logs from '../screens/dashboard/Logs';
import Consultation from '../screens/dashboard/Consultation';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();
const DashboardTabs = createBottomTabNavigator();

const AuthStackNavigator = () => {
  return (
    <>
      <AuthStack.Navigator initialRouteName={routeNames.LOGIN}>
        {/* Pitch */}
        <AuthStack.Screen
          name={routeNames.PERSONLIZATION}
          component={Personalization}
        />
        <AuthStack.Screen
          name={routeNames.BIO_FIT_SCORE}
          component={BioFitScore}
        />
        <AuthStack.Screen
          name={routeNames.IMPROVE_AND_WIN}
          component={ImproveAndWin}
        />

        {/* Auth */}
        <AuthStack.Screen name={routeNames.LOGIN} component={Login} />
        <AuthStack.Screen name={routeNames.SIGN_UP} component={SignUp} />
        <AuthStack.Screen
          name={routeNames.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
        <AuthStack.Screen name={routeNames.OTP} component={OTP} />
      </AuthStack.Navigator>
    </>
  );
};

const OnboardingStackNavigator = () => {
  return (
    <>
      <OnboardingStack.Navigator
        initialRouteName={routeNames.BASIC_INFORMATION}
      >
        <OnboardingStack.Screen
          name={routeNames.BASIC_INFORMATION}
          component={BasicInformation}
        />
        <OnboardingStack.Screen name={routeNames.BMI} component={BMI} />
        <OnboardingStack.Screen name={routeNames.ADDRESS} component={Address} />
        <OnboardingStack.Screen
          name={routeNames.PERMISSIONS}
          component={Permissions}
        />
        <OnboardingStack.Screen
          name={routeNames.PERMISSIONS}
          component={Permissions}
        />
      </OnboardingStack.Navigator>
    </>
  );
};

const DashboardTabNavigator = () => {
  return (
    <>
      <DashboardTabs.Navigator initialRouteName={routeNames.HOME}>
        <DashboardTabs.Screen name={routeNames.HOME} component={Home} />
        <DashboardTabs.Screen name={routeNames.SHOP} component={Shop} />
        <DashboardTabs.Screen name={routeNames.LOGS} component={Logs} />
        <DashboardTabs.Screen
          name={routeNames.CONSULTATION}
          component={Consultation}
        />
      </DashboardTabs.Navigator>
    </>
  );
};

const Routes = forwardRef(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AUTH">
        <Stack.Screen name="AUTH" component={AuthStackNavigator} />
        <Stack.Screen name="ONBOARDING" component={OnboardingStackNavigator} />
        <Stack.Screen name="DASHBOARD" component={DashboardTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

Routes.displayName = 'Routes';

export default memo(Routes);
