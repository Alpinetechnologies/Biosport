import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  color: black;
`;

export const CarouselContainer = styled.View`
  height: 40%;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const FeatureContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ProductName = styled.Text`
  color: #000000;
  font-size: 24px;
`;

export const Size = styled.Text`
  margin-top: 10px;
  font-weight: 500;
`;

export const DescriptionTitle = styled.Text`
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Description = styled.Text`
  margin-top: 10px;
`;

export const CartContainer = styled.View`
  background: #000000;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  height: 40%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceContainer = styled.View``;

export const Price = styled.Text`
  color: #fff;
  font-size: 12px;
`;
export const TotalAmount = styled.Text`
  color: #ceff00;
  font-size: 24px;
`;
export const AddToCart = styled.TouchableOpacity`
  background: #ceff00;
  border-radius: 20px;
  width: 50%;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;
export const CartText = styled.Text`
  font-weight: 700;
`;
