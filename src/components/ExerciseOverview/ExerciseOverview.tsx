import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  border-radius: 10px;
  border: 1px solid #9e9e9e;
  padding: 15px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  width: 96%;
`;
const ImageContainer = styled.Image`
  width: 50px;
  height: 48px;
`;
const ExerciseTypeText = styled.Text`
  font-size: 14px;
  line-height: 19px;
  color: #212121;
  font-family: regular;
`;
const ExerciseTypeSubText = styled.Text`
  font-size: 14px;
  line-height: 19px;
  color: #828282;
  font-family: regular;
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
export function ExerciseOverview() {
  return (
    <CardContainer>
      <RowView>
        <ImageContainer
          source={require('../../../assets/images/workout/ExerciseType.png')}
        />
        <TextContainer>
          <ExerciseTypeText>20x Split snatches</ExerciseTypeText>
          <ExerciseTypeSubText>01:30</ExerciseTypeSubText>
        </TextContainer>
      </RowView>
      <TouchableOpacity>
        <PlayButton
          source={require('../../../assets/images/workout/blackPlay.png')}
        />
      </TouchableOpacity>
    </CardContainer>
  );
}
