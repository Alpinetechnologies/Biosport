import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookConsultation from '../../screens/dashboard/Consultation/BookConsultation/BookConsultation';
import BookingChat from '../../screens/dashboard/Consultation/BookingChat/BookingChat';
import BookingSucess from '../../screens/dashboard/Consultation/BookingSuccess/BookingSucess';
import Consultation from '../../screens/dashboard/Consultation/Consultation';
import { routeNames } from '../routeNames';

const ConsultationStack = createNativeStackNavigator();

export const ConsultationStackNavigator = () => {
  return (
    <ConsultationStack.Navigator screenOptions={{ headerShown: false }}>
      <ConsultationStack.Screen
        name={'CONSULATION_TAB'}
        component={Consultation}
        options={{ headerShown: true, title: 'BIO SPORTS BOT' }}
      ></ConsultationStack.Screen>

      <ConsultationStack.Screen
        name={routeNames.CONSULTATION_BOOKING_CHAT}
        component={BookingChat}
        options={{ headerShown: false }}
      ></ConsultationStack.Screen>
      <ConsultationStack.Screen
        name={routeNames.CONSULTATION_BOOK}
        component={BookConsultation}
        options={{
          headerShown: true,
          title: 'BOOK CONSULATION',
          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      ></ConsultationStack.Screen>

      <ConsultationStack.Screen
        name={routeNames.CONSULTATION_BOOKING_SUCCESS}
        component={BookingSucess}
        options={{
          headerShown: false,
        }}
      />
    </ConsultationStack.Navigator>
  );
};
