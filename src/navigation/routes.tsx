import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { forwardRef, memo } from "react";
import { routeNames } from "./routeNames";
import Personalization from "../screens/auth/pitch/Personalization";
import BioFitScore from "../screens/auth/pitch/BioFitScore";
import ImproveAndWin from "../screens/auth/pitch/ImproveAndWin";
import Auth from "../screens/auth/Auth/Auth";
import ForgotPassword from "../screens/auth/ForgotPassword/ForgotPassword";
import OTP from "../screens/auth/OTP/OTP";
import BasicInformation from "../screens/onboarding/BasicInformation";
import BMI from "../screens/onboarding/BMI";
import Address from "../screens/onboarding/Address";
import Permissions from "../screens/onboarding/Permissions";
import Home from "../screens/dashboard/Home";
import Shop from "../screens/dashboard/Shop";
import Logs from "../screens/dashboard/Logs";
import Consultation from "../screens/dashboard/Consultation";
import Goals from "../screens/onboarding/Goals";
import ProductDetails from "../screens/dashboard/ProductDetails";

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();
const DashboardTabs = createBottomTabNavigator();
const ShopStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <>
      <AuthStack.Navigator initialRouteName={routeNames.AUTH}>
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
        <AuthStack.Screen
          name={routeNames.AUTH}
          component={Auth}
          options={{ headerShown: false }}
        />
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
        <OnboardingStack.Screen name={routeNames.GOALS} component={Goals} />
      </OnboardingStack.Navigator>
    </>
  );
};

const DashboardTabNavigator = () => {
  return (
    <>
      <DashboardTabs.Navigator initialRouteName={routeNames.HOME}>
        <DashboardTabs.Screen name={routeNames.HOME} component={Home} />
        <DashboardTabs.Screen
          name={routeNames.SHOP}
          component={ShopStackNavigator}
          options={{ headerShown: false }}
        />
        <DashboardTabs.Screen name={routeNames.LOGS} component={Logs} />
        <DashboardTabs.Screen
          name={routeNames.CONSULTATION}
          component={Consultation}
          options={{
            title: "BIO SPORTS BOT",
          }}
        />
      </DashboardTabs.Navigator>
    </>
  );
};

const ShopStackNavigator = () => {
  return (
    <ShopStack.Navigator screenOptions={{ headerShown: false }}>
      <ShopStack.Screen
        name={"SHOP_TAB"}
        component={Shop}
        options={{ headerShown: true, title: "SHOP" }}
      />
      <ShopStack.Screen
        name={routeNames.PRODUCT_DETAILS}
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </ShopStack.Navigator>
  );
};

const Routes = forwardRef(() => {
  // const { isLoggedIn } = useUserStore();
  const isLoggedIn = true;
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
            {/* <Stack.Screen
              name="ONBOARDING"
              component={OnboardingStackNavigator}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen name="DASHBOARD" component={DashboardTabNavigator} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

Routes.displayName = "Routes";

export default memo(Routes);
