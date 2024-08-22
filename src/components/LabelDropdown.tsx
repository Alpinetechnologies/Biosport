import React, { useEffect, useState } from "react";
import { Modal, FlatList, Dimensions } from "react-native";
import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";

import { COLORS } from "../constants/colors";

const { width } = Dimensions.get("window");

interface DropdownItem {
  label: string;
  value: string | number;
}

interface LabelDropdownProps<T> {
  items: T[];
  title: string;
  defaultValue?: T;
  onChangeItem: (item: T) => void;
  search?: boolean;
  placeholder?: string;
}

export default function LabelDropdown<T extends DropdownItem>({
  items,
  title,
  defaultValue,
  onChangeItem,
  search = false,
}: LabelDropdownProps<T>) {
  const [modalVisible, setModalVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<T[]>(items);

  const handleSearch = (text: string) => {
    setQuery(text);
    const filteredData = items.filter((item) =>
      item.label.toLowerCase().startsWith(text.toLowerCase()),
    );
    setResults(filteredData);
  };

  const selectedValue = defaultValue
    ? items.find((item) => item.value === defaultValue.value)
    : undefined;

  useEffect(() => {
    setResults(items);
  }, [items]);

  return (
    <>
      <Container>
        <PressableInput
          disabled={items.length <= 0}
          onPress={() => setModalVisible(true)}
        >
          <SelectedValue>
            {selectedValue ? selectedValue.label : `Select ${title}`}
          </SelectedValue>
          <Feather size={18} color={COLORS.WHITE} name="chevron-down" />
        </PressableInput>
      </Container>
      <Modal
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setModalVisible(false)}
        visible={modalVisible}
      >
        <ModalContainer
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <ModalInnerContainer>
            {search ? (
              <HeaderBg>
                <SearchInput
                  placeholder="Search.."
                  placeholderTextColor={COLORS.BLACK}
                  value={query}
                  onChangeText={handleSearch}
                />
              </HeaderBg>
            ) : (
              <HeaderBg>
                <ModalHeading>Select {title}</ModalHeading>
              </HeaderBg>
            )}
            {results.length <= 0 && (
              <NotFoundText>No Results Found...</NotFoundText>
            )}
            <FlatList
              data={results}
              renderItem={({ item }) => (
                <ItemContainer
                  selected={item.value === selectedValue?.value}
                  onPress={() => {
                    onChangeItem(item);
                    setModalVisible(false);
                    setQuery("");
                  }}
                >
                  <ItemText>{item.label}</ItemText>
                </ItemContainer>
              )}
              keyExtractor={(_, i) => i.toString()}
            />
          </ModalInnerContainer>
        </ModalContainer>
      </Modal>
    </>
  );
}

const Container = styled.View`
  justify-content: center;
  margin: 10px 5px;
`;

const PressableInput = styled.TouchableOpacity<{ disabled: boolean }>`
  padding: 0 14px;
  height: 49px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.DARK_GREY};
  border-radius: 10px;
`;

const SelectedValue = styled.Text`
  flex: 1;

  font-size: 12px;
  color: ${COLORS.WHITE};
`;

const ModalContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.TRANSPARENT_BLACK};
`;

const ModalInnerContainer = styled.View`
  background-color: ${COLORS.DARK_GREY};
  border-radius: 10px;
  width: ${width - 60}px;
  max-height: ${width - 30}px;
  overflow: hidden;
`;
const HeaderBg = styled.View`
  padding: 5px;
  background-color: ${COLORS.WHITE};
`;

const ModalHeading = styled.Text`
  font-size: 14px;
  color: ${COLORS.BLACK};
`;

const SearchInput = styled.TextInput`
  font-size: 14px;
  color: ${COLORS.BLACK};
  background-color: transparent;
  padding: 15px;
  height: 50px;
`;

const NotFoundText = styled.Text`
  padding: 15px;
  text-align: center;
  color: ${COLORS.WHITE};
  font-size: 12px;
`;

const ItemContainer = styled.TouchableOpacity<{ selected: boolean }>`
  padding: 15px;
  border-bottom-width: 0.5px;
  border-color: ${COLORS.GREY};
  background-color: ${(props) =>
    props.selected ? COLORS.BG_LIGHT : COLORS.DARK_GREY};
`;

const ItemText = styled.Text`
  font-size: 12px;
  color: ${COLORS.WHITE};
`;
