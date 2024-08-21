import React, { useRef } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import Icon from "@expo/vector-icons/FontAwesome5";
import styled from "styled-components/native";

import { IMAGES } from "../../../constants/images";
import { COLORS } from "../../../constants/colors";

// Define types for the slides and props
type Slide = {
  key: number;
};

type OnBoardingProps = {
  navigation: any;
};

interface RotatedViewProps {
  marginLeft?: number;
  rotate?: string;
}

const slides: Slide[] = [{ key: 1 }, { key: 2 }, { key: 3 }];

export default function OnBoarding(props: OnBoardingProps) {
  const slider = useRef<AppIntroSlider>(null);

  const RenderPagination = ({ item }: { item: Slide }) => (
    <DotContainer>
      {slides.map((data) => (
        <Dot key={data.key} active={item.key === data.key} />
      ))}
    </DotContainer>
  );

  const _renderItem = ({ item }: { item: Slide }) => {
    let componentToRender;

    switch (item.key) {
      case 1:
        componentToRender = (
          <BackgroundImage source={IMAGES.OB1}>
            <TopContainer>
              <StyledImage source={IMAGES.LOGO_WHITE} />
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
                onPress={() => slider.current?.goToSlide(item.key, false)}
              >
                <NextImage source={IMAGES.NEXT1} />
              </TouchableOpacity>
            </BottomContainer>
            <RenderPagination item={item} />
          </BackgroundImage>
        );
        break;
      case 2:
        componentToRender = (
          <BackgroundImage source={IMAGES.OB1}>
            <TopContainer>
              <StyledImage source={IMAGES.LOGO_WHITE} />
              <Heading>All combined to give the{"\n"}competitive edge</Heading>
            </TopContainer>
            <MiddleContainer>
              <CenterIconTag>
                <Icon name="capsules" size={12} color={COLORS.WHITE} />
                <TagTitle> mental health</TagTitle>
              </CenterIconTag>
              <CenterIconTag>
                <Icon name="capsules" size={12} color={COLORS.WHITE} />
                <TagTitle> NUTRITION</TagTitle>
              </CenterIconTag>
              <CenterIconTag marginRight={150}>
                <Icon name="capsules" size={12} color={COLORS.WHITE} />
                <TagTitle> Genomic Makeup</TagTitle>
              </CenterIconTag>
              <CenterIconTag marginRight={-70}>
                <Icon name="capsules" size={12} color={COLORS.WHITE} />
                <TagTitle> Blood Sugar</TagTitle>
              </CenterIconTag>
              <CenterIconTag marginRight={150}>
                <Icon name="capsules" size={12} color={COLORS.WHITE} />
                <TagTitle> Medications</TagTitle>
              </CenterIconTag>
              <CenterIconTag marginRight={-70}>
                <Icon name="capsules" size={12} color={COLORS.WHITE} />
                <TagTitle> Your Lifestyle</TagTitle>
              </CenterIconTag>
            </MiddleContainer>
            <BottomContainer>
              <Title>BioFit Score</Title>
              <TouchableOpacity
                onPress={() => slider.current?.goToSlide(item.key, false)}
              >
                <NextImage source={IMAGES.NEXT2} />
              </TouchableOpacity>
            </BottomContainer>
            <RenderPagination item={item} />
          </BackgroundImage>
        );
        break;
      case 3:
        componentToRender = (
          <BackgroundImage source={IMAGES.OB2}>
            <TopContainer>
              <StyledImage source={IMAGES.LOGO_WHITE} />
              <Heading>
                Loaded with all the fitness features for your favourite sport
              </Heading>
            </TopContainer>
            <MiddleContainer>
              <SpaceAround>
                <RotatedView>
                  <Circle>
                    <Icon name="dumbbell" size={24} color={COLORS.WHITE} />
                  </Circle>
                  <TagTitle>recovery rate</TagTitle>
                </RotatedView>
                <RotatedView>
                  <Circle>
                    <Icon name="dumbbell" size={24} color={COLORS.WHITE} />
                  </Circle>
                  <TagTitle>Performance{"\n"}Monitoring</TagTitle>
                </RotatedView>
              </SpaceAround>
              <RotatedView>
                <Circle>
                  <Icon name="dumbbell" size={24} color={COLORS.WHITE} />
                </Circle>
                <TagTitle>Coach{"\n"}Consulting</TagTitle>
              </RotatedView>
              <SpaceAround>
                <RotatedView rotate="-20deg">
                  <Circle>
                    <Icon name="dumbbell" size={24} color={COLORS.WHITE} />
                  </Circle>
                  <TagTitle>doctors{"\n"}Consultation</TagTitle>
                </RotatedView>
                <RotatedView marginLeft={20}>
                  <Circle>
                    <Icon name="dumbbell" size={24} color={COLORS.WHITE} />
                  </Circle>
                  <TagTitle>Health Devices{"\n"}Integrations</TagTitle>
                </RotatedView>
              </SpaceAround>
            </MiddleContainer>
            <BottomContainer>
              <Title>Improve & WIN 100% </Title>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Login")}
              >
                <NextImage source={IMAGES.NEXT3} />
              </TouchableOpacity>
            </BottomContainer>
            <RenderPagination item={item} />
          </BackgroundImage>
        );
        break;
      default:
        componentToRender = <Text>Default Case</Text>;
        break;
    }

    return componentToRender;
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
        activeDotStyle={{ backgroundColor: COLORS.WHITE }}
        dotStyle={{ backgroundColor: COLORS.WHITE }}
        ref={slider}
        renderPagination={() => null}
      />
    </>
  );
}

