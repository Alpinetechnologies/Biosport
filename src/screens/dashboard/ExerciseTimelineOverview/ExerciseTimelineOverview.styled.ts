import styled from 'styled-components/native';
export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #000000;
`;
export const ImageBackgroundView = styled.ImageBackground`
  height: 520px;
  resize-mode: cover;
`;
export const VideoControlContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
`;

export const TimeText = styled.Text`
  font-family: semibold;
  color: #ffffff;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
`;
export const SubText = styled.Text`
  font-family: normal;
  color: #ffffff;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
`;
export const ControlsRowView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding: 0 70px;
  margin-bottom: 32px;
`;
export const ControlButtons = styled.Image`
  height: 24px;
  width: 24px;
`;
export const PauseBtn = styled.Image`
  height: 16px;
  width: 16px;
`;
export const GreenContainer = styled.View`
  background-color: #ceff00;
  border: 5px solid rgba(255, 255, 255, 0.2);
  height: 64px;
  width: 64px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 23px;
  margin-bottom: 24px;
`;

export const ListHeaderText = styled.Text`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2px;
  font-family: normal;
  color: #ffffff;
`;
export const TrackProgressText = styled.Text`
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: normal;
  color: #fb9400;
`;
export const RightIconImage = styled.Image`
  height: 10px;
  width: 10px;
  resize-mode: contain;
`;
export const TrackProgressBtnContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
