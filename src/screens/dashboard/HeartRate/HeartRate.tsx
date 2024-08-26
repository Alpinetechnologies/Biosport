import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { BlackButton } from '@/src/components/Buttom/Button';
import { images } from '@/src/constants';
import colors from '@/src/styles/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Define TypeScript types if necessary, e.g., for props or state
const HeartRate: React.FC = () => {
  const [value, setValue] = useState<number>(120);

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

        <Labels>
          <LabelText>110</LabelText>
          <LabelText>130</LabelText>
        </Labels>
        <ValueText>
          {value} <GramText>{'  '}g</GramText>
        </ValueText>
      </CenterView>

      <Row>
        <MessageText>Normal</MessageText>
      </Row>
      <BlackButton title="Save" marginVertical={20} />

      <BottomContainer>
        <HeadingText>My Logs</HeadingText>
        <GraphImage source={images.graph} />

        <MonthText>June</MonthText>
        {['', ''].map((data, i) => (
          <WeightContainer key={i}>
            <View style={{ flex: 1 }}>
              <WeightText>87 mmHg</WeightText>
              <DateText>3 June</DateText>
            </View>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="pencil"
                size={20}
                color={colors.otherColors.black}
              />
            </TouchableOpacity>
          </WeightContainer>
        ))}
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

const Labels = styled.View`
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

const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const MessageText = styled.Text`
  font-size: 14px;
  background-color: ${colors.otherColors.LightPink};
  padding-vertical: 15px;
  padding-horizontal: 60px;
  border-radius: 60px;
  color: ${colors.otherColors.yellow};
  font-family: 'medium';
`;

const BottomContainer = styled.View`
  border-width: 1px;
  border-radius: 12px;
  padding: 15px;
  border-color: #e0e0e0;
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

  margin-bottom: 10px;
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
  border-color: #e0e0e0;
  padding: 7.5px;
  border-radius: 12px;
  padding-horizontal: 15px;
  margin-bottom: 8px;
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
  color: ${colors.otherColors.lightGrey};
  font-family: 'medium';
  letter-spacing: 0.2px;
`;

export default HeartRate;
