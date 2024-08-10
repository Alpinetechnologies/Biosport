import {StyleSheet, Dimensions, Platform} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONT_FAMILY} from '../../../constants/font-family';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },

  image: {
    height: 50,
    width: 100,
    resizeMode: 'contain',
    marginTop: 30,
    alignSelf: 'center',
    marginBottom: 10,
  },
  image2: {
    height: 431,
    width: 289,
    resizeMode: 'contain',
    // marginBottom: 20,
    // backgroundColor: 'pink',
  },
  image3: {
    height: 370,
    width: 270,
    resizeMode: 'contain',
    // marginBottom: 20,
    //  backgroundColor: 'pink',
    alignSelf: 'flex-end',
  },

  topContainer: {
    padding: 20,
  },

  middleContainer: {
    flex: 1,
    //  backgroundColor: COLORS.SECONDARY,
    justifyContent: 'space-evenly',
    // paddingVertical: 30,
  },
  bottomContainer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    //alignItems: 'center',
    paddingVertical: 20,
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  dotContainer: {
    flexDirection: 'row',

    marginBottom: 20,

    marginHorizontal: 30,
  },

  tagsContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  spaceAround: {flexDirection: 'row', justifyContent: 'space-around'},

  centerIconTag: {
    backgroundColor: COLORS.TRANSPARENT_WHITE,
    paddingVertical: 7.5,
    borderWidth: 0.75,
    borderColor: COLORS.WHITE,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 40,
    flexDirection: 'row',
  },

  circle: {
    backgroundColor: COLORS.TRANSPARENT_WHITE,

    borderWidth: 0.75,
    borderColor: COLORS.WHITE,
    alignItems: 'center',
    alignSelf: 'center',

    flexDirection: 'row',
    height: 60,
    width: 60,
    borderRadius: 60,
    justifyContent: 'center',
    marginBottom: 10,
  },

  centerTag: {
    backgroundColor: COLORS.TRANSPARENT_WHITE,
    padding: 15,
    borderWidth: 0.75,
    borderColor: COLORS.WHITE,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 40,
  },

  leftTag: {
    backgroundColor: COLORS.TRANSPARENT_WHITE,
    padding: 15,
    borderWidth: 0.75,
    borderColor: COLORS.WHITE,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    //flex: 1,
    borderLeftWidth: 0,
    paddingHorizontal: 25,
  },

  rightTag: {
    backgroundColor: COLORS.TRANSPARENT_WHITE,
    padding: 15,
    borderWidth: 0.75,
    borderColor: COLORS.WHITE,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    // flex: 1,
    borderRightWidth: 0,
    paddingHorizontal: 25,
  },
  tagTitle: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.WHITE,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  activeDot: {
    width: 30,
    height: 4,
    backgroundColor: COLORS.WHITE,
    borderRadius: 2,
    marginHorizontal: 2.5,
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: COLORS.LIGHT_GREY,
    borderRadius: 2,
    marginHorizontal: 2.5,
  },

  title3: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
    textAlign: 'right',
    marginTop: 10,
  },

  heading: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.primarySemiBold,
    color: COLORS.PRIMARY,
    textTransform: 'uppercase',
    textAlign: 'center',
    //marginTop: 25,
    // textAlign: 'center',
    // backgroundColor: 'orange',
  },
  title: {
    fontSize: 32,
    fontFamily: FONT_FAMILY.primaryBold,
    color: COLORS.PRIMARY,
    // marginBottom: 30,
    flex: 1,
  },
  heading2: {
    fontSize: 58,
    fontFamily: FONT_FAMILY.primaryBold,
    color: COLORS.RED,
    //marginTop: 25,
    textAlign: 'center',
    // backgroundColor: 'orange',
    lineHeight: 65,
  },
  heading3: {
    fontSize: 58,
    fontFamily: FONT_FAMILY.primaryBold,
    color: COLORS.RED,
    //marginTop: 25,
    textAlign: 'right',
    // backgroundColor: 'orange',
    lineHeight: 65,
  },

  bottomSkipContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  skip: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.WHITE,
    textDecorationLine: 'underline',
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 6,
    marginVertical: 20,
    flexDirection: 'row',
  },
  img: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginTop: 5,
  },
  btnTxt: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.WHITE,
    marginTop: 2.5,
    marginHorizontal: 2.5,
  },
});
