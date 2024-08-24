import { PrimaryButton } from '@/src/components/Buttom/Button';
import { images } from '@/src/constants';
import colors from '@/src/styles/colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { StatusBar } from 'react-native';
import {
  AdOnContainer,
  BackgroundImage,
  BottomContainer,
  DetailContaier,
  Divider,
  HeaderContainer,
  ItemText,
  ListItem,
  PlanAmount,
  PlanName,
  PriceText,
  RowContainer,
  SelectedPlan,
  SummaryText,
  TopText,
} from './AddOns.styled';

export default function (props: any) {
  const plansData = [
    {
      title: 'Selected Plan:',
      plans: [
        { name: 'Basic Plan', amount: '$209' },
        { name: 'Sign-up cost', amount: '$599' },
      ],
    },
    {
      title: 'Add ons:',
      plans: [
        { name: 'Kinesiologist Consulting', amount: '$200' },
        { name: 'Gut Microbiome Testing', amount: '$450' },
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
        <DetailContaier>
          <HeaderContainer>
            <TopText>Addons:</TopText>
          </HeaderContainer>

          <AdOnContainer>
            <ListItem>
              <AntDesign
                name="checkcircle"
                color={colors.parrotPrimary['primary-950']}
              />
              <ItemText active={true}>Gut Microbiome Testing</ItemText>
              <PriceText>$450</PriceText>
            </ListItem>

            <ListItem>
              <AntDesign name="checkcircle" color={'#616161'} />
              <ItemText active={false}>
                Dietician/Nutrition Consultation x 1
              </ItemText>
              <PriceText>$300</PriceText>
            </ListItem>
            <ListItem>
              <AntDesign name="checkcircle" color={'#616161'} />
              <ItemText active={false}>Vo2 max</ItemText>
              <PriceText>$100</PriceText>
            </ListItem>
            <ListItem>
              <AntDesign
                name="checkcircle"
                color={colors.parrotPrimary['primary-950']}
              />
              <ItemText active={true}>Kinesiologist Consulting</ItemText>
              <PriceText>$200</PriceText>
            </ListItem>
          </AdOnContainer>
        </DetailContaier>

        <BottomContainer>
          <SummaryText>Billing Information</SummaryText>
          {plansData.map((section, j) => (
            <DetailContaier key={j}>
              <SelectedPlan>{section.title}</SelectedPlan>
              {section.plans.map((plan, idx) => (
                <RowContainer key={idx}>
                  <PlanName>{plan.name}</PlanName>
                  <PlanAmount>{plan.amount}</PlanAmount>
                </RowContainer>
              ))}
            </DetailContaier>
          ))}
          <Divider />
          <RowContainer>
            <PlanName>Total Amount</PlanName>
            <PlanAmount>$1458</PlanAmount>
          </RowContainer>
          <PrimaryButton
            onPress={() => props.navigation.navigate('DASHBOARD')}
            marginVertical={20}
            title="Pay Now($1358)"
          />
        </BottomContainer>
      </BackgroundImage>
    </>
  );
}
