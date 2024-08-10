import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONT_FAMILY} from '../../../constants/font-family';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  topimg: {
    height: height,
  },
  backBtn: {
    height: 33,
    width: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 33,
    backgroundColor: COLORS.WHITE,
    marginLeft: 20,
    marginTop: 60,
    marginBottom: 20,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 15,
  },
  heading: {
    fontSize: 32,
    lineHeight: 38,
    fontFamily: FONT_FAMILY.primaryBold,
    textAlign: 'center',
    color: COLORS.BLACK,
    marginTop: 15,
  },
  subtxt: {
    fontSize: 14,
    color: COLORS.BORDER_GREY,
    fontFamily: FONT_FAMILY.primaryMedium,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  mail: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
    textAlign: 'center',
    letterSpacing: 0.2,
    marginBottom: 15,
  },
  notrecieve: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.DARK_GREY,
    textAlign: 'center',
  },
  resendCode: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.PRIMARY,
    textAlign: 'center',
  },
  timer: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.primarySemiBold,
    color: '#616161',
    textAlign: 'right',
    marginRight: 15,
    letterSpacing: 0.2,
  },

  otpInput: {
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    // alignItems: 'center',
    width: width - 48,
  },

  underlineStyleBase: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryBold,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    height: 80,
    fontSize: 24,
    width: 80,
  },

  underlineStyleHighLighted: {
    borderColor: COLORS.BORDER_GREY,
  },
});
