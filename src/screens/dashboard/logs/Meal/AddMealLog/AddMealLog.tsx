import { BlackButton } from '@/src/components/Buttom/Button';
import InputTextBox from '@/src/components/InputBox/InputTextBox';
import { images } from '@/src/constants';
import colors from '@/src/styles/colors';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StatusBar } from 'react-native';
import { Heading } from '../../Supplement/Supplement.styled';
import {
  BottomContainer,
  TopImage,
} from '../../SupplementIntake/SupplementIntake.styled';
import {
  ButonTxt,
  ButtonContainer,
  CaloryText,
  Container,
  RowContainer,
} from './AddMealLog.styled';

export default function (props: any) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <RowContainer>
          <ButtonContainer>
            <ButonTxt>Today</ButonTxt>
            <AntDesign name={'caretdown'} color={colors.otherColors.black} />
          </ButtonContainer>
          <CaloryText>120 Calories</CaloryText>
        </RowContainer>
        <TopImage source={images.meal} />
        <Heading>Enter Details</Heading>
        <InputTextBox placeholder="Enter Dish Name" />
        <InputTextBox placeholder="Enter Calories" />
      </Container>
      <BottomContainer>
        <BlackButton title="Save" />
      </BottomContainer>
    </>
  );
}
