import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Dimensions, FlatList } from "react-native";

const screenWidth = Dimensions.get("window").width;

const CarouselContainer = styled.View`
  align-items: center;
  position: relative;
`;

const CarouselItem = styled.View`
  width: ${screenWidth}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const CarouselImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const IndicatorContainer = styled.View`
  position: absolute;
  bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

const Indicator = styled.View<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "#CEFF00" : "#ecf0f1")};
  margin: 0 5px;
`;

const Carousel = ({ items }: { items: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <CarouselContainer>
      <FlatList
        data={items}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CarouselItem>
            <CarouselImage source={{ uri: item.image }} resizeMode="cover" />
          </CarouselItem>
        )}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <IndicatorContainer>
        {items.map((_, index: number) => (
          <Indicator key={index} active={index === currentIndex} />
        ))}
      </IndicatorContainer>
    </CarouselContainer>
  );
};

export default Carousel;
