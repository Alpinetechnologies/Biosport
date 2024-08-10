import React, {useState} from 'react';
import {Switch} from 'react-native';
//import {Switch, GestureHandlerRootView} from 'react-native-gesture-handler';
import {COLORS} from '../constants/colors';

const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default SwitchButton;
