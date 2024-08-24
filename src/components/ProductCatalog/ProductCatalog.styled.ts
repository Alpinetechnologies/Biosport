import styled from 'styled-components/native';

export const ProductContainer = styled.TouchableOpacity`
  height: 250px;
  background-color: #fff;
  border: 1px solid #eeeeee;
  padding: 4px;
  border-radius: 10px;
  width: 150px;
`;
export const Image = styled.Image`
  height: 60%;
  border-radius: 15px;
  overflow: hidden;
`;

export const Title = styled.Text`
  color: #212121;
  font-size: 16px;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #757575;
`;

export const PriceContainer = styled.View`
  width: 50%;
  padding: 2px 5px 5px;
  flex-direction: row;
  border: 1px solid #ceff00;
  border-radius: 20px;
  justify-content: space-between;
  margin-top: 5px;
`;
export const MinPrice = styled.Text`
  color: #212121;
`;

export const MaxPrice = styled.Text`
  color: #bdbdbd;
  text-decoration-line: line-through;
`;
