import { icons, images } from '@/src/constants';
import { routeNames } from '@/src/navigation/routeNames';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import {
  BackgroundImage,
  BottomContainer,
  CenterTag,
  Dot,
  DotContainer,
  Heading,
  LeftTag,
  LogoImage,
  MiddleContainer,
  NextImage,
  RightTag,
  TagsContainer,
  TagTitle,
  Title,
  TopContainer,
} from './Personalization.styled';

export default function (props: any) {
  const slides = [true, false, false];

  const handleTouchNext = () => {
    props.navigation.navigate(routeNames.BIO_FIT_SCORE);
  };

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
          <TouchableOpacity onPress={handleTouchNext}>
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
