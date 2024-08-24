import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Shop from '../../screens/dashboard/Shop/Shop';
import { routeNames } from '../routeNames';
import ProductDetails from '../../screens/dashboard/Shop/ProductDetails';

const ShopStack = createNativeStackNavigator();

export const ShopStackNavigator = () => {
  return (
    <ShopStack.Navigator screenOptions={{ headerShown: false }}>
      <ShopStack.Screen
        name={'SHOP_TAB'}
        component={Shop}
        options={{ headerShown: true, title: 'SHOP' }}
      />
      <ShopStack.Screen
        name={routeNames.PRODUCT_DETAILS}
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </ShopStack.Navigator>
  );
};
