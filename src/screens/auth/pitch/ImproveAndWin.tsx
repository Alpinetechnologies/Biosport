import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { icons, images } from "../../../constants";
import colors from "../../../styles/colors";

interface RotatedViewProps {
  marginLeft?: number;
  rotate?: string;
}

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  background-color: white;
`;

const TopContainer = styled.View`
  padding: 20px 0px;
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
  font-size: 16px;
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

const Icon = styled.Image<{ rotate: any }>`
  height: 35px;
  width: 35px;
  transform: ${({ rotate }) =>
    rotate ? `rotate(${rotate}deg)` : `rotate(0deg)`};
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

const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const RotatedView = styled.View<RotatedViewProps>`
  align-items: center;
  margin-left: ${({ marginLeft }) => `${marginLeft}px` || `0px`};
  transform: ${({ rotate }) =>
    rotate ? `rotate(${rotate}deg)` : `rotate(0deg)`};
`;

const Circle = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 60px;
  background-color: ${colors.otherColors.transparentWhite};
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export default function (props: any) {
  const slides = [false, false, true];
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <BackgroundImage source={images.onboarding3}>
        <TopContainer>
          <LogoImage resizeMode="contain" source={images.logoWhite} />
          <Heading>
            Loaded with all the fitness features{"\n"}for your favourite sport
          </Heading>
        </TopContainer>
        <MiddleContainer>
          <RowContainer>
            <RotatedView rotate="-20">
              <Circle>
                <Icon
                  resizeMode="contain"
                  source={icons.recovery}
                  rotate={"0"}
                />
              </Circle>
              <TagTitle>recovery rate</TagTitle>
            </RotatedView>
            <RotatedView rotate="30">
              <Circle>
                <Icon
                  resizeMode="contain"
                  source={icons.performance}
                  rotate={"-30"}
                />
              </Circle>
              <TagTitle>Performance{"\n"}Monitoring</TagTitle>
            </RotatedView>
          </RowContainer>
          <RotatedView rotate="15">
            <Circle>
              <Icon resizeMode="contain" source={icons.coach} rotate={"5"} />
            </Circle>
            <TagTitle>Coach{"\n"}Consulting</TagTitle>
          </RotatedView>

          <RowContainer>
            <RotatedView rotate="-40">
              <Circle>
                <Icon
                  resizeMode="contain"
                  source={icons.doctor}
                  rotate={"15"}
                />
              </Circle>
              <TagTitle>doctors{"\n"}Consultation</TagTitle>
            </RotatedView>
            <RotatedView marginLeft={20} rotate="20">
              <Circle>
                <Icon
                  resizeMode="contain"
                  source={icons.health}
                  rotate={"-20"}
                />
              </Circle>
              <TagTitle> Health Devices{"\n"}Integrations</TagTitle>
            </RotatedView>
          </RowContainer>
        </MiddleContainer>
        <BottomContainer>
          <Title>Improve & WIN 100% </Title>
          <TouchableOpacity onPress={() => props.navigation.navigate("AUTH")}>
            <NextImage resizeMode="contain" source={icons.next3} />
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
