import authRouteNames from './routeNames/auth';
import onboardingRouteNames from './routeNames/onboarding';
import pitchRouteNames from './routeNames/pitch';

export const routeNames = {
  ...pitchRouteNames,
  ...authRouteNames,
  ...onboardingRouteNames,
  ...dashboardRouteNames,
};
