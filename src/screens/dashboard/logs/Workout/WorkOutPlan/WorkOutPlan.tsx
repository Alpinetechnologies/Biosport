import React, { useState } from 'react';

import { icons, images } from '@/src/constants';
import colors from '@/src/styles/colors';
import { Feather } from '@expo/vector-icons';
import { FlatList, View } from 'react-native';
import { GraphImage } from '../../Supplement/Supplement.styled';
import {
  AddLog,
  ButtonImage,
  ButtonRowContainer,
  Container,
  FlexContainer,
  HeaderText,
  InnerContainer,
  LogCalories,
  LogDate,
  LogItem,
  LogSection,
  LogTitle,
  RowContainer,
  ScreenContainer,
  ScreenText,
  ScrollableTabBar,
  TabBar,
  TabButton,
  TabText,
} from './WorkOutPlan.styled';

type LogItem = {
  id: string;
  title: string;
  calories: number;
  image: string;
};

type Log = {
  date: string;
  items: LogItem[];
};

const logs: Log[] = [
  {
    date: '2 June',
    items: [
      {
        id: '1',
        title: '20x Split snatches',
        calories: '01:30',
        image:
          'https://5.imimg.com/data5/SELLER/Default/2022/9/IV/UY/CG/75459511/500mg-paracetamol-tablet.jpg',
      },
      {
        id: '2',
        title: '20x Squat thrust split jumps',
        calories: '02:00',
        image:
          'https://5.imimg.com/data5/SELLER/Default/2022/9/IV/UY/CG/75459511/500mg-paracetamol-tablet.jpg',
      },
      {
        id: '3',
        title: '20x Split snatches',
        calories: '02:00',
        image:
          'https://5.imimg.com/data5/SELLER/Default/2022/9/IV/UY/CG/75459511/500mg-paracetamol-tablet.jpg',
      },
    ],
  },
  {
    date: '3 June',
    items: [
      {
        id: '3',
        title: 'Chicken Salad',
        calories: '01:30',
        image:
          'https://5.imimg.com/data5/SELLER/Default/2022/9/IV/UY/CG/75459511/500mg-paracetamol-tablet.jpg',
      },
    ],
  },
];
const WorkoutScreen = () => (
  <ScreenContainer>
    <InnerContainer>
      <GraphImage source={images.graph2} />
      <FlatList
        data={logs}
        keyExtractor={item => item.date}
        renderItem={({ item }) => (
          <LogSection>
            <LogDate>{item.date}</LogDate>
            {item.items.map(logItem => (
              <LogItem key={logItem.id}>
                <FlexContainer>
                  <LogTitle>{logItem.title}</LogTitle>
                  <LogCalories>{logItem.calories}</LogCalories>
                </FlexContainer>

                <Feather
                  name="check"
                  color={colors.otherColors.black}
                  size={20}
                />
              </LogItem>
            ))}
          </LogSection>
        )}
      />
    </InnerContainer>
  </ScreenContainer>
);

const HeartRateScreen = () => (
  <ScreenContainer>
    <ScreenText>HeartRate Screen</ScreenText>
  </ScreenContainer>
);

const StepsScreen = () => (
  <ScreenContainer>
    <ScreenText>Step Screen</ScreenText>
  </ScreenContainer>
);

const MealsScreen = () => (
  <ScreenContainer>
    <ScreenText>Meal Screen</ScreenText>
  </ScreenContainer>
);

// Custom Tab Bar

export default function WorkOutPlan() {
  const [selectedTab, setSelectedTab] = useState('WORKOUT');

  // Function to render the selected screen based on the tab
  const renderScreen = () => {
    switch (selectedTab) {
      case 'WORKOUT':
        return <WorkoutScreen />;
      case 'HEART RATE':
        return <HeartRateScreen />;
      case 'STEPS':
        return <StepsScreen />;
      case 'MEALS':
        return <MealsScreen />;
      default:
        return <WorkoutScreen />;
    }
  };

  return (
    <Container>
      {/* Custom Top Tab Bar */}
      <View>
        <RowContainer>
          <HeaderText>LOGS SCORE</HeaderText>
          <ButtonRowContainer>
            <ButtonImage source={icons.addBtn} />
            <AddLog>Add New Log</AddLog>
          </ButtonRowContainer>
        </RowContainer>
        <ScrollableTabBar
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <TabBar>
            {['WORKOUT', 'HEART RATE', 'STEPS', 'MEALS'].map(tab => (
              <TabButton
                key={tab}
                isSelected={selectedTab === tab}
                onPress={() => setSelectedTab(tab)}
              >
                <TabText isSelected={selectedTab === tab}>{tab}</TabText>
              </TabButton>
            ))}
          </TabBar>
        </ScrollableTabBar>
      </View>

      {renderScreen()}
    </Container>
  );
}
