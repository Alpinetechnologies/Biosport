import React, { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import { icons, images } from "../../constants";

const Container = styled.ImageBackground`
  flex: 1;
  background-color: ${colors.otherColors.transparentBlack};
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 55px 20px 20px 20px;
`;

const Heading = styled.Text`
  color: ${colors.parrotPrimary["primary-950"]};
  font-size: 16px;
  margin-bottom: 5px;
  line-height: 24px;
  font-family: "regular";
`;

const SubHeading = styled.Text`
  color: white;
  font-size: 15px;
  font-family: "regular";
  flex: 1;
  line-height: 24px;
`;

const StepImage = styled.Image`
  height: 120px;
  width: 120px;
`;

const IconImage = styled.Image`
  height: 20px;
  width: 20px;
  margin-bottom: 7.5px;
`;

const ContentRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const TabsContainer = styled.View`
  width: 80px;
  border-width: 0.25px;
  border-color: ${colors.otherColors.lightGrey};
  border-top-right-radius: 12px;
  border-bottom-right-radius: 15px;
  background-color: ${colors.otherColors.transparentBlack};
  overflow: hidden;
  border-bottom-right-radius: 5px;
  border-left-width: 0;
`;

const ActiveTab = styled.View`
  background-color: ${colors.parrotPrimary["primary-950"]};

  justify-content: center;
  align-items: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-top: 20px;
  height: 67px;
`;

const ActiveTabText = styled.Text`
  font-size: 10px;
  color: black;
  text-transform: uppercase;
  font-family: "regular";
`;

const InactiveTab = styled.View`
  justify-content: center;
  align-items: center;
  height: 67px;
  margin: 10px 0;
`;

const TabText = styled.Text`
  font-size: 10px;
  color: white;
  font-family: "regular";
  text-transform: uppercase;
`;

const InfoContainer = styled.View`
  padding: 15px;
  border-width: 0.5px;
  border-color: grey;
  border-radius: 12px;
  background-color: ${colors.otherColors.transparentBlack};
  overflow: hidden;
  margin: 0px 15px 40px 15px;
  flex: 1;
`;

const InfoHeading = styled.Text`
  font-size: 16px;
  letter-spacing: 0.2px;
  color: white;
  text-transform: uppercase;
  margin: 5px 0px 20px 5px;
  font-family: "regular";
`;

const BottomButtonContainer = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`;

const SkipButton = styled.Text`
  font-size: 12px;
  color: white;
  letter-spacing: 0.2px;
  text-decoration-line: underline;
  text-decoration-color: ${colors.parrotPrimary["primary-950"]};
  margin: 0px 20px;
  font-family: "regular";
`;

const NextButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  border-width: 1px;
  border-color: ${colors.parrotPrimary["primary-950"]};
  justify-content: center;
  align-items: center;
  background-color: ${colors.otherColors.transparentBlack};
  border-radius: 50px;
`;

const NextButtonText = styled.Text`
  font-size: 11px;
  color: white;
  letter-spacing: 0.2px;
  font-family: "regular";
`;

const GoalOption = styled.TouchableOpacity<{ isSelected: boolean }>`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    props.isSelected ? colors.parrotPrimary["primary-950"] : "#212121"};
  margin: 5px;
  border-radius: 8px;
  padding: 10px;
`;

const GoalText = styled.Text<{ isSelected: boolean }>`
  font-size: 12px;
  color: ${(props) =>
    props.isSelected ? "#000" : colors.otherColors.lightGrey};
  flex: 1;
  font-family: "medium";
`;

const GoalImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 9px;
`;

export default function (props: any) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const goladlist = [
    {
      id: "1",
      label: "PHYSICAL FITNESS",
    },
    {
      id: "2",
      label: "PERFORMANCE",
    },
    {
      id: "3",
      label: "HEALTHY LIFESTYLE",
    },
    {
      id: "4",
      label: "CHRONIC DISEASE MANAGEMENT",
    },
    {
      id: "5",
      label: "ADHERENCE TO EXERCISE",
    },
  ];

  return (
    <Container source={images.onboarding3}>
      <ScrollView>
        <HeaderContainer>
          <SubHeading>
            How about <Heading>you tell us</Heading> your goals you want to
            achieve with BioSport.
          </SubHeading>
          <StepImage resizeMode="contain" source={icons.step5} />
        </HeaderContainer>

        <ContentRow>
          <TabsContainer>
            <InactiveTab>
              <IconImage resizeMode="contain" source={icons.basic} />
              <TabText>Basic</TabText>
            </InactiveTab>

            <InactiveTab>
              <IconImage resizeMode="contain" source={icons.bmi} />
              <TabText>BMI</TabText>
            </InactiveTab>

            <InactiveTab>
              <IconImage resizeMode="contain" source={icons.permission} />
              <TabText>Permission</TabText>
            </InactiveTab>

            <InactiveTab>
              <IconImage resizeMode="contain" source={icons.devices} />
              <TabText>Devices</TabText>
            </InactiveTab>

            <ActiveTab>
              <IconImage resizeMode="contain" source={icons.goalsActive} />
              <ActiveTabText>Goals</ActiveTabText>
            </ActiveTab>
          </TabsContainer>

          <InfoContainer>
            <InfoHeading>GOALS</InfoHeading>

            {goladlist.map((data) => {
              const isSelected = selectedItems.includes(data.id);

              return (
                <GoalOption
                  key={data.id}
                  isSelected={isSelected}
                  onPress={() => {
                    setSelectedItems((itemSelected) =>
                      itemSelected.includes(data.id)
                        ? itemSelected.filter((id) => id !== data.id)
                        : [...itemSelected, data.id],
                    );
                  }}
                >
                  <GoalText isSelected={isSelected}>{data.label}</GoalText>
                  <GoalImage source={images.onboarding2} />
                </GoalOption>
              );
            })}

            <BottomButtonContainer>
              <TouchableOpacity>
                <SkipButton>Skip</SkipButton>
              </TouchableOpacity>

              <NextButton
                onPress={() => props.navigation.navigate("ONBOARDING_PLANS")}
              >
                <NextButtonText>Next</NextButtonText>
              </NextButton>
            </BottomButtonContainer>
          </InfoContainer>
        </ContentRow>
      </ScrollView>
    </Container>
  );
}
