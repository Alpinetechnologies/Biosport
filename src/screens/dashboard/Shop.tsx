import { View } from "react-native";
import styled from "styled-components/native";
import ProductCatalog from "../../components/productCatalog";
import { IProductCatalog } from "../../types/Shop";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

/*-------- For Offer block---------- */

const OfferContainer = styled.View`
  min-height: 30%;
  border-radius: 10px;
`;

const OfferImage = styled.ImageBackground`
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  padding: 20px;
`;

const OfferTitle = styled.Text`
  color: #f75555;
  font-size: 12px;
`;

const OfferValue = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`;

const OfferDescription = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;

const Button = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: #fff;
  padding: 5px;
  width: 35%;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  color: #090909;
  font-weight: 500;
  text-align: center;
`;

/* Product section  */

const ProductContainer = styled.View`
  margin-top: 20px;
`;

const ProductCategory = styled.Text`
  color: #212121;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;

const ProductList = styled.FlatList``;
const dummyProducts = [
  {
    productId: 1,
    imageURL:
      "https://s3-alpha-sig.figma.com/img/4628/b0c3/3cf05fc00fe587d20df6fc9686f35b25?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I5yVf0-E-LDpLCgF~-6rn00fB4QCRa2M2aFsJ5pZYYajnEHbb4BsqizcgoT1~kgBTaBf7cLLuJR~klgL~3OXhR9NXE8qW-Qruj92QqlbrDYuMdZfkX29zTcAz~k4qpQLHBzzQZqHWVPodnYZkB5kww-FOSM4k2CObQnOFXkBse7VgsZbne8vRubAvQszRFimMVKNFwHJJWl1D4GSGWB~sTbh8ypq2LtAJrTKzeSd8utCqYSvzvDb1kso7O2xmYvgPfxem1tqv9Bzc1o0DPrI9rZhpMHrKx5tUtNt8546wTQIimPmYg7oJ1SHsR8F78reNSibuUBe5C043uKZ9I9VJw__",
    title: "Sports Gear",
    description: "1 pair of shoes, watch, band...",
    maxPrice: "$25",
    minPrice: "$20",
  },
  {
    productId: 2,
    imageURL:
      "https://s3-alpha-sig.figma.com/img/030f/c19e/4410755a8e02ad487377cb40e1a51408?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bj5mlXKM3gLgW~eSGRoAV5VjuULKE4OOIm6AgKV141-mYb2S7WmMO8I56xl3fQf7AqyQHfwufBxprEzET6FC7cPiT72fLs41MOmCFtCRRYMn5b1dHCLkPjqPtkdBP5oJh7gKe6-T5CGrL0yKzD-2QQFH2UFPp3~XRDvHD2yxlNdVTmQClDSZUjel-ZUwA3CCSjkjcWEcZzpLvQFGlzlbmKCC3oSntLIiKcvqoD-UNJSOSqaF5l1jqkVfUCqM4~GkUbsSo9257AgvZknzV7SgtvL8sx8YMpk8FqGcmuYKfrfM6hj37oTo4ub~nUXmOSXAFrpe5WZGk5F10u1FOpxSSQ__",
    title: "Sports Gear",
    description: "1 pair of shoes, watch, band...",
    maxPrice: "$25",
    minPrice: "$20",
  },
  {
    productId: 3,
    imageURL:
      "https://s3-alpha-sig.figma.com/img/4628/b0c3/3cf05fc00fe587d20df6fc9686f35b25?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I5yVf0-E-LDpLCgF~-6rn00fB4QCRa2M2aFsJ5pZYYajnEHbb4BsqizcgoT1~kgBTaBf7cLLuJR~klgL~3OXhR9NXE8qW-Qruj92QqlbrDYuMdZfkX29zTcAz~k4qpQLHBzzQZqHWVPodnYZkB5kww-FOSM4k2CObQnOFXkBse7VgsZbne8vRubAvQszRFimMVKNFwHJJWl1D4GSGWB~sTbh8ypq2LtAJrTKzeSd8utCqYSvzvDb1kso7O2xmYvgPfxem1tqv9Bzc1o0DPrI9rZhpMHrKx5tUtNt8546wTQIimPmYg7oJ1SHsR8F78reNSibuUBe5C043uKZ9I9VJw__",
    title: "Sports Gear",
    description: "1 pair of shoes, watch, band...",
    maxPrice: "$25",
    minPrice: "$20",
  },
];

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
          keyExtractor={(item: IProductCatalog) => item.productId.toString()}
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
          keyExtractor={(item: IProductCatalog) => item.productId.toString()}
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
