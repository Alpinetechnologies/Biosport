// WaterLog.tsx
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Dimensions, StatusBar, View } from 'react-native';

import { PrimaryButton } from '@/src/components/Buttom/Button';
import { images } from '@/src/constants';
import colors from '@/src/styles/colors';
import {
  BottomContainer,
  BottomHeaderText,
  BottomLogsContainer,
  Btntxt,
  ConnectButton,
  ConnectIcon,
  ConnectText,
  Container,
  DropdownBtn,
  GlassText,
  GraphImage,
  HeaderContainer,
  MessageContainer,
  MessageText,
  MlText,
  TipContainer,
  TipHeading,
  TipIconContainer,
  TipText,
  ToggleBtn,
  TopContainer,
  WaterContainer,
  WaterImage,
} from './WaterLogs.styled';
const { width } = Dimensions.get('window');
const WaterLog: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <Container showsVerticalScrollIndicator={false}>
        <TopContainer>
          <HeaderContainer>
            <DropdownBtn>
              <Btntxt>Today</Btntxt>
              <AntDesign name="caretdown" color={colors.otherColors.black} />
            </DropdownBtn>
            <GlassText>5/9 Glasses</GlassText>
          </HeaderContainer>

          <View style={{ marginBottom: 15 }}>
            <WaterContainer>
              <ToggleBtn
                style={{ borderColor: colors.otherColors.LightWhiteGrey }}
              >
                <Feather
                  name="minus"
                  color={colors.otherColors.LightWhiteGrey}
                  size={20}
                />
              </ToggleBtn>
              <WaterImage source={images.waterLevel} />
              <ToggleBtn>
                <Feather
                  name="plus"
                  color={colors.otherColors.black}
                  size={20}
                />
              </ToggleBtn>
            </WaterContainer>
            <MlText>1 Glass (250 ml)</MlText>

            <MessageContainer>
              <MessageText>Awesome</MessageText>
            </MessageContainer>
          </View>

          <ConnectButton>
            <ConnectIcon
              source={{
                uri: 'https://static.thenounproject.com/png/967255-200.png',
              }}
            />
            <ConnectText>Connect With smart bottle</ConnectText>
            <Feather
              name="chevron-right"
              color={colors.otherColors.black}
              size={15}
            />
          </ConnectButton>

          <TipContainer>
            <TipIconContainer>
              <Ionicons
                name="information-circle"
                color={colors.otherColors.skyBlue}
                size={20}
              />
            </TipIconContainer>
            <TipHeading>Tip of the day </TipHeading>
          </TipContainer>
          <TipText>
            You are critically low on carbs based on the exercises you are
            performing. Our recommendation is to add more grains to your diet.
          </TipText>
          <PrimaryButton title="Save" marginVertical={20} />
        </TopContainer>

        <BottomContainer>
          <BottomLogsContainer>
            <BottomHeaderText>My Logs</BottomHeaderText>
            <GraphImage source={images.graph} />
          </BottomLogsContainer>
        </BottomContainer>
      </Container>
    </>
  );
};

export default WaterLog;

// Styled Components
