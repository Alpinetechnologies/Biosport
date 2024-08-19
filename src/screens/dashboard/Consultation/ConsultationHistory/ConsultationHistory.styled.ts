import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const OrderContainer = styled.View`
  justify-content: center;
  padding: 10px;
  background-color: white;
`;
export const Status = styled.Text`
  font-size: 12px;
  color: #616161;
`;
export const StatusValue = styled.Text`
  font-size: 12px;
  color: #facc15;
`;
export const TestType = styled.Text`
  font-size: 12px;
  color: #616161;
`;
export const TestTypeValue = styled.Text`
  font-size: 12px;
`;

export const VerticalLine = styled.View`
  height: 20px;
  width: 1px;
  background: #9e9e9e;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ExtraDetails = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const Upcoming = styled.Text`
  font-size: 16px;
  margin-top: 10px;
`;

export const Previous = styled.Text`
  font-size: 16px;
  margin-top: 10px;
`;

export const ButtonContainer = styled.View`
  margin-top: 10px;
  align-items: flex-end;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  border-radius: 20px;
  background: ${(props) =>
    props.status === "Upcoming" ? "#090909" : "#CEFF00"};
`;

export const ButtonText = styled.Text`
  color: ${(props) => (props.status === "Upcoming" ? "#fff" : "#090909")};
`;
