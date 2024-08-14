import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacityProps, TextProps } from "react-native";

interface RoundOptionProps extends TouchableOpacityProps {
  active?: boolean;
}

interface ActiveTextProps extends TextProps {
  active?: boolean;
}

const TabContainer = styled.View`
  flex-direction: row;
  margin-right: 5px;
  gap: 5px;
`;

const TabButton = styled.TouchableOpacity<RoundOptionProps>`
  flex: 1;
  padding: 10px 15px;
  background-color: ${(props) => (props.active ? "#ECF5FF" : "#F7F7F7")};
  border-radius: 20px;
  align-items: center;
`;

const TabText = styled.Text<ActiveTextProps>`
  font-size: 12px;
  color: ${(props) => (props.active ? "#1A96F0" : "#757575")};
`;

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: string[];
  activeTab: number;
  setActiveTab: (tab: number) => void;
}) => {
  return (
    <TabContainer>
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          active={index === activeTab}
          onPress={() => setActiveTab(index)}
        >
          <TabText active={index === activeTab}>{tab}</TabText>
        </TabButton>
      ))}
    </TabContainer>
  );
};

export default Tabs;
