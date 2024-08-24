import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../../screens/auth/Auth/Auth';
import ForgotPassword from '../../screens/auth/ForgotPassword/ForgotPassword';
import OTP from '../../screens/auth/OTP/OTP';
import BioFitScore from '../../screens/auth/pitch/BioFitScore/BioFitScore';
import ImproveAndWin from '../../screens/auth/pitch/ImproveAndWin/ImproveAndWin';
import Personalization from '../../screens/auth/pitch/Personalization/Personalization';
import { routeNames } from '../routeNames';

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <>
      <AuthStack.Navigator
        initialRouteName={routeNames.PERSONALIZATION}
        screenOptions={{ headerShown: false }}
      >
        {/* Pitch */}
        <AuthStack.Screen
          name={routeNames.PERSONALIZATION}
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
        <AuthStack.Screen name={routeNames.AUTH} component={Auth} />
        <AuthStack.Screen
          name={routeNames.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
        <AuthStack.Screen name={routeNames.OTP} component={OTP} />
      </AuthStack.Navigator>
    </>
  );
};
