import styled from 'styled-components/native';

export const DayCountText = styled.Text`
  font-size: 16px;
  color: black;
  line-height: 24px;
  font-family: regular;
`;
export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CircularPoint = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 10px;
  background-color: #ceff00;
  border: 4px solid black;
  position: absolute;
  left: -28px;
`;
export const ProgressContainer = styled.View`
  width: 20px;
  align-items: center;
  margin: 0 10px 0 0;
`;

export const VerticalLine = styled.View`
  width: 2px;
  flex-grow: 1;
  background-color: #252525;
  margin-top: 5px;
`;

export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;
