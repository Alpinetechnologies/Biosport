import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {IMAGES} from '../../../../constants/images';
import {ICONS} from '../../../../constants/icons';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../../constants/colors';
import {BlurView} from '@react-native-community/blur';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function Devices() {
  return (
    <ImageBackground source={IMAGES.BG2} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.heading}>
              Amazing
              <Text style={styles.subHeading}>
                your BMI is 20.{'\n'}Give us permissions to give{'\n'}you more
                precision.
              </Text>
            </Text>
          </View>
          <Image source={ICONS.STEP_4} style={styles.sp1} />
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

            <View style={styles.inactiveTab}>
              <SimpleLineIcons
                name="fire"
                size={16}
                color={COLORS.WHITE}
                style={{marginBottom: 10}}
              />
              <Text style={styles.tabtxt}>BMI</Text>
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

            <View style={styles.activeTab}>
              <Icon
                name="watch-outline"
                size={16}
                color={COLORS.BLACK}
                style={{marginBottom: 10}}
              />
              <Text style={styles.activetabtxt}>Devices</Text>
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
            <Text style={styles.infoheading}>Devices</Text>

            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={styles.flexRow}>
                <Image source={ICONS.FITBIT} style={{height: 50, width: 50}} />
                <View>
                  <Text style={styles.label}>FITBIT</Text>
                  <Text style={styles.connect}>
                    connect <Feather name="chevron-right" />
                  </Text>
                </View>
              </View>

              <View style={styles.flexRow}>
                <Image
                  source={{
                    uri: 'https://gstatic.com/images/branding/product/1x/gfit_512dp.png',
                  }}
                  style={{height: 50, width: 50}}
                />
                <View>
                  <Text style={styles.label}>FITBIT</Text>
                  <Text style={styles.connect}>
                    connect <Feather name="chevron-right" />
                  </Text>
                </View>
              </View>

              <View style={styles.flexRow}>
                <Image
                  source={{
                    uri: 'https://storage.googleapis.com/studio-cms-assets/projects/xPORlN6Yar/s-428x273_webp_25f6726b-47de-4f8f-a6d2-64f8a051f692.png',
                  }}
                  style={{height: 50, width: 50, resizeMode: 'contain'}}
                />
                <View>
                  <Text style={styles.label}>FITBIT</Text>
                  <Text style={styles.connect}>
                    connect <Feather name="chevron-right" />
                  </Text>
                </View>
              </View>

              <View style={styles.flexRow}>
                <Image
                  source={{
                    uri: 'https://play-lh.googleusercontent.com/iujdewqN1BjX47P9sSvFyMEIuonP5fWRZxN1SJUGMJxvXTD7RjSJuqIa0gFwXkt65ZQ=w600-h300-pc0xffffff-pd',
                  }}
                  style={{height: 50, width: 50, resizeMode: 'contain'}}
                />

                <View>
                  <Text style={styles.label}>FITBIT</Text>
                  <Text style={styles.connect}>
                    connect <Feather name="chevron-right" />
                  </Text>
                </View>
              </View>

              <View style={styles.flexRow}>
                <Image
                  source={{
                    uri: 'https://cdn3d.iconscout.com/3d/free/thumb/free-apple-health-application-logo-2950083-2447877.png',
                  }}
                  style={{height: 50, width: 50}}
                />

                <View>
                  <Text style={styles.label}>FITBIT</Text>
                  <Text style={styles.connect}>
                    connect <Feather name="chevron-right" />
                  </Text>
                </View>
              </View>

              <View style={styles.flexRow}>
                <Image
                  source={{
                    uri: 'https://pngimg.com/d/garmin_PNG6.png',
                  }}
                  style={{height: 50, width: 50, resizeMode: 'contain'}}
                />

                <View>
                  <Text style={styles.label}>FITBIT</Text>
                  <Text style={styles.connect}>
                    connect <Feather name="chevron-right" />
                  </Text>
                </View>
              </View>
            </View>

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
