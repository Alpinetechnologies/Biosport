import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const CardContainer = styled.View`
  border-radius: 10px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

const GradientBackground = styled(LinearGradient)`
  flex: 1;
  border-radius: 10px;
  justify-content: center;
  margin: 0 16px 20px 16px;
`;

const ImageContainer = styled.Image`
  width: 50px;
  height: 48px;
  border-radius: 9px;
`;
type ExerciseTypeTextProps = {
  color: string;
};
const ExerciseTypeText = styled.Text<ExerciseTypeTextProps>`
  font-size: 14px;
  line-height: 19px;
  color: ${props => props.color};
  font-family: normal;
`;

const ExerciseTypeSubText = styled.Text`
  font-size: 14px;
  line-height: 19px;
  color: #828282;
  font-family: normal;
`;

const TextContainer = styled.View`
  margin: 0 0 0 10px;
`;

const PlayButton = styled.Image`
  height: 24px;
  width: 24px;
  padding-right: 10px;
`;

const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ProgressPercentage = styled.Text`
  color: #dbff42;
  font-size: 16px;
  font-family: medium;
  line-height: 24px;
`;
interface WorkoutListProps {
  exerciseType: string;
  timeline: string;
  progress: number;
}

export function ComponentWorkoutList({
  exerciseType,
  timeline,
  progress,
}: WorkoutListProps) {
  return (
    <GradientBackground
      colors={[
        '#DBFF42',
        '#DBFF42',
        '#DBFF42',
        '#DBFF42',
        '#DBFF42',
        '#212121',
      ]}
      start={[0, 0]}
      end={[progress / 100, 0]}
    >
      <CardContainer>
        <RowView>
          <ImageContainer
            source={require('../../../assets/images/girl-about-to-lift-weight.png')}
          />
          <TextContainer>
            <ExerciseTypeText color={progress < 50 ? ' #ffffff' : '#000000'}>
              {exerciseType}
            </ExerciseTypeText>
            <ExerciseTypeSubText>{timeline}</ExerciseTypeSubText>
          </TextContainer>
        </RowView>
        {progress > 0 ? (
          <ProgressPercentage>{progress}%</ProgressPercentage>
        ) : (
          <TouchableOpacity>
            <PlayButton
              source={require('../../../assets/images/CommonImages/WhitePlay.png')}
            />
          </TouchableOpacity>
        )}
      </CardContainer>
    </GradientBackground>
  );
}
