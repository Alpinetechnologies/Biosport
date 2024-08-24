import styled from 'styled-components/native';

export const CardContainer = styled.View`
  border: 1px solid #bdbdbd;
  padding: 16px 24px;
  margin: 10px 20px;
  border-radius: 11px;
`;
export const CardTitle = styled.Text`
  font-size: 14px;
  color: #616161;
  margin-bottom: 5px;
  font-family: regular;
`;

export const ColumnContainer = styled.View`
  align-items: center;
  width: 62px;
  height: 92px;
`;
export const NutritionTypeText = styled.Text`
  font-size: 12px;
  color: #212121;
  text-transform: uppercase;
  margin: 10px 0;
  text-align: center;
  height: 30px;
  font-family: medium;
`;

export const ProgressRowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewMoreText = styled.Text`
  color: #6949ff;
  font-size: 12px;
  font-family: regular;
`;

export const RowTextButton = styled.TouchableOpacity`
  flex-direction: row;
  margin: 30px 0 0 0;
  align-items: center;
  justify-content: center;
`;
export const RightImageView = styled.Image`
  height: 10px;
  width: 4px;
  margin-left: 2px;
`;
