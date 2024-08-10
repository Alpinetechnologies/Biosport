import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../../../constants/font-family';
import {COLORS} from '../../../../constants/colors';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.TRANSPARENT_BLACK,
  },
  headerContainer: {
    paddingTop: StatusBar.currentHeight + 25,
    paddingVertical: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  heading: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
  },
  subHeading: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.WHITE,
    fontSize: 16,
  },
  sp1: {
    height: 170,
    width: 170,
  },
  activeTab: {
    backgroundColor: COLORS.PRIMARY,
    height: 61,
    width: 80,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 20,
  },
  inactiveTab: {
    // backgroundColor: COLORS.PRIMARY,
    // height: 61,
    // width: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activetabtxt: {
    fontSize: 10,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primary,
    lineHeight: 12.6,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },

  tabtxt: {
    fontSize: 10,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primary,
    lineHeight: 12.6,
    letterSpacing: 0.2,
  },

  absolute: {
    width: 80,
  },
  tabsContainer: {
    //padding: 12.5,
    // paddingHorizontal: 10,
    width: 80,
    borderWidth: 0.5,
    borderColor: COLORS.GREY,
    // marginHorizontal: 20,
    borderRadius: 12,
    backgroundColor: COLORS.TRANSPARENT_BLACK,
    overflow: 'hidden',
    marginBottom: 40,
    flex: 1,
    borderBottomRightRadius: 5,
    borderLeftWidth: 0,
  },
  infoContainer: {
    padding: 12.5,
    borderWidth: 0.5,
    borderColor: COLORS.GREY,
    marginHorizontal: 20,
    borderRadius: 12,
    backgroundColor: COLORS.TRANSPARENT_BLACK,
    overflow: 'hidden',
    marginBottom: 40,
    flex: 3.25,
  },
  infoheading: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.2,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primaryMedium,
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  skipBtn: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.WHITE,
    letterSpacing: 0.2,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.PRIMARY,
    marginHorizontal: 20,
  },
  nxtBtn: {
    height: 48,
    width: 48,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.TRANSPARENT_BLACK,
    borderRadius: 50,
  },
  nextBtntxt: {
    fontSize: 10,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.WHITE,
    letterSpacing: 0.2,
  },
  botomBtnContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
    bottom: 30,
  },
  gps: {
    fontSize: 10,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primarySemiBold,
    textTransform: 'uppercase',
    lineHeight: 12.6,
    letterSpacing: 0.2,
  },
  gpstxt: {
    fontSize: 8,
    color: COLORS.BORDER_GREY,
    fontFamily: FONT_FAMILY.primarySemiBold,
    textTransform: 'capitalize',
    lineHeight: 10.8,
    letterSpacing: 0.2,
  },
});
