import styled from 'styled-components/native';
import colors from '../../../../styles/colors';

interface RotatedViewProps {
  marginLeft?: number;
  rotate?: string;
}

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  background-color: white;
`;

export const TopContainer = styled.View`
  padding: 20px 0px;
`;

export const LogoImage = styled.Image`
  height: 50px;
  width: 100px;
  margin-top: 30px;
  align-self: center;
  margin-bottom: 10px;
`;

export const MiddleContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  padding: 20px 25px;
`;

export const TagTitle = styled.Text`
  font-size: 12px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-family: 'medium';
`;

export const Heading = styled.Text`
  font-size: 16px;
  color: ${colors.parrotPrimary['primary-950']};
  text-align: center;
  text-transform: uppercase;
  line-height: 24px;
  font-family: 'semibold';
`;

export const Title = styled.Text`
  color: ${colors.parrotPrimary['primary-950']};
  font-size: 32px;
  flex: 1;
  font-family: 'bold';
`;

export const NextImage = styled.Image`
  height: 50px;
  width: 50px;
`;

export const Icon = styled.Image<{ rotate: any }>`
  height: 35px;
  width: 35px;
  transform: ${({ rotate }) =>
    rotate ? `rotate(${rotate}deg)` : `rotate(0deg)`};
`;

export const DotContainer = styled.View`
  flex-direction: row;
  margin: 0px 30px 30px 30px;
`;

export const Dot = styled.View<{ active: boolean }>`
  width: ${({ active }) => (active ? 30 : 4)}px;
  height: 4px;
  background-color: ${({ active }) =>
    active ? 'white' : 'rgba(256, 256, 256, 0.5)'};
  border-radius: 2px;
  margin-right: 7.5px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const RotatedView = styled.View<RotatedViewProps>`
  align-items: center;
  margin-left: ${({ marginLeft }) => `${marginLeft}px` || `0px`};
  transform: ${({ rotate }) =>
    rotate ? `rotate(${rotate}deg)` : `rotate(0deg)`};
`;

export const Circle = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 60px;
  background-color: ${colors.otherColors.transparentWhite};
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
