import React, { useState, useEffect } from "react";
import { TouchableOpacity, Animated } from "react-native";
import styled from "styled-components/native";

interface AnimatedSwitchBnProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
  primaryColor?: string;
  secondaryColor?: string;
  circleOnColor?: string;
  circleOffColor?: string;
  switchWidth?: number;
  switchHeight?: number;
  circleSize?: number;
  duration?: number;
}

const AnimatedSwitchBtn: React.FC<AnimatedSwitchBnProps> = ({
  isOn,
  onToggle,
  primaryColor = "#00FF00",
  secondaryColor = "#555555",
  circleOnColor = "#000000",
  circleOffColor = "#FFFFFF",
  switchWidth = 31,
  switchHeight = 14,
  circleSize = 10,
  duration = 200,
}) => {
  const [position] = useState(new Animated.Value(isOn ? 1 : 0));

  useEffect(() => {
    Animated.timing(position, {
      toValue: isOn ? 1 : 0,
      duration,
      useNativeDriver: false,
    }).start();
  }, [isOn, duration, position]);

  const toggleSwitch = () => {
    Animated.timing(position, {
      toValue: isOn ? 0 : 1,
      duration,
      useNativeDriver: false,
    }).start(() => {
      onToggle(!isOn);
    });
  };

  const translateX = position.interpolate({
    inputRange: [0, 1],
    outputRange: [2, switchWidth - circleSize - 2],
  });

  const backgroundColor = position.interpolate({
    inputRange: [0, 1],
    outputRange: [secondaryColor, primaryColor],
  });

  const circleColor = position.interpolate({
    inputRange: [0, 1],
    outputRange: [circleOffColor, circleOnColor],
  });

  return (
    <SwitchContainer
      width={switchWidth}
      height={switchHeight}
      onPress={toggleSwitch}
    >
      <SwitchBackground as={Animated.View} style={{ backgroundColor }}>
        <SwitchCircle
          as={Animated.View}
          style={{
            transform: [{ translateX }],
            backgroundColor: circleColor,
          }}
          size={circleSize}
        />
      </SwitchBackground>
    </SwitchContainer>
  );
};

// Styled-components for better reusability
const SwitchContainer = styled(TouchableOpacity)<{
  width: number;
  height: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  justify-content: center;
`;

const SwitchBackground = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  justify-content: center;
  padding: 2px;
`;

const SwitchCircle = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
`;

export default AnimatedSwitchBtn;
