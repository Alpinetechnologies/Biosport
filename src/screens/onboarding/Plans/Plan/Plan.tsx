import React from "react";
import { StatusBar, View } from "react-native";

import styled from "styled-components/native";
import { images } from "../../../../constants";
import { Feather } from "@expo/vector-icons";
import colors from "../../../../styles/colors";

import YellowButton from "../../../../components/YellowButtom/YellowButton";

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
  margin-bottom: 15px;
  margin-top: 30px;
`;

const TopText = styled.Text`
  font-size: 32px;
  color: ${colors.otherColors.white};
  line-height: 38px;
`;

const TopSubText = styled.Text`
  font-size: 32px;
  color: ${colors.parrotPrimary["primary-950"]};
  font-family: medium;
  line-height: 38px;
  margin-bottom: 10px;
`;

const PlanContainer = styled(View)`
  padding: 22.5px;
  background-color: ${colors.otherColors.transparentBlack};
  border-radius: 12px;
  margin-vertical: 15px;
`;

const FlexRow = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PlanText = styled.Text`
  font-size: 16px;
  color: ${colors.otherColors.white};
  font-family: medium;
`;

const PlanAmountText = styled.Text`
  font-size: 14px;
  color: ${colors.otherColors.white};
  font-family: medium;
`;

const PointText = styled.Text`
  font-size: 14px;
  color: ${colors.otherColors.white};
  font-family: regular;
  line-height: 21px;
  letter-spacing: 0.2px;
`;

const PointsRow = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

interface PlanCardProps {
  planName: string;
  planPrice: string;
  features: string[];
}

const PlanCard: React.FC<PlanCardProps> = ({
  planName,
  planPrice,
  features,
}) => (
  <PlanContainer>
    <View style={{ marginHorizontal: 15, marginBottom: 20 }}>
      <FlexRow>
        <PlanText>{planName}</PlanText>
        <PlanAmountText>{planPrice}</PlanAmountText>
      </FlexRow>
      {features.map((feature, j) => (
        <PointsRow key={j}>
          <Feather
            name="check"
            size={20}
            color={colors.otherColors.white}
            style={{ width: 25 }}
          />
          <PointText>{feature}</PointText>
        </PointsRow>
      ))}
    </View>
    <YellowButton marginVertical={20} title="Let's Go" />
  </PlanContainer>
);

interface ExplorePlansScreenProps {}

const Plans: React.FC<ExplorePlansScreenProps> = (props) => {
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
      <BackgroundImage source={images.girllifting}>
        <BackButton>
          <Feather
            name="arrow-left"
            size={20}
            color={colors.otherColors.black}
          />
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
};

export default Plans;
