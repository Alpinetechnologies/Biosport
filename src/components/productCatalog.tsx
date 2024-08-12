import styled from "styled-components/native";
import React from "react";
import { Product } from "../types/Shop";

const ProductContainer = styled.TouchableOpacity`
  height: 250px;
  background-color: #fff;
  border: 1px solid #eeeeee;
  padding: 4px;
  border-radius: 10px;
  width: 150px;
`;
const Image = styled.Image`
  height: 60%;
  border-radius: 15px;
  overflow: hidden;
`;

const Title = styled.Text`
  color: #212121;
  font-size: 16px;
`;

const Description = styled.Text`
  font-size: 12px;
  color: #757575;
`;

const PriceContainer = styled.View`
  width: 50%;
  padding: 2px 5px 5px;
  flex-direction: row;
  border: 1px solid #ceff00;
  border-radius: 20px;
  justify-content: space-between;
  margin-top: 5px;
`;
const MinPrice = styled.Text`
  color: #212121;
`;

const MaxPrice = styled.Text`
  color: #bdbdbd;
  text-decoration-line: line-through;
`;

const ProductCatalog = ({
  data: { title, imageURL, description, minPrice, maxPrice },
}: {
  data: Product;
}) => {
  return (
    <ProductContainer>
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
