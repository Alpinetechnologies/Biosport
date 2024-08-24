import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #fff;
`;

const AvatarContainer = styled.View`
  position: relative;
`;

const AvatarImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const OnlineIndicator = styled.View<{ isOnline: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => (props.isOnline ? '#34C759' : '#FF3B30')};
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid white;
`;

const NameContainer = styled.View`
  margin-left: 10px;
`;

const NameText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const StatusText = styled.Text`
  font-size: 12px;
  color: grey;
`;

const ChatHeader = () => {
  return (
    <HeaderContainer>
      <AvatarContainer>
        <AvatarImage
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/52dc/bf84/b36e3d19392c98f469dfd5b41c102276?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FJHAY6LXJVkthWOiJTsY2RjT-d83GMAU5IaUZVBTYm5t6Gm84GEcG~Ri-neMBRq3CLkmldh1LVO6~hD-5VGK1XqgLyCROhmU6e5q1g5Dxjj57W4VcwlQkcXc6WlmiWGy4TOm2whZeYpauC-9zEBfK-LPHngk3lfMDl3oZACC1ux-IrVTCy4jInq9wmmS9MVHiCCl8UNB1gLIwctf0I7xbR80pfNVH37yoQ8PJeTQrjs47Mk-D-LVNeOGaDDiUgI7DVAG4sytQMtKZZ5cdMjXcW3d1T6l83r2rixxkUavDW6gIWQWiOhXQN-FAf3jyvoqo9vuuH~3KwwA~bTJY7hqKA__',
          }}
        />
        <OnlineIndicator isOnline={true} />
      </AvatarContainer>
      <NameContainer>
        <NameText>BioSports Bot</NameText>
        <StatusText>Online</StatusText>
      </NameContainer>
    </HeaderContainer>
  );
};

export default ChatHeader;
