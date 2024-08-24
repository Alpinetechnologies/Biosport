import React from 'react';
import {
  OptionContainer,
  OptionCircle,
  OptionText,
} from './OptionSelector.styled';

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
