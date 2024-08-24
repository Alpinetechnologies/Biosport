import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: #212121;
  margin-horizontal: 23px;
  margin-top: 10px;
  border-radius: 10px;
  padding-horizontal: 17px;
  padding-vertical: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  color: #c1c1c1;
  font-family: medium;
  line-height: 19px;
`;

export const CardSubTitle = styled.Text`
  font-size: 12px;
  color: #616161;
  font-family: normal;
  line-height: 19px;
`;
export const TickMark = styled.Image`
  height: 10px;
  width: 14px;
  resize-mode: cover;
`;
