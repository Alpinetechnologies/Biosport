import React, { useEffect, useState } from 'react';
import { Modal, FlatList } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import {
  Container,
  HeaderBg,
  ItemContainer,
  ItemText,
  ModalContainer,
  ModalHeading,
  ModalInnerContainer,
  NotFoundText,
  PressableInput,
  SearchInput,
  SelectedValue,
} from './Dropdown.styled';
import colors from '../../styles/colors';

interface DropdownItem {
  label: string;
  value: string | number;
}

interface DropdownProps<T> {
  items: T[];
  title: string;
  defaultValue?: T;
  onChangeItem: (item: T) => void;
  search?: boolean;
  placeholder?: string;
}

export default function Dropdown<T extends DropdownItem>({
  items,
  title,
  defaultValue,
  onChangeItem,
  search = false,
}: DropdownProps<T>) {
  const [modalVisible, setModalVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>(items);

  const handleSearch = (text: string) => {
    setQuery(text);
    const filteredData = items.filter(item =>
      item.label.toLowerCase().startsWith(text.toLowerCase()),
    );
    setResults(filteredData);
  };

  const selectedValue = defaultValue
    ? items.find(item => item.value === defaultValue.value)
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
            {selectedValue ? selectedValue.label : ` ${title}`}
          </SelectedValue>
          <Feather
            size={18}
            color={colors.otherColors.grey}
            name="chevron-down"
          />
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
                  placeholderTextColor={'black'}
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
                    setQuery('');
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
