import colors from '@/src/styles/colors';
import styled from 'styled-components/native';

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

export const TagsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CenterTag = styled.View`
  background-color: ${colors.otherColors.transparentWhite};
  padding: 15px;
  border-width: 0.75px;
  border-color: white;

  border-bottom-left-radius: 50px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 50px;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  align-self: center;
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

export const LeftTag = styled.View`
  background-color: ${colors.otherColors.transparentWhite};
  padding: 15px;
  border-width: 0.75px;
  border-color: white;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 20px;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding-right: 25px;
  padding-left: 25px;
`;
export const RightTag = styled.View<{
  marginBottom?: number;
  marginTop?: number;
}>`
  background-color: ${colors.otherColors.transparentWhite};
  padding: 15px;
  border-width: 0.75px;
  border-color: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 50px;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding-right: 25px;
  padding-left: 25px;

  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
  margin-top: ${({ marginTop }) => marginTop || 0}px;
`;

export const NextImage = styled.Image`
  height: 50px;
  width: 50px;
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
