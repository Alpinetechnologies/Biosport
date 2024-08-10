import React, {useState} from 'react';
import {View, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';

const AnimatedSwitchBn = ({isOn, onToggle}) => {
  const [position] = useState(new Animated.Value(isOn ? 1 : 0));

  const toggleSwitch = () => {
    Animated.timing(position, {
      toValue: isOn ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      onToggle(!isOn);
    });
  };

  const translateX = position.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 18], // Adjust this range based on the size of the switch
  });

  const backgroundColor = position.interpolate({
    inputRange: [0, 1],
    outputRange: ['#555', COLORS.PRIMARY], // Dark gray when off, green when on
  });

  const circleColor = position.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.WHITE, COLORS.BLACK], // White when off, orange when on
  });
  return (
    <TouchableOpacity onPress={toggleSwitch} style={styles.switchContainer}>
      <Animated.View style={[styles.switchBackground, {backgroundColor}]}>
        <Animated.View
          style={[
            styles.switchCircle,
            {transform: [{translateX}], backgroundColor: circleColor},
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 31,
    height: 14,
    justifyContent: 'center',
  },
  switchBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    padding: 2,
  },
  switchCircle: {
    width: 10,
    height: 10,
    borderRadius: 13,
    backgroundColor: 'white',
  },
});

export default AnimatedSwitchBn;
