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

export default function Screen1(props) {
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
    <ImageBackground source={IMAGES.BG1} style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backContainer}>
            <Ionicons
              name="arrow-back-outline"
              color={COLORS.WHITE}
              size={16}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            <Text style={{color: COLORS.WHITE}}>Book</Text> Genome Sequencing
          </Text>
        </View>

        <View style={styles.infoContainer}>
          {/* <BlurView style={styles.absolute} blurType="dark" blurAmount={1} /> */}
          <View>
            <View style={styles.list}>
              <Ionicons
                name="chevron-forward-outline"
                color={COLORS.PRIMARY}
                size={16}
              />
              <Text style={styles.heading}>
                Why do you need genome sequencing?
              </Text>
            </View>

            {list.map((data, i) => (
              <View style={styles.list} key={i}>
                <View style={styles.bullet} />
                <Text style={styles.value}>{data}</Text>
              </View>
            ))}
          </View>
          <View style={{marginTop: 15}}>
            <View style={styles.list}>
              <Ionicons
                name="chevron-forward-outline"
                color={COLORS.PRIMARY}
                size={16}
              />
              <Text style={styles.heading}>How it works?</Text>
            </View>

            <View style={styles.list}>
              <TouchableOpacity style={styles.smallBtn}>
                <Text style={styles.smallBtnTxt}>Easy Sample Collect</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.smallBorderBtn}>
                <Text style={styles.smallBorderBtnTxt}>Order a kit</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.list}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableOpacity style={styles.circle}>
                  <Ionicons
                    name="bag-check-outline"
                    color={COLORS.WHITE}
                    size={26}
                  />
                </TouchableOpacity>
                <Text style={styles.label}>
                  LAB ASSISTANT{'\n'}AT YOUR PALACE
                </Text>
              </View>

              <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableOpacity style={styles.circle}>
                  <Ionicons
                    name="bag-check-outline"
                    color={COLORS.WHITE}
                    size={26}
                  />
                </TouchableOpacity>
                <Text style={styles.label}>COLLECT SAMPLE</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableOpacity style={styles.circle}>
                  <Ionicons
                    name="bag-check-outline"
                    color={COLORS.WHITE}
                    size={26}
                  />
                </TouchableOpacity>
                <Text style={styles.label}>RECIEVE REPORT</Text>
              </View>
            </View>

            <View style={styles.list}>
              <Text style={styles.value}>
                You will be charged an additional amount of 20$ for easy collect
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate('Screen2')}>
          <Text style={styles.btnTxt}>Easy Sample Collect</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.borderBtn}
          onPress={() => props.navigation.navigate('Screen2')}>
          <Text style={styles.borderBtnTxt}>Order a kit</Text>
        </TouchableOpacity>

        <View style={styles.flexRow}>
          <Text style={styles.or}>Or </Text>
          <Text style={styles.nearby}>Visit a Lab Nearby</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
