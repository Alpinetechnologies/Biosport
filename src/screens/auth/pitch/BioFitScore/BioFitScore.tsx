import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { icons, images } from '../../../../constants';
import { routeNames } from '../../../../navigation/routeNames';
import {
  BackgroundImage,
  BottomContainer,
  CenterIconTag,
  Dot,
  DotContainer,
  Heading,
  Icon,
  LogoImage,
  MiddleContainer,
  NextImage,
  TagTitle,
  Title,
  TopContainer,
} from './BioFitScore.styled';

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
            onPress={() =>
              props.navigation.navigate(routeNames.IMPROVE_AND_WIN)
            }
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
