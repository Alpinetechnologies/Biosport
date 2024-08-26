import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { PrimaryButton } from '@/src/components/Buttom/Button';
import { images } from '@/src/constants';
import colors from '@/src/styles/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface WeightType {
  id: number;
  title: string;
}

const AddWeight: React.FC = () => {
  const [value, setValue] = useState<number>(120);
  const [addrType, setAddrType] = useState<number>(1);

  const type: WeightType[] = [
    { id: 1, title: 'LBS' },
    { id: 2, title: 'KG' },
  ];

  return (
    <Container>
      <CenterView>
        <StyledSlider
          minimumValue={110}
          maximumValue={130}
          step={1}
          value={value}
          onValueChange={sliderValue => setValue(sliderValue)}
          minimumTrackTintColor={colors.otherColors.black}
          maximumTrackTintColor={colors.otherColors.black}
          thumbTintColor={colors.otherColors.black}
        />

        <LabelsContainer>
          <LabelText>110</LabelText>
          <LabelText>130</LabelText>
        </LabelsContainer>
        <ValueText>
          {value} <GramText>{'  '}g</GramText>
        </ValueText>
      </CenterView>

      <SelectionRowContainer>
        {type.map((item, j) => (
          <StyledTouchableOpacity
            key={j}
            active={addrType === item.id}
            onPress={() => setAddrType(item.id)}
          >
            <TabText active={addrType === item.id}>{item.title}</TabText>
          </StyledTouchableOpacity>
        ))}
      </SelectionRowContainer>

      <PrimaryButton title="Save" marginVertical={20} />

      <BottomContainer>
        <HeadingText>My Logs</HeadingText>
        <GraphImage source={images.graph} />
        <RowContainer>
          <Box>
            <BoxTitle>Average Growth</BoxTitle>
            <BoxSubtitle>2Kg</BoxSubtitle>
          </Box>
          <Spacer />
          <Box>
            <BoxTitle>Daily Growth</BoxTitle>
            <BoxSubtitle>300 g</BoxSubtitle>
          </Box>
        </RowContainer>
        <MonthText>June</MonthText>
        <WeightContainer>
          <View style={{ flex: 1 }}>
            <WeightText>86.3 Kg</WeightText>
            <DateText>3 June</DateText>
          </View>

          <MaterialCommunityIcons
            name="pencil"
            size={20}
            color={colors.otherColors.black}
          />
        </WeightContainer>
      </BottomContainer>
    </Container>
  );
};

// Styled Components
const Container = styled(ScrollView)`
  flex: 1;
  background-color: ${colors.otherColors.white};
  padding: 15px;
`;

const CenterView = styled.View`
  align-items: center;
  margin-top: 20px;
`;

const StyledSlider = styled(Slider)`
  width: 300px;
  height: 40px;
`;

const LabelsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const LabelText = styled.Text`
  font-size: 14px;
  color: ${colors.otherColors.grey};
  font-family: 'regular';
`;

const ValueText = styled.Text`
  font-size: 48px;
  line-height: 51px;
  font-family: 'bold';
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.otherColors.black};
`;

const GramText = styled.Text`
  font-size: 16px;
  color: ${colors.otherColors.black};
  font-family: 'bold';
`;

const SelectionRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

interface StyledTouchableOpacityProps {
  active: boolean;
}

const StyledTouchableOpacity = styled(
  TouchableOpacity,
)<StyledTouchableOpacityProps>`
  height: 48px;
  width: 87px;
  border-radius: 99px;
  margin: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }) =>
    active ? colors.otherColors.black : colors.otherColors.white};
`;

interface TabTextProps {
  active: boolean;
}

const TabText = styled.Text<TabTextProps>`
  font-size: 16px;
  color: ${({ active }) =>
    active ? colors.otherColors.white : colors.otherColors.black};
  font-family: 'regular';
`;

const BottomContainer = styled.View`
  border-width: 1px;
  border-radius: 12px;
  padding: 15px;
  border-color: ${colors.otherColors.LightWhite};
`;

const HeadingText = styled.Text`
  font-size: 18px;
  font-family: 'medium';
  color: ${colors.otherColors.black};
  margin-bottom: 10px;
`;

const GraphImage = styled.Image`
  width: 100%;
  height: 134px;
  resize-mode: stretch;
`;

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Box = styled.View`
  flex: 1;
  background-color: ${colors.otherColors.white};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 22px;
  margin-top: 5px;
  border-color: ${colors.otherColors.LightWhite};
  border-width: 1px;
`;

const Spacer = styled.View`
  margin: 2.5px;
`;

const BoxTitle = styled.Text`
  font-size: 12px;
  color: ${colors.otherColors.grey};
  font-family: 'regular';
  letter-spacing: 0.2px;
  line-height: 15px;
`;

const BoxSubtitle = styled.Text`
  font-size: 18px;
  color: ${colors.otherColors.black};
  font-family: 'bold';
  letter-spacing: 0.2px;
  line-height: 25px;
`;

const MonthText = styled.Text`
  font-size: 16px;
  color: ${colors.otherColors.black};
  font-family: 'regular';
  line-height: 24px;
  letter-spacing: 0.2px;
  margin-bottom: 5px;
`;

const WeightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${colors.otherColors.grey};
  padding: 7.5px;
  border-radius: 12px;
  padding-horizontal: 15px;
  margin-bottom: 5px;
`;

const WeightText = styled.Text`
  font-size: 16px;
  line-height: 22px;
  color: ${colors.otherColors.black};
  font-family: 'medium';
`;

const DateText = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: ${colors.otherColors.grey};
  font-family: 'medium';
  letter-spacing: 0.2px;
`;

export default AddWeight;
