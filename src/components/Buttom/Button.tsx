import React from "react";
import { View } from "react-native";
import { ButtonContainer, ButtonTxt } from "./Button.styled";

export default function Button(props: any) {
  return (
    <View style={{ marginVertical: props.marginVertical }}>
      <ButtonContainer onPress={props.onPress}>
        <ButtonTxt>{props.title}</ButtonTxt>
      </ButtonContainer>
    </View>
  );
}
