import {
  BuyNowButtonContainer,
  BuyNowButtonText,
  CardSubText,
  CardTitleText,
  ComponentWeekCard,
} from './ComponentUnpaidSubscription.styled';

export function ComponentUnpaidSubscription() {
  return (
    <ComponentWeekCard>
      <CardTitleText>Unpaid{'\n'}subscription</CardTitleText>
      <CardSubText>
        Your subscription is unpaid, please complete payment to get further
        recommendations.
      </CardSubText>
      <BuyNowButtonContainer>
        <BuyNowButtonText>Buy Now</BuyNowButtonText>
      </BuyNowButtonContainer>
    </ComponentWeekCard>
  );
}
