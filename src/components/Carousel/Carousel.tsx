import React, { useState, useRef } from "react";
import {
  CarouselContainer,
  FlatList,
  CarouselItem,
  CarouselImage,
  IndicatorContainer,
  Indicator,
} from "./Carousel.styled";

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
