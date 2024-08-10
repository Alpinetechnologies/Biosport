import React from 'react';
import {ActivityIndicator} from 'react-native';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONT_FAMILY} from '../constants/font-family';

export default function CustomBtn(props) {
  return (
    <View style={{marginVertical: props.marginVertical}}>
      <TouchableOpacity style={styles.btnShadow} onPress={props.onPress}>
        <View style={styles.btn}>
          {props.isLoading ? (
            <ActivityIndicator size="small" color={COLORS.WHITE} />
          ) : (
            <Text style={styles.btnTxt}>{props.title}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnShadow: {
    backgroundColor: COLORS.WHITE,
    elevation: 2,
    borderRadius: 50,
    marginHorizontal: 2,
  },

  btn: {
    borderRadius: 50,
    backgroundColor: COLORS.BLACK,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTxt: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONT_FAMILY.primaryMedium,
    textAlign: 'center',
    letterSpacing: 0.5,
    // textTransform: 'uppercase',
  },
});
