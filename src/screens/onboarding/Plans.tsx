import React from "react";
import { StatusBar, View } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import colors from "../../styles/colors";
import { images } from "../../constants";
import { PrimaryButton } from "../../components/Buttom/Button";

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

const BackButton = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  background-color: ${colors.otherColors.white};
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const TopText = styled.Text`
  font-size: 32px;
  color: ${colors.otherColors.white};
  line-height: 38px;
  font-family: "regular";
`;

const TopSubText = styled.Text`
  font-size: 32px;
  color: ${colors.parrotPrimary["primary-950"]};
  font-family: "regular";
  line-height: 38px;
  margin-bottom: 10px;
`;

const PlanContainer = styled.View`
  padding: 20px;
  background-color: ${colors.otherColors.transparentBlack};
  border-radius: 12px;
  margin: 15px 0;
  border-width: 1px;
  border-color: #616161;
`;

const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const PlanText = styled.Text`
  font-size: 15px;
  color: ${colors.otherColors.white};
  font-family: medium;
`;

const PlanAmountText = styled.Text`
  font-size: 14px;
  color: ${colors.otherColors.white};
  font-family: light;
`;

const PointText = styled.Text`
  font-size: 13.5px;
  color: ${colors.otherColors.white};
  font-family: light;
  line-height: 20px;
  letter-spacing: 0.2px;
  flex: 1;
  margin-left: 10px;
`;

const PointsRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 7.5px;
`;

const PlanCard: React.FC<{
  planName: string;
  planPrice: string;
  features: string[];
}> = ({ planName, planPrice, features }) => (
  <PlanContainer>
    <FlexRow>
      <PlanText>{planName}</PlanText>
      <PlanAmountText>{planPrice}</PlanAmountText>
    </FlexRow>
    <View style={{ marginVertical: 5 }}>
      {features.map((feature, j) => (
        <PointsRow key={j}>
          <Feather name="check" size={16} color={colors.otherColors.white} />
          <PointText>{feature}</PointText>
        </PointsRow>
      ))}
    </View>
    <PrimaryButton marginVertical={15} title="Let's Go" />
  </PlanContainer>
);

export default function () {
  const plans = [
    {
      name: "BASIC PLAN",
      price: "US$ 209 monthly",
      features: [
        "Whole genome sequencing.",
        "Access to Health, Fitness and Performance features.",
      ],
    },
    {
      name: "Premium",
      price: "US$ 309 monthly",
      features: [
        "Whole genome sequencing.",
        "Access to Health, Fitness and Performance features.",
        "Kinesiogenomic consultation",
      ],
    },
  ];

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <BackgroundImage source={images.onboarding1}>
        <BackButton>
          <Feather name="arrow-left" size={16} color={"black"} />
        </BackButton>

        <TopText>Let's Explore</TopText>
        <TopSubText>BioSport plans</TopSubText>

        {plans.map((plan, i) => (
          <PlanCard
            key={i}
            planName={plan.name}
            planPrice={plan.price}
            features={plan.features}
          />
        ))}
      </BackgroundImage>
    </>
  );
}
