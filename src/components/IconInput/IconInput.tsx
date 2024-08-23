import React from "react";
import { Feather } from "@expo/vector-icons";
import { IconContainer, InputBox, InputContainer } from "./IconInput.styled";
import colors from "../../styles/colors";

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
