import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { ComponentTimeline } from '../ComponentTimeline/ComponentTimeline';
import { ComponentUnpaidSubscription } from '../ComponentUnpaidSubscription.tsx/ComponentUnpaidSubscription';

interface TabsContainerProps extends TouchableOpacityProps {
  active: boolean;
}
const TabsContainer = styled.TouchableOpacity<TabsContainerProps>`
  background-color: ${props => (props.active ? '#CEFF00' : '#FFFFFF')};
  border-radius: 30px;
  width: 74px;
  height: 27px;
  align-items: center;
  justify-content: center;
  border: 0.6px solid ${props => (props.active ? 'black' : '#9E9E9E')};
`;

const TabText = styled.Text`
  color: #090909;
  font-size: 12px;
  font-family: regular;
`;

const RowView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 24px;
  gap: 10px;
`;

const ContentContainer = styled.View`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px 24px;
`;

export function ComponentTimelineTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <ComponentTimeline />;
      case 1:
        return <ComponentUnpaidSubscription />;
      case 2:
        return <Text>Content for Week 3</Text>;
      case 3:
        return <Text>Content for Week 4</Text>;
      case 4:
        return <Text>Content for Week 5</Text>;
      case 5:
        return <Text>Content for Week 6</Text>;
      case 6:
        return <Text>Content for Week 7</Text>;
      default:
        return <Text>No Content</Text>;
    }
  };

  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <RowView>
          {[...Array(7)].map((_, index) => (
            <TabsContainer
              key={index}
              active={activeTab === index}
              onPress={() => setActiveTab(index)}
            >
              <TabText>Week {index + 1}</TabText>
            </TabsContainer>
          ))}
        </RowView>
      </ScrollView>
      <ContentContainer>{renderContent()}</ContentContainer>
    </>
  );
}
