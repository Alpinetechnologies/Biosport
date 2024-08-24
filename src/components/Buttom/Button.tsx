import React from 'react';
import { View } from 'react-native';
import {
  ButtonContainer,
  ButtonTxt,
  PrimaryButtonContainer,
  PrimaryButtonTxt,
} from './Button.styled';

function BlackButton(props: any) {
  return (
    <View style={{ marginVertical: props.marginVertical }}>
      <ButtonContainer onPress={props.onPress}>
        <ButtonTxt>{props.title}</ButtonTxt>
      </ButtonContainer>
    </View>
  );
}

function PrimaryButton(props: any) {
  return (
    <View style={{ marginVertical: props.marginVertical }}>
      <PrimaryButtonContainer onPress={props.onPress}>
        <PrimaryButtonTxt>{props.title}</PrimaryButtonTxt>
      </PrimaryButtonContainer>
    </View>
  );
}

export { BlackButton, PrimaryButton };
