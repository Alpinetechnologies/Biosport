import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const ProgressText = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-family: normal;
  text-align: center;
  line-height: 33px;
`;

export const SubText = styled.Text`
  color: #828282;
  font-size: 16px;
  margin-top: 5px;
  letter-spacing: 0.2px;
  line-height: 24px;
  font-family: normal;
`;

export const InnerContainer = styled.View`
  height: 149px;
  width: 149px;
  align-items: center;
  justify-content: center;
  background-color: #4d4f4e;
  border-radius: 100px;
  shadow-color: #4d4f4e;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  elevation: 10;
  position: absolute;
  top: 55px;
`;
