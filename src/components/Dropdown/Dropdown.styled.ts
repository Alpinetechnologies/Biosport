import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const Container = styled.View`
  justify-content: center;
  margin: 10px 0px;
`;

export const PressableInput = styled.TouchableOpacity<{ disabled: boolean }>`
  padding: 0 10px;
  height: 49px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #212121;
  border-radius: 10px;
  border-width: 0.5px;
  border-color: ${colors.otherColors.lightGrey};
`;

export const SelectedValue = styled.Text`
  flex: 1;

  font-size: 12px;
  color: ${colors.otherColors.grey};
`;

export const ModalContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.otherColors.transparentBlack};
`;

export const ModalInnerContainer = styled.View`
  background-color: grey;
  border-radius: 10px;
  width: ${width - 60}px;
  max-height: ${width - 30}px;
  overflow: hidden;
`;
export const HeaderBg = styled.View`
  padding: 5px;
  background-color: ${colors.parrotPrimary['primary-950']};
`;

export const ModalHeading = styled.Text`
  font-size: 14px;
  color: black;
  padding: 10px;
  font-family: 'semibold';
`;

export const SearchInput = styled.TextInput`
  font-size: 14px;
  color: black;
  background-color: transparent;
  padding: 15px;
  height: 50px;
`;

export const NotFoundText = styled.Text`
  padding: 15px;
  text-align: center;
  color: white;
  font-size: 12px;
`;

export const ItemContainer = styled.TouchableOpacity<{ selected: boolean }>`
  padding: 15px;
  border-bottom-width: 0.5px;
  border-color: black;
  background-color: ${props =>
    props.selected ? 'black' : colors.otherColors.darkGrey};
`;

export const ItemText = styled.Text`
  font-size: 12px;
  color: white;
  font-family: 'medium';
`;
