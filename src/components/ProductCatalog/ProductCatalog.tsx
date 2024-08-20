import React from "react";
import {
  ProductContainer,
  Image,
  Title,
  Description,
  PriceContainer,
  MinPrice,
  MaxPrice,
} from "./ProductCatalog.styled";
import { Product } from "../../types/Shop";

const ProductCatalog = ({
  data: { title, imageURL, description, minPrice, maxPrice },
  onPress,
}: {
  data: Product;
  onPress: () => void;
}) => {
  return (
    <ProductContainer onPress={onPress}>
      <Image
        source={{
          uri: imageURL,
        }}
      />
      <Title numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Title>
      <Description numberOfLines={1} ellipsizeMode="tail">
        {description}
      </Description>
      <PriceContainer>
        <MinPrice>{minPrice}</MinPrice>
        <MaxPrice>{maxPrice}</MaxPrice>
      </PriceContainer>
    </ProductContainer>
  );
};

export default React.memo(ProductCatalog);
