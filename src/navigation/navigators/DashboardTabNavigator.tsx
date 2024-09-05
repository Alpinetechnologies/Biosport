import WorkOutPlan from '@/src/screens/dashboard/logs/Workout/WorkOutPlan/WorkOutPlan';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routeNames } from '../routeNames';

const DashboardTabs = createBottomTabNavigator();

export const DashboardTabNavigator = () => {
  return (
    <>
      <DashboardTabs.Navigator
        initialRouteName={routeNames.EDIT_MEAL_LOG}
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
        {/*  <DashboardTabs.Screen
          name={routeNames.ADD_WEIGHT_LOG}
          component={AddWeight}
        />  */}

        {/* <DashboardTabs.Screen
          name={routeNames.ADD_WATER_LOG}
          component={WaterLog}
        />  */}

        {/*  <DashboardTabs.Screen
          name={routeNames.ADD_SUPPLEMENTS_LOG}
          component={Supplements}
        /> */}
        {/*  <DashboardTabs.Screen
          name={routeNames.ADD_ALCOHOL_INTAKE_LOG}
          component={SupplementIntake}
        />  */}
        {/*  <DashboardTabs.Screen
          name={routeNames.ADD_MEAL_LOG}
          component={AddMealLog}
        />  */}

        {/*  <DashboardTabs.Screen
          name={routeNames.EDIT_MEAL_LOG}
          component={EditMealLog}
        /> */}

        <DashboardTabs.Screen
          name={routeNames.WORKOUT_PLAN}
          component={WorkOutPlan}
        />

        {/*   <DashboardTabs.Screen
          name={routeNames.CONSULTATION}
          component={ConsultationStackNavigator}
        /> */}
      </DashboardTabs.Navigator>
    </>
  );
};