// Styled-components
const BackgroundImage = styled.ImageBackground`
  flex: 1;
  background-color: ${COLORS.WHITE};
`;

const TopContainer = styled.View`
  padding: 20px;
`;

const StyledImage = styled.Image`
  height: 50px;
  width: 100px;
  resize-mode: contain;
  margin-top: 30px;
  align-self: center;
  margin-bottom: 10px;
`;

const MiddleContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

const BottomContainer = styled.View`
  padding-right: 30px;
  padding-left: 30px;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const DotContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  margin-horizontal: 30px;
`;

const Dot = styled.View<{ active: boolean }>`
  width: ${({ active }) => (active ? 30 : 4)}px;
  height: 4px;
  background-color: ${({ active }) =>
    active ? COLORS.WHITE : COLORS.LIGHT_GREY};
  border-radius: 2px;
  margin-horizontal: 2.5px;
`;

const TagsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SpaceAround = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const CenterTag = styled.View`
  background-color: ${COLORS.TRANSPARENT_WHITE};
  padding: 15px;
  border-width: 0.75px;
  border-color: ${COLORS.WHITE};

  border-bottom-left-radius: 50px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 50px;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
  align-self: center;
`;

const TagTitle = styled.Text`
  font-size: 11px;
  color: ${COLORS.WHITE};
  text-align: center;
  text-transform: uppercase;
  line-height: 21px;
`;

const Heading = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.PRIMARY};
  text-align: center;
  text-transform: uppercase;
  line-height: 24px;
`;

const Title = styled.Text`
  color: ${COLORS.PRIMARY};
  font-size: 35px;
  flex: 1;
  font-weight: 700;
`;

const LeftTag = styled.View`
  background-color: ${COLORS.TRANSPARENT_WHITE};
  padding: 15px;
  border-width: 0.75px;
  border-color: ${COLORS.WHITE};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 30px;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding-right: 25px;
  padding-left: 25px;
`;
const RightTag = styled(CenterTag)<{
  marginBottom?: number;
  marginTop?: number;
}>`
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const CenterIconTag = styled(CenterTag)<{
  marginRight?: number;
  marginLeft?: number;
}>`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${({ marginRight }) => marginRight || 0}px;
  margin-left: ${({ marginLeft }) => marginLeft || 0}px;
  border-radius: 50px;
`;

const NextImage = styled.Image`
  height: 50px;
  width: 50px;
  resize-mode: contain;
`;

const Circle = styled.View`
  height: 80px;
  width: 80px;
  border-radius: 50px;
  background-color: ${COLORS.TRANSPARENT_WHITE};
  justify-content: center;
  align-items: center;
`;
const RotatedView = styled.View<RotatedViewProps>`
  align-items: center;

  margin-left: ${({ marginLeft = 0 }) => `${marginLeft}px`};
  rotate: ${({ rotate = "0deg" }) => `${rotate}`};
`;
