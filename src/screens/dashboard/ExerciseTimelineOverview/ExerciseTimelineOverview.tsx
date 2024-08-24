import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { CommonHeader } from '../../../components/CommonHeader/CommonHeader';
import {
  ControlButtons,
  ControlsRowView,
  GreenContainer,
  ImageBackgroundView,
  ListHeaderText,
  PauseBtn,
  RightIconImage,
  RowContainer,
  SafeAreaContainer,
  SubText,
  TimeText,
  TrackProgressBtnContainer,
  TrackProgressText,
  VideoControlContainer,
} from './ExerciseTimelineOverview.styled';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ComponentWorkoutList } from '../../../components/ComponentWorkoutList/ComponentWorkoutList';

export function ExerciseTimelineOverview() {
  const [play, pause] = useState(false);
  return (
    <SafeAreaContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ImageBackgroundView
        source={require('../../../../assets/images/girl-about-to-lift-weight.png')}
      >
        <CommonHeader headerTitle="Week 1 exercise" />
        <VideoControlContainer>
          <LinearGradient
            colors={[
              'transparent',
              'rgba(0, 0, 0, 0.7)',
              'rgba(0, 0, 0, 0.9)',
              'rgba(0, 0, 0, 1)',
            ]}
            style={{ width: '100%' }}
          >
            <TimeText>12: 00</TimeText>
            <SubText>20x Jump rope</SubText>
            <ControlsRowView>
              <TouchableOpacity>
                <ControlButtons
                  source={require('../../../../assets/images/VideoControlsImages/Reload.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ControlButtons
                  source={require('../../../../assets/images/VideoControlsImages/Previous.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => pause(!play)}>
                <GreenContainer>
                  {play ? (
                    <ControlButtons
                      source={require('../../../../assets/images/VideoControlsImages/Pause.png')}
                    />
                  ) : (
                    <PauseBtn
                      source={require('../../../../assets/images/VideoControlsImages/Play.png')}
                    />
                  )}
                </GreenContainer>
              </TouchableOpacity>
              <TouchableOpacity>
                <ControlButtons
                  source={require('../../../../assets/images/VideoControlsImages/Next.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ControlButtons
                  source={require('../../../../assets/images/VideoControlsImages/Stop.png')}
                />
              </TouchableOpacity>
            </ControlsRowView>
          </LinearGradient>
        </VideoControlContainer>
      </ImageBackgroundView>
      <RowContainer>
        <ListHeaderText>Workout list</ListHeaderText>
        <TrackProgressBtnContainer>
          <TrackProgressText>Track Progress</TrackProgressText>
          <RightIconImage
            source={require('../../../../assets/images/CommonImages/OrangeChevronRight.png')}
          />
        </TrackProgressBtnContainer>
      </RowContainer>
      <ScrollView>
        <ComponentWorkoutList
          exerciseType="20x Split snatches"
          timeline="01:02"
          progress={75}
        />
        <ComponentWorkoutList
          exerciseType="20x Split snatches"
          timeline="01:02"
          progress={60}
        />
        <ComponentWorkoutList
          exerciseType="20x Split snatches"
          timeline="01:02"
          progress={0}
        />
      </ScrollView>
    </SafeAreaContainer>
  );
}
