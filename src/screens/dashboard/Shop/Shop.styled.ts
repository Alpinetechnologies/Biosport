import styled from 'styled-components/native';
export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

/*-------- For Offer block---------- */

export const OfferContainer = styled.View`
  min-height: 20%;
  border-radius: 10px;
`;

export const OfferImage = styled.ImageBackground`
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  padding: 20px;
`;

export const OfferTitle = styled.Text`
  color: #f75555;
  font-size: 12px;
`;

export const OfferValue = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`;

export const OfferDescription = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: #fff;
  padding: 5px;
  width: 35%;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: #090909;
  font-weight: 500;
  text-align: center;
`;

/* Product section  */

export const ProductContainer = styled.View`
  margin-top: 20px;
`;

export const ProductCategory = styled.Text`
  color: #212121;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ProductList = styled.FlatList``;
