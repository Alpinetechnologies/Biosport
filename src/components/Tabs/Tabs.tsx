import React from "react";
import { TabContainer, TabButton, TabText } from "./Tabs.styled";

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
