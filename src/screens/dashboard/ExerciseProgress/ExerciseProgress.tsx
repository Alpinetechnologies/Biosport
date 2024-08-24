import { ScrollView, StatusBar } from 'react-native';
import { CommonHeader } from '../../../components/CommonHeader/CommonHeader';
import { ComponentAchievementList } from '../../../components/ComponentAchivementList/ComponentAchivementList';
import { ComponentProgressTracking } from '../../../components/ComponentProgressTracking/ComponentProgressTracking';
import {
  BoldText,
  BtnContainer,
  BtnText,
  CategoryNum,
  CategoryType,
  CenterContainer,
  MainContainer,
  RowCenteredContainer,
  SubText,
  TitleText,
  VLine,
} from './ExerciseProgress.styled';

type MiddleSectionContentProps = {
  categoryTitle: string;
  categoryValue: string;
  categoryValueColor: string;
};
const MiddleSectionContent = ({
  categoryTitle,
  categoryValue,
  categoryValueColor,
}: MiddleSectionContentProps) => {
  return (
    <CenterContainer>
      <CategoryType>{categoryTitle}</CategoryType>
      <CategoryNum color={categoryValueColor}>{categoryValue}</CategoryNum>
    </CenterContainer>
  );
};
export function ExerciseProgress() {
  return (
    <MainContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <CommonHeader headerTitle="Back to exercise" headerBgColor="#000000" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleText>NICE JOB ROBERT!</TitleText>
        <SubText>
          You Have Achieved <BoldText>40%</BoldText> of{'\n'} your today's goal.
        </SubText>
        <ComponentProgressTracking progress={90} />
        <RowCenteredContainer>
          <MiddleSectionContent
            categoryTitle={'Step count'}
            categoryValue={'+20, 000'}
            categoryValueColor="#ffffff"
          />
          <VLine />
          <MiddleSectionContent
            categoryTitle={'Weight Change'}
            categoryValue={'+10 kg'}
            categoryValueColor="#ffffff"
          />
          <VLine />
          <MiddleSectionContent
            categoryTitle={'Workouts'}
            categoryValue={'+20 min'}
            categoryValueColor="#757575"
          />
        </RowCenteredContainer>
        <ComponentAchievementList
          achievementTitle="2x Split snatches"
          achievementTitleSubText="01:30"
        />
        <ComponentAchievementList
          achievementTitle="20x Squat thrust split jumps"
          achievementTitleSubText="02:00"
        />
        <ComponentAchievementList
          achievementTitle="2x Split snatches"
          achievementTitleSubText="01:30"
        />
        <BtnContainer onPress={() => {}}>
          <BtnText>Resume Workout</BtnText>
        </BtnContainer>
      </ScrollView>
    </MainContainer>
  );
}
