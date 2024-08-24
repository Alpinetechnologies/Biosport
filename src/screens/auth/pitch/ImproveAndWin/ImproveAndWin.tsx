import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import { icons, images } from '../../../../constants';
import { routeNames } from '../../../../navigation/routeNames';
import {
  BackgroundImage,
  BottomContainer,
  Circle,
  Dot,
  DotContainer,
  Heading,
  Icon,
  LogoImage,
  MiddleContainer,
  NextImage,
  RotatedView,
  RowContainer,
  TagTitle,
  Title,
  TopContainer,
} from './ImproveAndWin.styled';

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
            Loaded with all the fitness features{'\n'}for your favourite sport
          </Heading>
        </TopContainer>
        <MiddleContainer>
          <RowContainer>
            <RotatedView rotate="-20">
              <Circle>
                <Icon
                  resizeMode="contain"
                  source={icons.recovery}
                  rotate={'0'}
                />
              </Circle>
              <TagTitle>recovery rate</TagTitle>
            </RotatedView>
            <RotatedView rotate="30">
              <Circle>
                <Icon
                  resizeMode="contain"
                  source={icons.performance}
                  rotate={'-30'}
                />
              </Circle>
              <TagTitle>Performance{'\n'}Monitoring</TagTitle>
            </RotatedView>
          </RowContainer>
          <RotatedView rotate="15">
            <Circle>
              <Icon resizeMode="contain" source={icons.coach} rotate={'5'} />
            </Circle>
            <TagTitle>Coach{'\n'}Consulting</TagTitle>
          </RotatedView>

          <RowContainer>
            <RotatedView rotate="-40">
              <Circle>
                <Icon
                  resizeMode="contain"
                  source={icons.doctor}
                  rotate={'15'}
                />
              </Circle>
              <TagTitle>doctors{'\n'}Consultation</TagTitle>
            </RotatedView>
            <RotatedView marginLeft={20} rotate="20">
              <Circle>
                <Icon
                  resizeMode="contain"
                  source={icons.health}
                  rotate={'-20'}
                />
              </Circle>
              <TagTitle> Health Devices{'\n'}Integrations</TagTitle>
            </RotatedView>
          </RowContainer>
        </MiddleContainer>
        <BottomContainer>
          <Title>Improve & WIN 100% </Title>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(routeNames.AUTH)}
          >
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
