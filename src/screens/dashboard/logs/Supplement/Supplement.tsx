import React from 'react';
import { FlatList, View } from 'react-native';

import { images } from '@/src/constants';
import colors from '@/src/styles/colors';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
  BottomContainer,
  Container,
  GraphImage,
  Heading,
  LogCalories,
  LogDate,
  LogImage,
  LogItem,
  LogSection,
  LogTitle,
  Note,
  SelectImgContainer,
  UploadBtn,
  UploadBtnText,
} from './Supplement.styled';

// Define Types
type LogItem = {
  id: string;
  title: string;
  calories: number;
  image: string;
};

type Log = {
  date: string;
  items: LogItem[];
};

const logs: Log[] = [
  {
    date: '1 June',
    items: [
      {
        id: '1',
        title: 'Paracetamol',
        calories: 'Fever',
        image:
          'https://5.imimg.com/data5/SELLER/Default/2022/9/IV/UY/CG/75459511/500mg-paracetamol-tablet.jpg',
      },
      {
        id: '2',
        title: 'Crocin',
        calories: 'Endurance',
        image:
          'https://5.imimg.com/data5/SELLER/Default/2022/9/IV/UY/CG/75459511/500mg-paracetamol-tablet.jpg',
      },
    ],
  },
  {
    date: '2 June',
    items: [
      {
        id: '3',
        title: 'Chicken Salad',
        calories: '200',
        image:
          'https://5.imimg.com/data5/SELLER/Default/2022/9/IV/UY/CG/75459511/500mg-paracetamol-tablet.jpg',
      },
    ],
  },
];

const Supplements: React.FC = () => {
  return (
    <Container>
      <SelectImgContainer>
        <MaterialCommunityIcons
          name="camera-plus-outline"
          size={25}
          color={colors.otherColors.white}
        />
        <Note>Snap And Track Your supplements</Note>
      </SelectImgContainer>

      <UploadBtn>
        <FontAwesome
          name="photo"
          size={20}
          color={colors.otherColors.grey}
          style={{ width: 30 }}
        />
        <UploadBtnText>Upload From Gallery</UploadBtnText>
        <Feather
          name="chevron-right"
          size={20}
          color={colors.otherColors.black}
        />
      </UploadBtn>

      <BottomContainer>
        <Heading>My Logs</Heading>
        <GraphImage source={images.graph} />
        <FlatList
          data={logs}
          keyExtractor={item => item.date}
          renderItem={({ item }) => (
            <LogSection>
              <LogDate>{item.date}</LogDate>
              {item.items.map(logItem => (
                <LogItem key={logItem.id}>
                  <LogImage source={{ uri: logItem.image }} />
                  <View>
                    <LogTitle>{logItem.title}</LogTitle>
                    <LogCalories>{logItem.calories}</LogCalories>
                  </View>
                </LogItem>
              ))}
            </LogSection>
          )}
        />
      </BottomContainer>
    </Container>
  );
};

export default Supplements;
