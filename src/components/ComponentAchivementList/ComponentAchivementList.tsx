import { View } from 'react-native';
import {
  CardContainer,
  CardSubTitle,
  CardTitle,
  TickMark,
} from './ComponentAchievementList.styled';

type ComponentAchievementListProps = {
  achievementTitle: string;
  achievementTitleSubText: string;
};

export function ComponentAchievementList({
  achievementTitle,
  achievementTitleSubText,
}: ComponentAchievementListProps) {
  return (
    <CardContainer>
      <View>
        <CardTitle>{achievementTitle}</CardTitle>
        <CardSubTitle>{achievementTitleSubText}</CardSubTitle>
      </View>
      <TickMark
        source={require('../../../assets/images/CommonImages/WhiteTick.png')}
      />
    </CardContainer>
  );
}
