import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import {IMAGES} from '../../../../constants/images';
import {ICONS} from '../../../../constants/icons';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../../constants/colors';
import {BlurView} from '@react-native-community/blur';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
export default function Measurement() {
  return (
    <ImageBackground source={IMAGES.BG2} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.heading}>
              {' '}
              Thank you,{' '}
              <Text style={styles.subHeading}>
                we would like to{'\n'}know about your height{'\n'}and weight for
                better{'\n'}personalization.
              </Text>
            </Text>
          </View>
          <Image source={ICONS.STEP_2} style={styles.sp1} />
        </View>

        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={styles.tabsContainer}>
            {/*  <BlurView style={styles.absolute} blurType="dark" blurAmount={1} /> */}

            <View style={styles.inactiveTab}>
              <Feather
                name="info"
                size={16}
                color={COLORS.WHITE}
                style={{marginBottom: 10}}
              />
              <Text style={styles.tabtxt}>Basic</Text>
            </View>

            <View style={styles.activeTab}>
              <SimpleLineIcons
                name="fire"
                size={16}
                color={COLORS.BLACK}
                style={{marginBottom: 10}}
              />
              <Text style={styles.activetabtxt}>BMI</Text>
            </View>

            <View style={styles.inactiveTab}>
              <SimpleLineIcons
                name="lock"
                size={16}
                color={COLORS.WHITE}
                style={{marginBottom: 10}}
              />
              <Text style={styles.tabtxt}>Permision</Text>
            </View>

            <View style={styles.inactiveTab}>
              <Icon
                name="watch-outline"
                size={16}
                color={COLORS.WHITE}
                style={{marginBottom: 10}}
              />
              <Text style={styles.tabtxt}>Devices</Text>
            </View>

            <View style={styles.inactiveTab}>
              <Icon
                name="watch-outline"
                size={16}
                color={COLORS.WHITE}
                style={{marginBottom: 10}}
              />
              <Text style={styles.tabtxt}>Goals</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            {/*  <BlurView style={styles.absolute} blurType="dark" blurAmount={1} /> */}
            <Text style={styles.infoheading}>Body mass index</Text>

            <View style={styles.botomBtnContainer}>
              <TouchableOpacity>
                <Text style={styles.skipBtn}>Skip</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.nxtBtn}>
                <Text style={styles.nextBtntxt}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
