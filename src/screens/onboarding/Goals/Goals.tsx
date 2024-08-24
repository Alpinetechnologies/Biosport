import { routeNames } from '@/src/navigation/routeNames';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { icons, images } from '../../../constants';
import {
  ActiveTab,
  ActiveTabText,
  BottomButtonContainer,
  Container,
  ContentRow,
  GoalImage,
  GoalOption,
  GoalText,
  HeaderContainer,
  Heading,
  IconImage,
  InactiveTab,
  InfoContainer,
  InfoHeading,
  NextButton,
  NextButtonText,
  SkipButton,
  StepImage,
  SubHeading,
  TabsContainer,
  TabText,
} from './Goals.styled';

export default function (props: any) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const goladlist = [
    {
      id: '1',
      label: 'PHYSICAL FITNESS',
    },
    {
      id: '2',
      label: 'PERFORMANCE',
    },
    {
      id: '3',
      label: 'HEALTHY LIFESTYLE',
    },
    {
      id: '4',
      label: 'CHRONIC DISEASE MANAGEMENT',
    },
    {
      id: '5',
      label: 'ADHERENCE TO EXERCISE',
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

            {goladlist.map(data => {
              const isSelected = selectedItems.includes(data.id);

              return (
                <GoalOption
                  key={data.id}
                  isSelected={isSelected}
                  onPress={() => {
                    setSelectedItems(itemSelected =>
                      itemSelected.includes(data.id)
                        ? itemSelected.filter(id => id !== data.id)
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
                onPress={() => props.navigation.navigate(routeNames.PLANS)}
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
