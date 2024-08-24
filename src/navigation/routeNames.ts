import authRouteNames from './routeNames/auth';
import dashboardRouteNames from './routeNames/dashboard';
import onboardingRouteNames from './routeNames/onboarding';
import pitchRouteNames from './routeNames/pitch';
import workoutRouteNames from './routeNames/workout';

export const routeNames = {
  ...pitchRouteNames,
  ...authRouteNames,
  ...onboardingRouteNames,
  ...dashboardRouteNames,
  ...workoutRouteNames,
};
