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
    height: 384,
    width: 279,
    resizeMode: 'contain',
    marginBottom: 30,
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

  bottomContainer: {
    padding: 20,
    //backgroundColor: 'pink',
    // flex: 1,
  },

  topContainer: {
    flex: 1,
    //  padding: 20,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    //alignItems: 'center',
    // backgroundColor: 'pink',
    //  marginBottom: 15,
  },

  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 30,
  },

  activeDot: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 2,
    marginHorizontal: 5,
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: COLORS.LIGHT_GREY,
    borderRadius: 2,
    marginHorizontal: 5,
  },

  title: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
    marginBottom: 30,
  },
  title2: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
    textAlign: 'center',
    marginBottom: 30,
    marginHorizontal: 20,
  },
  title3: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
    textAlign: 'right',
    marginBottom: 30,
  },

  heading: {
    fontSize: 58,
    fontFamily: FONT_FAMILY.primaryBold,
    color: COLORS.RED,
    //marginTop: 25,
    // textAlign: 'center',
    // backgroundColor: 'orange',
    lineHeight: 65,
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
  skipbtn: {
    position: 'absolute',
    right: 20,
    top: Platform.OS === 'android' ? 15 : 45,
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
    //  resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  btnTxt: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.WHITE,
    marginTop: 2.5,
    marginHorizontal: 2.5,
  },
});
