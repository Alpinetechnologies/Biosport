import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './style';
import {IMAGES} from '../../constants/images';
import {COLORS} from '../../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BlurView} from '@react-native-community/blur';

export default function Screen3(props) {
  const list = [
    'Helps athletes understand their genetic predispositions.',
    'Allows for personalized training and nutrition plans.',
    "By analyzing an athlete's DNA, we can identify genetic. markers associated with performance, endurance, injury risk, and recovery.",
    'This tailored approach enhances athletic performance.',
    'Reduces injury rates.',
    'Promotes overall well-being.',
    'Enables athletes to reach their full potential in a scientifically informed manner.',
  ];

  return (
    <ImageBackground source={IMAGES.BG2} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Hi 👋 John,</Text>
          <Text style={styles.subHeading}>
            Let's setup a few things for{'\n'}a seamless experience.
          </Text>
        </View>

        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={styles.tabsContainer}>
            {/*  <BlurView style={styles.absolute} blurType="dark" blurAmount={1} /> */}
          </View>
          <View style={styles.infoContainer}>
            {/*  <BlurView style={styles.absolute} blurType="dark" blurAmount={1} /> */}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
