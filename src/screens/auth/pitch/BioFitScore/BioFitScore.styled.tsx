import styled from 'styled-components/native';
import colors from '../../../../styles/colors';

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  background-color: white;
`;

export const TopContainer = styled.View`
  padding: 20px;
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
  font-size: 18px;
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

export const Icon = styled.Image`
  height: 20px;
  width: 20px;
  margin-right: 5px;
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

export const CenterIconTag = styled.View<{
  marginRight?: number;
  marginLeft?: number;
}>`
  padding: 7.5px 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${({ marginRight }) => marginRight || 0}px;
  margin-left: ${({ marginLeft }) => marginLeft || 0}px;
  border-radius: 50px;
  background-color: ${colors.otherColors.transparentWhite};
  border-width: 0.75px;
  border-color: white;
  align-self: center;
`;
