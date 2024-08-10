import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {IMAGES} from '../../../constants/images';
import styles from './style';
import {COLORS} from '../../../constants/colors';
import {ICONS} from '../../../constants/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const slides = [
  {
    key: 1,
  },
  {
    key: 2,
  },
  {
    key: 3,
  },
];

export default function OnBoarding(props) {
  const slider = useRef();

  const _renderItem = ({item}) => {
    // console.log(item.heading);
    let componentToRender;

    switch (item.key) {
      case 1:
        componentToRender = (
          <ImageBackground source={IMAGES.OB1} style={styles.container}>
            <View style={styles.topContainer}>
              <TouchableOpacity
                style={styles.skipbtn}
                onPress={() => props.navigation.navigate('OtpEmailLogin')}>
                <Text style={styles.skip}>Skip</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.heading}>Best</Text>
              <Text style={{...styles.heading, color: COLORS.BLACK}}>
                Price
              </Text>
              <Text style={styles.title}>
                We promise to provide you with the best price possible.
              </Text>
              <TouchableOpacity
                onPress={() => slider.current.goToSlide(item.key, false)}>
                <Image source={ICONS.PROGRESS} style={styles.img} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        );
        break;
      case 2:
        componentToRender = (
          <ImageBackground source={IMAGES.PATTERN} style={styles.container}>
            <View style={styles.topContainer}>
              <TouchableOpacity
                style={styles.skipbtn}
                onPress={() => props.navigation.navigate('OtpEmailLogin')}>
                <Text style={styles.skip}>Skip</Text>
              </TouchableOpacity>
              <View style={{marginVertical: 30}} />
              <Text style={styles.heading2}>Efficient</Text>
              <Text style={{...styles.heading2, color: COLORS.BLACK}}>
                Service
              </Text>
              <Text style={styles.title2}>
                Providing the most efficient service with utmost precision.
              </Text>
              <Image source={IMAGES.ONBOARDING2} style={styles.image2} />
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                onPress={() => slider.current.goToSlide(item.key, false)}>
                <Image source={ICONS.PROGRESS2} style={styles.img} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        );
        break;
      case 3:
        componentToRender = (
          <ImageBackground source={IMAGES.PATTERN} style={styles.container}>
            <View style={styles.topContainer}>
              <Image source={IMAGES.ONBOARDING3} style={styles.image3} />
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.heading3}>You Break</Text>
              <Text style={{...styles.heading3, color: COLORS.BLACK}}>
                We Phix
              </Text>
              <Text style={styles.title3}>
                With our team of experts, we can{'\n'}handle any issues.
              </Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => props.navigation.navigate('OtpEmailLogin')}>
                <Text style={styles.btnTxt}>Let's Start </Text>
                <Ionicons
                  name="arrow-forward-circle"
                  size={14}
                  color={COLORS.WHITE}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        );
        break;
      default:
        componentToRender = <Text>Default Case</Text>;
        break;
    }

    return componentToRender;
  };

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
        activeDotStyle={{backgroundColor: COLORS.WHITE}}
        dotStyle={{backgroundColor: COLORS.WHITE}}
        ref={ref => (slider.current = ref)}
        renderPagination={() => null}
      />
    </>
  );
}
