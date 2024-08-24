import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  BlackButton,
  ButtonText,
  CenteredView,
  CircularContainer,
  HeaderContainer,
  Image,
  ImageBackground,
  ListLogo,
  ListText,
  PlayButton,
  RowContainer,
  SubText,
  TitleText,
} from './ExerciseAndNutrition.styled';
import { NutritionAnalysisCard } from '../../../components/NutritionAnalysisCard/NutritionAnalysisCard';
import { ComponentTimelineTabs } from '../../../components/ComponentTimelineTabs/ComponentTimelineTabs';
// import { NutritionAnalysisAddOnCard } from "../../../components/NutritionAnalysisAddOnCard/NutritionAnalysisAddOnCard";

type RowItemProps = {
  logoSource: ImageSourcePropType;
  text: string;
};

const RowItem = ({ logoSource, text }: RowItemProps) => {
  return (
    <RowContainer>
      <ListLogo source={logoSource} />
      <ListText>{text}</ListText>
    </RowContainer>
  );
};

export function ExerciseAndNutrition() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView>
        <ImageBackground
          source={require('../../../../assets/images/workout/girlLiftingCard.png')}
        >
          <HeaderContainer>
            <CircularContainer>
              <Image
                source={require('../../../../assets/images/workout/chevronLeft.png')}
              />
            </CircularContainer>
          </HeaderContainer>
          <CenteredView>
            <TouchableOpacity>
              <PlayButton
                source={require('../../../../assets/images/workout/playButton.png')}
              />
            </TouchableOpacity>
          </CenteredView>
        </ImageBackground>
        <TitleText>Personalised Exercises and Nutrition</TitleText>
        <SubText>
          Based on your genetics and your goals we have recommendations to
          follow.
        </SubText>
        <RowItem
          text="12 exclusive trainings"
          logoSource={require('../../../../assets/images/workout/dumbleLogo.png')}
        />
        <RowItem
          text="20 min, Intermediate"
          logoSource={require('../../../../assets/images/workout/clockLogo.png')}
        />
        <RowItem
          text="Consultation with trainer available."
          logoSource={require('../../../../assets/images/workout/messgeLogo.png')}
        />
        <NutritionAnalysisCard />
        {/* <NutritionAnalysisAddOnCard /> */}
        <BlackButton>
          <ButtonText>Let's go</ButtonText>
        </BlackButton>
        <ComponentTimelineTabs />
      </ScrollView>
    </SafeAreaView>
  );
}
