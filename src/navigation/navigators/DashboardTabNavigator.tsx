import AddWeight from '@/src/screens/dashboard/logs/WeightLogs/WeightLogs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routeNames } from '../routeNames';

const DashboardTabs = createBottomTabNavigator();

export const DashboardTabNavigator = () => {
  return (
    <>
      <DashboardTabs.Navigator
        initialRouteName={routeNames.ADD_WEIGHT_LOG}
        screenOptions={{ headerShown: false }}
      >
        {/*    <DashboardTabs.Screen name={routeNames.HOME} component={Home} />
        <DashboardTabs.Screen
          name={routeNames.SHOP}
          component={ShopStackNavigator}
        /> */}
        {/* <DashboardTabs.Screen name={routeNames.LOGS} component={Logs} /> */}
        {/*  <DashboardTabs.Screen
          name={routeNames.HEART_RATE}
          component={HeartRate}
        /> */}
        <DashboardTabs.Screen
          name={routeNames.ADD_WEIGHT_LOG}
          component={AddWeight}
        />
        {/*   <DashboardTabs.Screen
          name={routeNames.CONSULTATION}
          component={ConsultationStackNavigator}
        /> */}
      </DashboardTabs.Navigator>
    </>
  );
};
