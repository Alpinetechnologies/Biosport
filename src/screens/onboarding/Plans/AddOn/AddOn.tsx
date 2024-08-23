import {
  StyleSheet,
  StatusBar,
  Text,
  ImageBackground,
  View,
} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { images } from "../../../../constants";
import colors from "../../../../styles/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import YellowButton from "../../../../components/YellowButtom/YellowButton";

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  background-color: white;
  justify-content: space-between;
`;
const TopText = styled.Text`
  font-size: 32px;
  color: ${colors.otherColors.white};
  line-height: 38px;
  font-family: "medium";
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-top: 40px;
  margin-horizontal: 20px;
`;

const AdOnContainer = styled(View)`
  padding: 22.5px;
  background-color: ${colors.otherColors.transparentBlack};
  border-radius: 12px;
  margin-vertical: 15px;
  margin-horizontal: 20px;
  border-width: 1px;
  border-color: ${colors.otherColors.border};
`;

const ListItem = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
  padding: 10px 0;
`;

const ItemText = styled.Text`
  color: ${colors.otherColors.white};
  font-size: 12px;
  font-family: "medium";
  flex: 1;
`;

const PriceText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: "bold";
`;

const BottomContainer = styled.View`
  padding: 22.5px;
  background-color: ${colors.otherColors.transparentBlack};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  border-color: ${colors.otherColors.border};
`;

const DetailContaier = styled.View``;

const SummaryText = styled.Text`
  color: ${colors.otherColors.lightGrey};
  font-size: 14px;
  font-family: "medium";
  line-height: 21px;
  margin-bottom: 15px;
`;
const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const SelectedPlan = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.otherColors.border};
  margin-bottom: 10px;
`;

const PlanName = styled.Text`
  font-size: 12px;
  color: ${colors.otherColors.white};
  fonnt-family: "medium";
  line-height: 21px;
`;

const PlanAmount = styled(PlanName)`
  font-family: "bold";
`;
const Divider = styled.View`
  height: 1px;
  background-color: #ddd;
  margin: 10px 0;
`;
export default function AddOn() {
  const plansData = [
    {
      title: "Selected Plan:",
      plans: [
        { name: "Basic Plan", amount: "$209" },
        { name: "Sign-up cost", amount: "$599" },
      ],
    },
    {
      title: "Add ons:",
      plans: [
        { name: "Kinesiologist Consulting", amount: "$200" },
        { name: "Gut Microbiome Testing", amount: "$450" },
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
        <DetailContaier>
          <HeaderContainer>
            <TopText>Addons:</TopText>
          </HeaderContainer>

          <AdOnContainer>
            <ListItem>
              <AntDesign
                name="checkcircle"
                color={colors.parrotPrimary["primary-950"]}
                style={{ width: 20 }}
              />
              <ItemText>Gut Microbiome Testing</ItemText>
              <PriceText>$450</PriceText>
            </ListItem>

            <ListItem>
              <AntDesign
                name="checkcircle"
                color={colors.otherColors.white}
                style={{ width: 20 }}
              />
              <ItemText>Dietician/Nutrition Consultation x 1</ItemText>
              <PriceText>$300</PriceText>
            </ListItem>
            <ListItem>
              <AntDesign
                name="checkcircle"
                color={colors.otherColors.white}
                style={{ width: 20 }}
              />
              <ItemText>Vo2 max</ItemText>
              <PriceText>$100</PriceText>
            </ListItem>
            <ListItem>
              <AntDesign
                name="checkcircle"
                color={colors.parrotPrimary["primary-950"]}
                style={{ width: 20 }}
              />
              <ItemText>Kinesiologist Consulting</ItemText>
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
          <YellowButton marginVertical={20} title="Pay Now($1358)" />
        </BottomContainer>
      </BackgroundImage>
    </>
  );
}
