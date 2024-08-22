import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { COLORS } from "../../constants/colors";
import { IMAGES } from "../../constants/images";
import { ICONS } from "../../constants/icons";

interface Goal {
  id: string;
  label: string;
  image: string;
}

const Goals: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const goladlist: Goal[] = [
    {
      id: "1",
      label: "PHYSICAL FITNESS",
      image:
        "https://images.healthshots.com/healthshots/en/uploads/2022/12/12171842/10-minute-yoga.jpg",
    },
    {
      id: "2",
      label: "PERFORMANCE",
      image:
        "https://images.healthshots.com/healthshots/en/uploads/2022/12/12171842/10-minute-yoga.jpg",
    },
    {
      id: "3",
      label: "HEALTHY LIFESTYLE",
      image:
        "https://images.healthshots.com/healthshots/en/uploads/2022/12/12171842/10-minute-yoga.jpg",
    },
    {
      id: "4",
      label: "CHRONIC DISEASE MANAGEMENT",
      image:
        "https://images.healthshots.com/healthshots/en/uploads/2022/12/12171842/10-minute-yoga.jpg",
    },
    {
      id: "5",
      label: "ADHERENCE TO EXERCISE",
      image:
        "https://images.healthshots.com/healthshots/en/uploads/2022/12/12171842/10-minute-yoga.jpg",
    },
  ];

  return (
    <Container source={IMAGES.BG2}>
      <ContentContainer>
        <HeaderContainer>
          <SubHeading>
            How about{" "}
            <Heading>
              you tell us{" "}
              <SubHeading>
                your{"\n"}goals you want to achieve{"\n"}with BioSport.
              </SubHeading>
            </Heading>
          </SubHeading>

          <StepImage source={ICONS.STEP_5} />
        </HeaderContainer>

        <FlexRow>
          <TabsContainer>
            <InactiveTab>
              <Feather
                name="info"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>Basic</TabText>
            </InactiveTab>

            <InactiveTab>
              <SimpleLineIcons
                name="fire"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>BMI</TabText>
            </InactiveTab>

            <InactiveTab>
              <SimpleLineIcons
                name="lock"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>Permission</TabText>
            </InactiveTab>

            <InactiveTab>
              <Icon
                name="watch-outline"
                size={16}
                color={COLORS.WHITE}
                style={{ marginBottom: 10 }}
              />
              <TabText>Devices</TabText>
            </InactiveTab>

            <ActiveTab>
              <Icon
                name="watch-outline"
                size={16}
                color={COLORS.BLACK}
                style={{ marginBottom: 10 }}
              />
              <ActiveTabText>Goals</ActiveTabText>
            </ActiveTab>
          </TabsContainer>

          <InfoContainer>
            <InfoHeading>Goals</InfoHeading>

            <FlexWrap>
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
                    <GoalImage source={{ uri: data.image }} />
                  </GoalOption>
                );
              })}
            </FlexWrap>

            <BottomButtonContainer>
              <TouchableOpacity>
                <SkipButtonText>Skip</SkipButtonText>
              </TouchableOpacity>

              <NextButton>
                <NextButtonText>Next</NextButtonText>
              </NextButton>
            </BottomButtonContainer>
          </InfoContainer>
        </FlexRow>
      </ContentContainer>
    </Container>
  );
};

export default Goals;

const { height, width } = Dimensions.get("window");

// Styled Components

const Container = styled(ImageBackground)`
  flex: 1;
  background-color: ${COLORS.TRANSPARENT_BLACK};
`;

const ContentContainer = styled(View)`
  flex: 1;
`;

const HeaderContainer = styled(View)`
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 25 : 50}px;
  padding-vertical: 25px;
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Heading = styled(Text)`
  font-weight: 400;
  color: ${COLORS.PRIMARY};
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 5px;
`;

const SubHeading = styled(Text)`
  font-weight: 400;
  color: ${COLORS.WHITE};
  font-size: 16px;
`;

const StepImage = styled(Image)`
  height: 165px;
  width: 165px;
  resize-mode: contain;
`;

const TabsContainer = styled(View)`
  width: 80px;
  border-width: 0.5px;
  border-color: ${COLORS.GREY};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${COLORS.TRANSPARENT_BLACK};
  overflow: hidden;
  margin-bottom: 40px;
  flex: 1;
  border-bottom-right-radius: 5px;
`;

const InactiveTab = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ActiveTab = styled(InactiveTab)`
  background-color: ${COLORS.PRIMARY};
  height: 61px;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const TabText = styled(Text)`
  font-size: 10px;
  color: ${COLORS.WHITE};
  font-weight: 500;
  line-height: 12.6px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const ActiveTabText = styled(TabText)`
  color: ${COLORS.BLACK};
`;

const InfoContainer = styled(View)`
  padding: 12.5px;
  border-width: 0.5px;
  border-color: ${COLORS.GREY};
  margin-horizontal: 20px;
  border-radius: 12px;
  background-color: ${COLORS.TRANSPARENT_BLACK};
  overflow: hidden;
  margin-bottom: 40px;
  flex: 3.25;
`;

const InfoHeading = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: ${COLORS.WHITE};
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const FlexRow = styled(View)`
  flex-direction: row;
  flex: 1;
`;

const FlexWrap = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const GoalOption = styled(TouchableOpacity)<{ isSelected: boolean }>`
  flex-direction: row;
  align-items: center;
  width: ${width / 1.75}px;
  height: 60px;
  background-color: ${(props) =>
    props.isSelected ? "#ccff00" : COLORS.TRANSPARENT_WHITE};
  margin: 5px;
  border-radius: 8px;
  padding: 12px;
`;

const GoalText = styled(Text)<{ isSelected: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.isSelected ? "#000" : COLORS.WHITE)};
  font-weight: 500;
  line-height: 15.5px;
  letter-spacing: 0.2px;
  flex: 1;
`;

const GoalImage = styled(Image)`
  height: 50px;
  width: 50px;
  resize-mode: cover;
  border-radius: 9px;
`;

const BottomButtonContainer = styled(View)`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 15px;
  bottom: 30px;
`;

const SkipButtonText = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.WHITE};
  letter-spacing: 0.2px;
  text-decoration-line: underline;
  text-decoration-color: ${COLORS.PRIMARY};
  margin-horizontal: 20px;
`;

const NextButton = styled(TouchableOpacity)`
  height: 48px;
  width: 48px;
  border-width: 1px;
  border-color: ${COLORS.PRIMARY};
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.TRANSPARENT_BLACK};
  border-radius: 50px;
`;

const NextButtonText = styled(Text)`
  font-size: 10px;
  font-weight: 500;
  color: ${COLORS.WHITE};
  letter-spacing: 0.2px;
`;
