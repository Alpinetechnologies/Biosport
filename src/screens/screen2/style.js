import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT_FAMILY} from '../../constants/font-family';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.TRANSPARENT_BLACK,
    // padding: 10,
  },

  play: {
    height: 45,
    width: 45,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },

  topContainer: {
    backgroundColor: COLORS.TRANSPARENT_BLACK,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
  },
  headerContainer: {
    paddingTop: StatusBar.currentHeight + 25,
    paddingVertical: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    //backgroundColor: 'red',
    alignItems: 'center',
  },
  infoContainer: {
    padding: 15,
    backgroundColor: COLORS.WHITE,
    overflow: 'hidden',
    //  marginBottom: 40,
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  list: {
    flexDirection: 'row',
    //backgroundColor: 'red',
    marginVertical: 2.5,
  },

  heading: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
    fontSize: 18,
    // marginBottom: 5,
    // marginBottom: 10,
    // marginLeft: 2.5,
  },
  subHeading: {
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.BLACK,
    fontSize: 12,
    marginVertical: 10,
  },

  cardTitle: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.GREY,
    fontSize: 13,
    marginBottom: 10,
  },

  borderCard: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 2.5,
    borderColor: COLORS.LIGHT_GREY,
    padding: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
  },

  value: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
    fontSize: 12,
    marginLeft: 5,
  },
  listCard: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    borderWidth: 0.75,
    marginHorizontal: 2.5,
    borderColor: COLORS.LIGHT_GREY,
    padding: 10,
    // marginVertical: 2.5,
    paddingHorizontal: 10,
    marginVertical: 2.5,
  },
  backContainer: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.WHITE,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    left: 15,
  },

  circle: {
    height: 50,
    width: 50,
    backgroundColor: 'orange',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontFamily: FONT_FAMILY.primarySemiBold,
    color: COLORS.BLACK,
    fontSize: 10,

    textAlign: 'center',
    flex: 1,
  },
  cardContainer: {
    paddingLeft: 25,
    borderLeftWidth: 1,
    paddingBottom: 10,
  },
  percentage: {
    fontFamily: FONT_FAMILY.primarySemiBold,
    color: COLORS.WHITE,
    fontSize: 11,
  },

  viewMoreContainer: {
    flexDirection: 'row',
    //backgroundColor: 'red',
    marginVertical: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  viewMore: {
    fontFamily: FONT_FAMILY.primarySemiBold,
    color: 'purple',
    fontSize: 11,
    //flex: 1,
    textAlign: 'center',
  },
  smallBorderBtn: {
    flex: 1,
    // backgroundColor: COLORS.PRIMARY,
    borderRadius: 30,
    // paddingHorizontal: 10,
    paddingVertical: 3.5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREY,
    alignItems: 'center',
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  smallBorderBtnTxt: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.GREY,
    fontSize: 10,
  },

  btn: {
    backgroundColor: COLORS.BLACK,
    borderRadius: 30,
    // paddingHorizontal: 10,
    paddingVertical: 12,
    marginVertical: 10,
    //borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    alignItems: 'center',
    marginHorizontal: 5,
    justifyContent: 'center',
    //marginHorizontal: 20,
    marginBottom: 30,
  },
  btnTxt: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.WHITE,
    fontSize: 12,
  },
  activeBtn: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 30,
    // paddingHorizontal: 10,
    paddingVertical: 3.5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.BL,
    alignItems: 'center',
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  activeBtnTxt: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
    fontSize: 10,
  },
  nearby: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
    fontSize: 11,
    textAlign: 'center',
    // flex: 1,
    marginTop: 10,
    textDecorationLine: 'underline',
  },

  day: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
    fontSize: 12,
    marginTop: -2.5,
    marginBottom: 10,
    //  textAlign: 'center',
    // flex: 1,
    // marginTop: 10,
    //textDecorationLine: 'underline',
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
  },

  dot: {
    height: 10,
    width: 10,
    backgroundColor: 'black',
    position: 'absolute',
    left: -5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // top:2
  },
  innerDot: {
    height: 5,
    width: 5,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 10,
  },

  image: {
    height: 40,
    width: 40,
    borderRadius: 7.5,
    marginRight: 10,
  },

  listValue: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
    fontSize: 12,
  },
  time: {
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.GREY,
    fontSize: 11,
  },
});
