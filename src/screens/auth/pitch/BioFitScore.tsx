import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { icons, images } from "../../../constants";
import colors from "../../../styles/colors";

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  background-color: white;
`;

const TopContainer = styled.View`
  padding: 20px;
`;

const LogoImage = styled.Image`
  height: 50px;
  width: 100px;
  margin-top: 30px;
  align-self: center;
  margin-bottom: 10px;
`;

const MiddleContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

const BottomContainer = styled.View`
  flex-direction: row;
  padding: 20px 25px;
`;

const TagTitle = styled.Text`
  font-size: 12px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-family: "medium";
`;

const Heading = styled.Text`
  font-size: 18px;
  color: ${colors.parrotPrimary["primary-950"]};
  text-align: center;
  text-transform: uppercase;
  line-height: 24px;
  font-family: "semibold";
`;

const Title = styled.Text`
  color: ${colors.parrotPrimary["primary-950"]};
  font-size: 32px;
  flex: 1;
  font-family: "bold";
`;

const NextImage = styled.Image`
  height: 50px;
  width: 50px;
`;

const Icon = styled.Image`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

const DotContainer = styled.View`
  flex-direction: row;
  margin: 0px 30px 30px 30px;
`;

const Dot = styled.View<{ active: boolean }>`
  width: ${({ active }) => (active ? 30 : 4)}px;
  height: 4px;
  background-color: ${({ active }) =>
    active ? "white" : "rgba(256, 256, 256, 0.5)"};
  border-radius: 2px;
  margin-right: 7.5px;
`;

const CenterIconTag = styled.View<{
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

export default function (props: any) {
  const slides = [false, true, false];
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <BackgroundImage source={images.onboarding2}>
        <TopContainer>
          <LogoImage resizeMode="contain" source={images.logoWhite} />
          <Heading>All combined to give the competitive edge</Heading>
        </TopContainer>
        <MiddleContainer>
          <CenterIconTag>
            <Icon resizeMode="contain" source={icons.performance} />
            <TagTitle>Performance</TagTitle>
          </CenterIconTag>

          <CenterIconTag>
            <Icon resizeMode="contain" source={icons.nutritions} />
            <TagTitle>NUTRITION Analysis</TagTitle>
          </CenterIconTag>
          <CenterIconTag marginRight={100}>
            <Icon resizeMode="contain" source={icons.genomic} />
            <TagTitle>Genomic Makeup</TagTitle>
          </CenterIconTag>
          <CenterIconTag marginRight={70}>
            <Icon resizeMode="contain" source={icons.medications} />
            <TagTitle>Medications</TagTitle>
          </CenterIconTag>

          <CenterIconTag marginLeft={100}>
            <Icon resizeMode="contain" source={icons.lifestyle} />
            <TagTitle>Your Lifestyle</TagTitle>
          </CenterIconTag>
        </MiddleContainer>
        <BottomContainer>
          <Title>BioFit Score</Title>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("PITCH_IMPROVE_AND_WIN")}
          >
            <NextImage resizeMode="contain" source={icons.next2} />
          </TouchableOpacity>
        </BottomContainer>
        <DotContainer>
          {slides.map((data, i) => (
            <Dot key={i} active={data} />
          ))}
        </DotContainer>
      </BackgroundImage>
    </>
  );
}
