import { BlackButton } from '@/src/components/Buttom/Button';
import Dropdown from '@/src/components/Dropdown/Dropdown';
import { images } from '@/src/constants';
import colors from '@/src/styles/colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import {
  BottomContainer,
  ButonTxt,
  ButtonContainer,
  Heading,
  MainContainer,
  TopImage,
} from './SupplementIntake.styled';

export default function SupplementIntake() {
  const handleGenderChange = () => {};
  return (
    <>
      <MainContainer>
        <ButtonContainer>
          <ButonTxt>Today</ButonTxt>
          <AntDesign name={'caretdown'} color={colors.otherColors.black} />
        </ButtonContainer>
        <TopImage source={images.medicine} />
        <Heading>Enter Details</Heading>
        <Dropdown
          items={[]}
          title="Select Supplement "
          onChangeItem={handleGenderChange}
        />
        <Dropdown
          items={[]}
          title="Reason to Take"
          onChangeItem={handleGenderChange}
        />
      </MainContainer>
      <BottomContainer>
        <BlackButton title="Save" />
      </BottomContainer>
    </>
  );
}
