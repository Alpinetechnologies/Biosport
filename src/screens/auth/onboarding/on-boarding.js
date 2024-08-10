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
import Icon from 'react-native-vector-icons/FontAwesome5';
import {BlurView} from '@react-native-community/blur';

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

  const RenderPagination = ({item}) => {
    return (
      <View style={styles.dotContainer}>
        {slides.map((data, i) => {
          return (
            <View
              key={i}
              style={item.key === data.key ? styles.activeDot : styles.dot}
            />
          );
        })}
      </View>
    );
  };

  const _renderItem = ({item}) => {
    // console.log(item.heading);
    let componentToRender;

    switch (item.key) {
      case 1:
        componentToRender = (
          <ImageBackground source={IMAGES.OB1} style={styles.container}>
            <View style={styles.topContainer}>
              <Image source={IMAGES.LOGO_WHITE} style={styles.image} />
              <Text style={styles.heading}>Sports genomics</Text>
            </View>
            <View style={styles.middleContainer}>
              <View style={styles.centerTag}>
                <Text style={styles.tagTitle}>Personlised exercises</Text>
              </View>
              <View style={styles.tagsContainer}>
                <View style={{...styles.leftTag}}>
                  <Text style={styles.tagTitle}>exercise adherence</Text>
                </View>
                <View style={{...styles.rightTag, marginBottom: 50}}>
                  <Text style={styles.tagTitle}>Injury prevention</Text>
                </View>
              </View>
              <View style={styles.tagsContainer}>
                <View style={{...styles.leftTag, marginBottom: 50}}>
                  <Text style={styles.tagTitle}>genetic body analysis</Text>
                </View>
                <View style={styles.rightTag}>
                  <Text style={styles.tagTitle}>99.9% Precision</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.title}>Personalization</Text>
              <TouchableOpacity
                onPress={() => slider.current.goToSlide(item.key, false)}
                style={{}}>
                <Image source={IMAGES.NEXT1} style={styles.img} />
              </TouchableOpacity>
            </View>
            <RenderPagination item={item} />
          </ImageBackground>
        );
        break;
      case 2:
        componentToRender = (
          <ImageBackground source={IMAGES.OB1} style={styles.container}>
            <View style={styles.topContainer}>
              <Image source={IMAGES.LOGO_WHITE} style={styles.image} />
              <Text style={styles.heading}>
                All combined to give the competitive edge
              </Text>
            </View>
            <View style={styles.middleContainer}>
              <View style={styles.centerIconTag}>
                <Icon name="capsules" size={12} color={COLORS.WHITE} />
                <Text style={styles.tagTitle}> Performance</Text>
              </View>
              <View style={styles.centerIconTag}>
                <Icon name="capsules" size={12} color={COLORS.WHITE} />
                <Text style={styles.tagTitle}> NUTRITION Analysis</Text>
              </View>
              <View style={{...styles.centerIconTag, marginRight: 100}}>
                <Icon name="capsules" size={12} color={COLORS.WHITE} />
                <Text style={styles.tagTitle}> Genomic Makeup</Text>
              </View>
              <View style={{...styles.centerIconTag, marginRight: 70}}>
                <Icon name="capsules" size={12} color={COLORS.WHITE} />
                <Text style={styles.tagTitle}> Medications</Text>
              </View>
              <View style={{...styles.centerIconTag, marginLeft: 100}}>
                <Icon name="capsules" size={12} color={COLORS.WHITE} />
                <Text style={styles.tagTitle}> Your Lifestyle</Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.title}>BioFit Score</Text>
              <TouchableOpacity
                onPress={() => slider.current.goToSlide(item.key, false)}>
                <Image source={IMAGES.NEXT2} style={styles.img} />
              </TouchableOpacity>
            </View>
            <RenderPagination item={item} />
          </ImageBackground>
        );
        break;
      case 3:
        componentToRender = (
          <ImageBackground source={IMAGES.OB2} style={styles.container}>
            <View style={styles.topContainer}>
              <Image source={IMAGES.LOGO_WHITE} style={styles.image} />
              <Text style={styles.heading}>
                Loaded with all the fitness features for your favourite sport
              </Text>
            </View>
            <View style={styles.middleContainer}>
              <View style={styles.spaceAround}>
                <View style={{transform: [{rotate: '-20deg'}]}}>
                  <View style={styles.circle}>
                    <Icon name="dumbbell" size={24} color={COLORS.WHITE} />
                  </View>
                  <Text style={styles.tagTitle}>recovery rate</Text>
                </View>
                <View style={{transform: [{rotate: '30deg'}]}}>
                  <View style={styles.circle}>
                    <Icon name="dumbbell" size={24} color={COLORS.WHITE} />
                  </View>
                  <Text style={styles.tagTitle}>
                    Performance{'\n'}Monitoring
                  </Text>
                </View>
              </View>
              <View style={{transform: [{rotate: '15deg'}]}}>
                <View style={styles.circle}>
                  <Icon name="dumbbell" size={24} color={COLORS.WHITE} />
                </View>
                <Text style={styles.tagTitle}>Coach{'\n'}Consulting</Text>
              </View>
              <View style={styles.spaceAround}>
                <View style={{transform: [{rotate: '-40deg'}]}}>
                  <View style={styles.circle}>
                    <Icon name="dumbbell" size={24} color={COLORS.WHITE} />
                  </View>
                  <Text style={styles.tagTitle}>doctors{'\n'}Consultation</Text>
                </View>
                <View style={{transform: [{rotate: '20deg'}], marginLeft: 20}}>
                  <View style={styles.circle}>
                    <Icon name="dumbbell" size={24} color={COLORS.WHITE} />
                  </View>
                  <Text style={styles.tagTitle}>
                    Health Devices{'\n'}Integrations
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.title}>Improve & WIN 100% </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Image source={IMAGES.NEXT3} style={styles.img} />
              </TouchableOpacity>
            </View>
            <RenderPagination item={item} />
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
