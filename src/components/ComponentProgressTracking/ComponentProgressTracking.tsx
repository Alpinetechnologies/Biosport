import { Circle, G, Svg } from 'react-native-svg';
import {
  Container,
  InnerContainer,
  ProgressText,
  SubText,
} from './ComponentProgressTracking.styled';

type ComponentProgressTrackingProps = {
  progress: number;
};
export function ComponentProgressTracking({
  progress,
}: ComponentProgressTrackingProps) {
  const dotSize = 1;
  const size = 257;
  const strokeWidth = 13;
  const radius = (size - strokeWidth - 15) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressStroke = (progress / 100) * circumference;

  const dotRadius = dotSize;

  const dotRadiusGreen = dotSize * 11;
  const angle = (progress / 100) * 2 * Math.PI - Math.PI / 500;
  const dotX = size / 2 + radius * Math.cos(angle);
  const dotY = size / 2 + radius * Math.sin(angle);

  // --------- for smaller white dots ---------
  const numberOfDots = 30;
  const dotSpacing = 360 / numberOfDots;
  const whiteDots = Array.from({ length: numberOfDots }).map((_, index) => {
    const theta = index * dotSpacing * (Math.PI / 180);
    const x = size / 2 + (radius - strokeWidth / 0.6) * Math.cos(theta);
    const y = size / 2 + (radius - strokeWidth / 0.6) * Math.sin(theta);
    return { x, y };
  });
  return (
    <Container>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          <Circle
            stroke="#252525"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <Circle
            stroke="#CEFF00"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progressStroke}
            strokeLinecap="round"
          />
          <Circle
            cx={dotX}
            cy={dotY}
            r={dotRadiusGreen}
            stroke="#CEFF00"
            fill="#252525"
            strokeWidth={6}
          />

          {whiteDots.map((dot, index) => (
            <Circle
              key={index}
              cx={dot.x}
              cy={dot.y}
              r={dotRadius}
              fill="#828282"
            />
          ))}
        </G>
      </Svg>
      <InnerContainer>
        <ProgressText>15:20</ProgressText>
        <SubText>of 20:00 total</SubText>
      </InnerContainer>
    </Container>
  );
}
