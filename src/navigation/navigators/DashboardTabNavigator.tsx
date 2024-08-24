import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/dashboard/Home';
import Logs from '../../screens/dashboard/Logs';
import { routeNames } from '../routeNames';
import { ConsultationStackNavigator } from './ConsultationStackNavigator';
import { ShopStackNavigator } from './ShopStackNavigator';

const DashboardTabs = createBottomTabNavigator();

export const DashboardTabNavigator = () => {
  return (
    <>
      <DashboardTabs.Navigator
        initialRouteName={routeNames.HOME}
        screenOptions={{ headerShown: false }}
      >
        <DashboardTabs.Screen name={routeNames.HOME} component={Home} />
        <DashboardTabs.Screen
          name={routeNames.SHOP}
          component={ShopStackNavigator}
        />
        <DashboardTabs.Screen name={routeNames.LOGS} component={Logs} />
        <DashboardTabs.Screen
          name={routeNames.CONSULTATION}
          component={ConsultationStackNavigator}
        />
      </DashboardTabs.Navigator>
    </>
  );
};
