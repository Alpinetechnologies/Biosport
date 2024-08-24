import styled from 'styled-components/native';

const AnalysisAddOnCard = styled.View`
  border: 1px solid #bdbdbd;
  padding: 16px 24px;
  margin: 10px 20px;
  border-radius: 11px;
`;
const TitleText = styled.Text`
  font-size: 14px;
  color: #f75555;
  margin-bottom: 15px;
  font-family: semibold;
`;
const AnalysisSubText = styled.Text`
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
  line-height: 24px;
  font-family: regular;
`;
export const BuyNowButtonContainer = styled.TouchableOpacity`
  background-color: #ceff00;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  height: 57px;
  margin-top: 15px;
`;
export const BuyNowButtonText = styled.Text`
  color: black;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: regular;
`;

export function NutritionAnalysisAddOnCard() {
  return (
    <AnalysisAddOnCard>
      <TitleText>Nutrition Analysis Add-on</TitleText>
      <AnalysisSubText>
        To see the Nutrition Analysis you have to buy the add on to see the
        Nutrition Analysis.
      </AnalysisSubText>
      <BuyNowButtonContainer>
        <BuyNowButtonText>Buy Now ($50)</BuyNowButtonText>
      </BuyNowButtonContainer>
    </AnalysisAddOnCard>
  );
}
