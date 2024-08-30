import React from 'react';
import colors from '../../styles/colors';
import { InputBox, InputContainer } from './InpuTextBox.styles';

export default function InputTextBox(props: any) {
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
    </InputContainer>
  );
}
