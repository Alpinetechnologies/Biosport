import NutritionProgress from '../NutritionProgress/NutritionProgress';
import {
  CardContainer,
  CardTitle,
  ColumnContainer,
  NutritionTypeText,
  ProgressRowContainer,
  RightImageView,
  RowTextButton,
  ViewMoreText,
} from './NutritionAnalysisCard.styled';

type CommonColumnContainerProps = {
  nutritionType: string;
  progressColor: string;
  progressPercentage: number;
};

const CommonColumnContainer = ({
  nutritionType,
  progressColor,
  progressPercentage,
}: CommonColumnContainerProps) => {
  return (
    <ColumnContainer>
      <NutritionTypeText>{nutritionType}</NutritionTypeText>
      <NutritionProgress
        percentage={progressPercentage}
        progressColor={progressColor}
      />
    </ColumnContainer>
  );
};

export function NutritionAnalysisCard() {
  return (
    <CardContainer>
      <CardTitle>Nutrition Analysis</CardTitle>
      <ProgressRowContainer>
        <CommonColumnContainer
          progressColor="#12D18E"
          nutritionType="Calories"
          progressPercentage={92}
        />
        <CommonColumnContainer
          progressColor="#F75555"
          nutritionType={`carbo\nhydrates`}
          progressPercentage={40}
        />
        <CommonColumnContainer
          progressColor="#FF981F"
          nutritionType="fat"
          progressPercentage={50}
        />
        <CommonColumnContainer
          progressColor="#FF981F"
          nutritionType="protein"
          progressPercentage={70}
        />
      </ProgressRowContainer>
      <RowTextButton>
        <ViewMoreText>View More</ViewMoreText>
        <RightImageView
          source={require('../../../assets/images/workout/BlueRightArrow.png')}
        />
      </RowTextButton>
    </CardContainer>
  );
}
