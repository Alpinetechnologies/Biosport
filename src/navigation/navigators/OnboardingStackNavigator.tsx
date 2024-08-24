import { routeNames } from '@/src/navigation/routeNames';
import AddOns from '@/src/screens/onboarding/AddOns/AddOns';

import BasicInformation from '@/src/screens/onboarding/BasicInformation/BasicInformation';
import BMI from '@/src/screens/onboarding/BMI/BMI';
import Devices from '@/src/screens/onboarding/Devices/Devices';
import Goals from '@/src/screens/onboarding/Goals/Goals';
import Plans from '@/src/screens/onboarding/Plans/Plans';

import Address from '@/src/screens/onboarding/Address/Address';
import Permissions from '@/src/screens/onboarding/Permissions/Permissions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const OnboardingStack = createNativeStackNavigator();

export const OnboardingStackNavigator = () => {
  return (
    <>
      <OnboardingStack.Navigator
        initialRouteName={routeNames.BASIC_INFORMATION}
        screenOptions={{ headerShown: false }}
      >
        <OnboardingStack.Screen
          name={routeNames.BASIC_INFORMATION}
          component={BasicInformation}
        />
        <OnboardingStack.Screen name={routeNames.BMI} component={BMI} />
        <OnboardingStack.Screen name={routeNames.ADDRESS} component={Address} />
        <OnboardingStack.Screen name={routeNames.DEVICES} component={Devices} />
        <OnboardingStack.Screen
          name={routeNames.PERMISSIONS}
          component={Permissions}
        />
        <OnboardingStack.Screen name={routeNames.GOALS} component={Goals} />
        <OnboardingStack.Screen name={routeNames.PLANS} component={Plans} />
        <OnboardingStack.Screen name={routeNames.ADD_ONS} component={AddOns} />
      </OnboardingStack.Navigator>
    </>
  );
};
