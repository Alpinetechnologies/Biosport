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

const TagsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CenterTag = styled.View`
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

const LeftTag = styled.View`
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
const RightTag = styled.View<{
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

const NextImage = styled.Image`
  height: 50px;
  width: 50px;
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

export default function (props: any) {
  const slides = [true, false, false];
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <BackgroundImage source={images.onboarding1}>
        <TopContainer>
          <LogoImage resizeMode="contain" source={images.logoWhite} />
          <Heading>Sports genomics</Heading>
        </TopContainer>
        <MiddleContainer>
          <CenterTag>
            <TagTitle>Personlised exercises</TagTitle>
          </CenterTag>
          <TagsContainer>
            <LeftTag>
              <TagTitle>exercise adherence</TagTitle>
            </LeftTag>
            <RightTag marginBottom={50}>
              <TagTitle>Injury prevention</TagTitle>
            </RightTag>
          </TagsContainer>
          <TagsContainer>
            <LeftTag>
              <TagTitle>genetic body analysis</TagTitle>
            </LeftTag>
            <RightTag marginTop={50}>
              <TagTitle>99.9% Precision</TagTitle>
            </RightTag>
          </TagsContainer>
        </MiddleContainer>
        <BottomContainer>
          <Title>Personalization</Title>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("PITCH_BIO_FIT_SCORE")}
          >
            <NextImage source={icons.next1} />
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
