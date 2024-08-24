import React from 'react';
import Svg, { Circle, G } from 'react-native-svg';
import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;
const ProgressText = styled.Text`
  position: absolute;
  font-size: 12px;
  color: white;
  font-family: semibold;
`;

type NutritionProgressProps = {
  percentage: number;
  progressColor: string;
};

const NutritionProgress = ({
  percentage,
  progressColor,
}: NutritionProgressProps) => {
  const size = 53;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <Container>
      <Svg width="53" height="53">
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          <Circle
            stroke={progressColor}
            fill={progressColor}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            stroke="white"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <ProgressText>{`${percentage}%`}</ProgressText>
    </Container>
  );
};

export default NutritionProgress;
