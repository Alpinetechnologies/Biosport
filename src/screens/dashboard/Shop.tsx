import { View } from "react-native";
import {
  Container,
  OfferContainer,
  OfferImage,
  OfferTitle,
  OfferValue,
  OfferDescription,
  Button,
  ButtonText,
  ProductContainer,
  ProductCategory,
  ProductList,
} from "./Shop.styled";

import ProductCatalog from "../../components/productCatalog";
import { Product } from "../../types/Shop";
import { dummyProducts } from "../../temp/shop";

export default () => {
  return (
    <Container>
      <OfferContainer>
        <OfferImage
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/7840/3e72/24c5e97359183a73756137e37dc1b150?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e7ch7vKqDukPDzpFy-pET2NTm6AkLzT7sEqkPLeFSP2sCOP2CmctSd-sxi8tl1DDMZWNGCm7N3twHgGl~YmR01smrGewBbjBxV0YVdGMVTWRYhVRBcAyCMK3kQCemcWUP59xcpB2Ree24O2TCNagZ8HizRR~z4BQPC7P4sX95PObGjpTSVdCZ35MYOIL4O9FTZc~xRXf17L9NoyPK1hJ6zMqjyUBzjJszrJfQ~KImQh3hOUdKYDLsWhKcuRNU2fXW1HwaCjynSwHTH3GHzOOMk3sPEQhq-4WQzYEZa008tbnaYEKtdkMUt13dicOIeA~Nhhx9XmKP4JwAvLiHb2A4Q__",
          }}
        >
          <OfferTitle>SPECIAL OFFER</OfferTitle>
          <OfferValue>Upto 30% OFF</OfferValue>
          <OfferDescription>
            Lorem ipsum dolor sit amet conseur adipisi elit. Hic accusamus quod
            consequuntur laudantium tenetur natus praesentium
          </OfferDescription>
          <Button>
            <ButtonText>Book Now</ButtonText>
          </Button>
        </OfferImage>
      </OfferContainer>
      <ProductContainer>
        <ProductCategory>Sports DRESSES</ProductCategory>
        <ProductList
          data={dummyProducts}
          keyExtractor={(item: Product) => item.productId.toString()}
          renderItem={({ item }) => <ProductCatalog data={item} />}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // Space between items
        />
      </ProductContainer>

      <ProductContainer>
        <ProductCategory>Sports gears</ProductCategory>
        <ProductList
          data={dummyProducts}
          keyExtractor={(item: Product) => item.productId.toString()}
          renderItem={({ item }) => <ProductCatalog data={item} />}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // Space between items
        />
      </ProductContainer>
    </Container>
  );
};
