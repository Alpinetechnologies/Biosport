import React, { useState } from 'react';
import {
  DatePickerContainer,
  Header,
  DateSelector,
  MonthSelector,
  DateButton,
  DateText,
  WeekText,
} from './DatePicker.styled';
import { FlatList } from 'react-native';

import { Picker } from '@react-native-picker/picker';

const dates = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('August');

  return (
    <DatePickerContainer>
      <Header>
        <DateSelector>Select a Date</DateSelector>
        <MonthSelector>
          <Picker
            selectedValue={selectedMonth}
            onValueChange={itemValue => setSelectedMonth(itemValue)}
            mode="dropdown"
          >
            {months.map(month => (
              <Picker.Item key={month} label={month} value={month} />
            ))}
          </Picker>
        </MonthSelector>
      </Header>
      <FlatList
        data={dates}
        keyExtractor={item => item.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <DateButton
            selected={item === selectedDate}
            onPress={() => setSelectedDate(item)}
          >
            <DateText selected={item === selectedDate}>{item}</DateText>
            <WeekText selected={item === selectedDate}>Wed</WeekText>
          </DateButton>
        )}
      />
    </DatePickerContainer>
  );
};

export default DatePicker;
