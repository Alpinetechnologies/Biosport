import styled from "styled-components/native";

const Container = styled.SafeAreaView`
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
    </Container>
  );
};
