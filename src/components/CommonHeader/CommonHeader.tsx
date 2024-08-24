import {
  CircleView,
  HeaderTitle,
  ImageView,
  RowView,
} from './CommonHeader.styled';
type CommonHeaderProps = {
  headerTitle: string;
  headerBgColor?: string;
};

export function CommonHeader({
  headerTitle,
  headerBgColor,
}: CommonHeaderProps) {
  return (
    <RowView backgroundColor={headerBgColor}>
      <CircleView>
        <ImageView
          source={require('../../../assets/images/CommonImages/RightArrow.png')}
        />
      </CircleView>
      <HeaderTitle>{headerTitle}</HeaderTitle>
    </RowView>
  );
}
