import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONT_FAMILY} from '../constants/font-family';

export default function LabelInputBox(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.placeholder}</Text>
      <TextInput
        placeholder={'Enter ' + props.placeholder}
        placeholderTextColor={'#999999'}
        style={styles.input}
        secureTextEntry={props.secureTextEntry}
        defaultValue={props.defaultValue}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        editable={props.editable}
        maxLength={props.maxLength}
        autoCapitalize={props.autoCapitalize}
        value={props.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: 10,
  },

  input: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 12,
    paddingLeft: 15,

    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: COLORS.EXTRALIGHT_GREY,
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
    height: 49,
  },
  label: {
    fontSize: 12,
    color: COLORS.BLACK,
    marginBottom: 5,
    fontFamily: FONT_FAMILY.primaryMedium,
    marginHorizontal: 3,
  },
});
