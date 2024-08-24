import styled from 'styled-components/native';

export const CircularContainer = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.Image`
  width: 10px;
  height: 10px;
`;
export const HeaderContainer = styled.View`
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 8px;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`;
export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 338px;
`;
export const PlayButton = styled.Image`
  width: 56px;
  height: 56px;
`;
export const CenteredView = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  color: black;
  padding: 20px 20px 0 20px;
  font-family: regular;
`;
export const SubText = styled.Text`
  font-size: 14px;
  color: #424242;
  line-height: 21px;
  padding: 8px 20px;
  font-family: light;
`;
export const RowContainer = styled.View`
  flex-direction: row;
  align-item: center;
  padding: 5px 20px;
`;
export const ListLogo = styled.Image`
  width: 16px;
  height: 16px;
`;
export const ListText = styled.Text`
  font-size: 14px;
  color: #424242;
  letter-spacing: 0.2px;
  padding: 0 8px;
  font-family: regular;
`;

export const BlackButton = styled.TouchableOpacity`
  background-color: black;
  margin: 5px 24px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  height: 57px;
`;
export const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: regular;
`;
