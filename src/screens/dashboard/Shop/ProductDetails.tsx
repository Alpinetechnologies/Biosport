import { useEffect, useState } from "react";
import {
  Container,
  CarouselContainer,
  PriceContainer,
  FeatureContainer,
  ProductName,
  Size,
  DescriptionTitle,
  Description,
  CartContainer,
  Price,
  TotalAmount,
  CartText,
  AddToCart,
  BackButton,
  BackButtonIcon,
  BackButtonText,
} from "./productDetails.styled";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Carousel from "../../../components/Carousel";
import { OptionSelector } from "../../../components/optionSelector";

export default ({ route }) => {
  const { id } = route.params;
  const [selectedSize, setSelectedSize] = useState(41);
  const navigation = useNavigation();

  //   To hide the bottom bar
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "flex",
        },
      });
    };
  }, []);
  const img =
    "https://s3-alpha-sig.figma.com/img/fddf/7cc0/8d7f8df4139808a2f0df294709a951da?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f5~3ULTcfqFnZzWs7Tb4MoL5MNi2DXqdJNPSRQiE9NBQfB~y3Oql0JDo~wote26tAljafGpdtxSJJvUjMLgdJVAKya3ivTd7dO4stLZ-UvWS~fWFR6B-NPtsragZvBemBI4QbBCU3EYw5kT57QbF7yN5px~quA4x9qKk8BBdZ46H8THsnZBM-3qFcjeEq9eWTKup1cXyNL~2iV9KTxIHktDTMooBmILpRqnwlqWqHdyslE5K8zjb1FhAdCzAoucxTZKEPb-N~oHUM47o9MSTzZQlGbm1gR~84N30-DN2jfVHKZdlVxoAi4SCupVtjqmNuvRmCGHm5Y4HCukjRGkLmA__";

  return (
    <Container>
      <CarouselContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonIcon>
            <Ionicons name="arrow-back" size={18} color="black" />
          </BackButtonIcon>
          <BackButtonText>Snap And Track</BackButtonText>
        </BackButton>
        <Carousel items={[{ image: img }, { image: img }, { image: img }]} />
      </CarouselContainer>
      <FeatureContainer>
        <ProductName> Fashionable Man’s Sneakers</ProductName>
        <Size> SIZE</Size>
        <OptionSelector
          options={[39, 39.5, 40, 40.5, 41, 41.5]}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        <DescriptionTitle>Description</DescriptionTitle>
        <Description>
          Get a little lift from these Sam Edelman sandals featuring ruched
          straps and leather lace-up ties, while a braided jute sole makes a
          fresh statement for summer.
        </Description>
        <CartContainer>
          <PriceContainer>
            <Price>Total Price</Price>
            <TotalAmount>$198.00</TotalAmount>
          </PriceContainer>
          <AddToCart>
            <CartText>ADD TO CART</CartText>
          </AddToCart>
        </CartContainer>
      </FeatureContainer>
    </Container>
  );
};
