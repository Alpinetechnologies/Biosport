import { View } from 'react-native';
import { ExerciseOverview } from '../ExerciseOverview/ExerciseOverview';
import {
  CircularPoint,
  DayCountText,
  ProgressContainer,
  RowContainer,
  RowView,
  VerticalLine,
} from './ComponentTimelinestyled';

export function ComponentTimeline() {
  return (
    <RowContainer>
      <ProgressContainer>
        <VerticalLine />
      </ProgressContainer>
      <View>
        <RowView>
          <CircularPoint />
          <DayCountText>Day 1</DayCountText>
        </RowView>
        <ExerciseOverview />
        <ExerciseOverview />
        <RowView>
          <CircularPoint />
          <DayCountText>Day 2</DayCountText>
        </RowView>
        <ExerciseOverview />
        <ExerciseOverview />
      </View>
    </RowContainer>
  );
}
