import { images } from '@/src/constants';
import colors from '@/src/styles/colors';
import { AntDesign } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { Heading } from '../../Supplement/Supplement.styled';
import { TopImage } from '../../SupplementIntake/SupplementIntake.styled';
import {
  ButonTxt,
  ButtonContainer,
  CaloryText,
  Container,
  RowContainer,
} from '../AddMealLog/AddMealLog.styled';
import { DetailContainer, DishName } from './EditMealLog.styledd';

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
            <ButonTxt>2 June 2024</ButonTxt>
            <AntDesign name={'caretdown'} color={colors.otherColors.black} />
          </ButtonContainer>
          <CaloryText>120 Calories</CaloryText>
        </RowContainer>
        <TopImage source={images.meal} />
        <Heading>EDIT Details</Heading>
        <DetailContainer>
          <DishName>Chicken Sandwich</DishName>
          <TouchableOpacity>
            <MaterialIcons
              name="edit"
              color={colors.otherColors.grey}
              size={20}
            />
          </TouchableOpacity>
        </DetailContainer>
        <DetailContainer>
          <DishName>120 Calories</DishName>
          <TouchableOpacity>
            <MaterialIcons
              name="edit"
              color={colors.otherColors.grey}
              size={20}
            />
          </TouchableOpacity>
        </DetailContainer>
      </Container>
    </>
  );
}
