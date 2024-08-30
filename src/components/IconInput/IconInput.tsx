import { Feather } from '@expo/vector-icons';
import React from 'react';
import colors from '../../styles/colors';
import { IconContainer, InputBox, InputContainer } from './IconInput.styled';

export default function IconInput(props: any) {
  return (
    <InputContainer>
      <InputBox
        placeholder={props.placeholder}
        placeholderTextColor={colors.otherColors.lightGrey}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize="none"
        defaultValue={props.defaultValue}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        editable={props.editable}
        maxLength={props.maxLength}
      />

      <IconContainer>
        <Feather
          name={props.icon}
          size={18}
          color={colors.otherColors.lightGrey}
        />
      </IconContainer>
    </InputContainer>
  );
}
