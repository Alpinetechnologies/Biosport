import React from "react";
import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

interface RoundOptionProps extends TouchableOpacityProps {
  selected?: boolean;
}

const OptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const OptionCircle = styled.TouchableOpacity<RoundOptionProps>`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: ${(props) => (props.selected ? "#CEFF00" : "#ecf0f1")};
  align-items: center;
  justify-content: center;
`;

const OptionText = styled.Text`
  color: "#000000";
  font-weight: bold;
`;

export const OptionSelector = ({
  options,
  selectedSize,
  setSelectedSize,
}: {
  options: number[];
  selectedSize: number;
  setSelectedSize: (option: number) => void;
}) => {
  return (
    <OptionContainer>
      {options.map((option, index) => (
        <OptionCircle
          key={index}
          selected={selectedSize === option}
          onPress={() => setSelectedSize(option)}
        >
          <OptionText>{option}</OptionText>
        </OptionCircle>
      ))}
    </OptionContainer>
  );
};
