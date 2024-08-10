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
  topTxt: {
    fontSize: 24,
    lineHeight: 33,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primaryMedium,
  },
  subTxt: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 14,
    color: COLORS.GREY,
  },
  toptxtContainer: {
    marginLeft: 20,
    marginBottom: 20,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 15,
  },
  tabBtn: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    // backgroundColor: COLORS.WHITE,
    flex: 1,
    // marginHorizontal: 2.5,
    margin: 8,
    height: 44,
  },

  selectedTabBtn: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: COLORS.WHITE,
    flex: 1,
    // marginHorizontal: 2.5,
    margin: 8,
    height: 44,
  },

  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 30,
    //borderWidth: 1,
    // borderColor: COLORS.EXTRALIGHT_GREY,
    overflow: 'hidden',
    backgroundColor: COLORS.LIGHT_WHITE,
    height: 60,
    alignItems: 'center',
  },

  tabsTitle: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primary,
    fontSize: 12,
  },
  inactiveTabsTitle: {
    color: '#757575',
    fontFamily: FONT_FAMILY.primary,
    fontSize: 12,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 30,
    justifyContent: 'center',
    marginBottom: 30,
  },

  account: {
    fontSize: 14,
    color: '#424242',
    fontFamily: FONT_FAMILY.primary,
  },
  register: {
    fontSize: 14,
    color: COLORS.LIGHT_RED,
    fontFamily: FONT_FAMILY.primaryBold,
  },
  or: {
    fontSize: 14,
    color: COLORS.BORDER_GREY,
    fontFamily: FONT_FAMILY.primaryMedium,
    letterSpacing: 0.2,
    textAlign: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    height: 74,
    width: 74,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoimg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  socialmediaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
