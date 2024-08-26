import colors from '@/src/styles/colors';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

// Define TypeScript interfaces for items
interface Item {
  id: string;
  label: string;
  icon: string;
}

const DailyLogs: React.FC = () => {
  const initialAddedItems: Item[] = [
    {
      id: '1',
      label: 'Weight',
      icon: 'https://cdn-icons-png.flaticon.com/512/184/184931.png',
    },
    {
      id: '2',
      label: 'Workout',
      icon: 'https://cdn-icons-png.flaticon.com/512/184/184931.png',
    },
    {
      id: '3',
      label: 'Steps',
      icon: 'https://cdn-icons-png.flaticon.com/512/184/184931.png',
    },
    {
      id: '4',
      label: 'Meals',
      icon: 'https://cdn-icons-png.flaticon.com/512/184/184931.png',
    },
  ];

  const initialMoreItems: Item[] = [
    {
      id: '1',
      label: 'Heart Rate',
      icon: 'https://cdn-icons-png.flaticon.com/512/184/184931.png',
    },
    {
      id: '2',
      label: 'Supplements',
      icon: 'https://cdn-icons-png.flaticon.com/512/184/184931.png',
    },
    {
      id: '3',
      label: 'Alcohol intake',
      icon: 'https://cdn-icons-png.flaticon.com/512/184/184931.png',
    },
  ];

  const [addedItems, setAddedItems] = useState<Item[]>(initialAddedItems);
  const [moreItems, setMoreItems] = useState<Item[]>(initialMoreItems);

  const handleAddItem = (item: Item) => {
    setMoreItems(moreItems.filter(i => i.id !== item.id));
    setAddedItems([...addedItems, item]);
  };

  const handleRemoveItem = (item: Item) => {
    setAddedItems(addedItems.filter(i => i.id !== item.id));
    setMoreItems([...moreItems, item]);
  };

  const renderItem: ListRenderItem<Item> = ({ item }, isAddedList) => (
    <ItemContainer>
      <ItemContent>
        <IconContainer>
          <ItemIcon source={{ uri: item.icon }} />
        </IconContainer>
        <ItemText>{item.label}</ItemText>
      </ItemContent>
      <ItemButton
        onPress={() =>
          isAddedList ? handleRemoveItem(item) : handleAddItem(item)
        }
      >
        <Feather
          name={isAddedList ? 'minus' : 'plus'}
          color={colors.otherColors.white}
          size={14}
        />
      </ItemButton>
    </ItemContainer>
  );

  return (
    <Container>
      <Heading>Added</Heading>
      <FlatList
        data={addedItems}
        renderItem={item => renderItem(item, true)}
        keyExtractor={item => item.id}
      />
      <Heading>Add more</Heading>
      <FlatList
        data={moreItems}
        renderItem={item => renderItem(item, false)}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

// Styled Components
const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${colors.otherColors.white};
`;

const Heading = styled.Text`
  font-size: 16px;
  font-family: 'medium';
  line-height: 22px;
  letter-spacing: 0.2px;
  color: ${colors.otherColors.black};
  margin-vertical: 10px;
  padding-left: 10px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-vertical: 5px;
  border-radius: 8px;
`;

const ItemContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  border-width: 1.75px;
  border-color: ${colors.otherColors.extraLightGrey};
`;

const ItemIcon = styled.Image`
  width: 15px;
  height: 15px;
  resize-mode: contain;
`;

const ItemText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-family: 'medium';
  color: ${colors.otherColors.black};
  letter-spacing: 0.2px;
`;

const ItemButton = styled(TouchableOpacity)`
  width: 22px;
  height: 22px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.otherColors.black};
`;

export default DailyLogs;
