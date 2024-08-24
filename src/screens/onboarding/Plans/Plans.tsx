import { routeNames } from '@/src/navigation/routeNames';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { PrimaryButton } from '../../../components/Buttom/Button';
import { images } from '../../../constants';
import colors from '../../../styles/colors';
import {
  BackButton,
  BackgroundImage,
  FlexRow,
  PlanAmountText,
  PlanContainer,
  PlanText,
  PointsRow,
  PointText,
  TopSubText,
  TopText,
} from './Plans.styled';

export default function (props: any) {
  const plans = [
    {
      name: 'BASIC PLAN',
      price: 'US$ 209 monthly',
      features: [
        'Whole genome sequencing.',
        'Access to Health, Fitness and Performance features.',
      ],
    },
    {
      name: 'Premium',
      price: 'US$ 309 monthly',
      features: [
        'Whole genome sequencing.',
        'Access to Health, Fitness and Performance features.',
        'Kinesiogenomic consultation',
      ],
    },
  ];

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
      <PrimaryButton
        onPress={() => props.navigation.navigate(routeNames.ADD_ONS)}
        marginVertical={15}
        title="Let's Go"
      />
    </PlanContainer>
  );

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <BackgroundImage source={images.onboarding1}>
        <BackButton>
          <Feather name="arrow-left" size={16} color={'black'} />
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
