import { Dimensions } from 'react-native';

import styled from 'styled-components/native';
const screenWidth = Dimensions.get('window').width;

export const CarouselContainer = styled.View`
  align-items: center;
  position: relative;
`;

export const FlatList = styled.FlatList``;

export const CarouselItem = styled.View`
  width: ${screenWidth}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const CarouselImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const IndicatorContainer = styled.View`
  position: absolute;
  bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Indicator = styled.View<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => (props.active ? '#CEFF00' : '#ecf0f1')};
  margin: 0 5px;
`;
