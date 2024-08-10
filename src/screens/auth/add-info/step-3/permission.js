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
import SwitchButton from '../../../../components/switch';
import {Switch, GestureHandlerRootView} from 'react-native-gesture-handler';
import AnimatedSwitchBn from '../../../../components/animated-switchBtn';
export default function Permission() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

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
          <Image source={ICONS.STEP_3} style={styles.sp1} />
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

            <View style={styles.activeTab}>
              <SimpleLineIcons
                name="lock"
                size={16}
                color={COLORS.BLACK}
                style={{marginBottom: 10}}
              />
              <Text style={styles.activetabtxt}>Permision</Text>
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
            <Text style={styles.infoheading}>PERMISSION</Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <View style={{flex: 1}}>
                <Text style={styles.gps}>GPS LOCATION</Text>
                <Text style={styles.gpstxt}>
                  To track your location accordingly
                </Text>
              </View>

              <AnimatedSwitchBn isOn={isSwitchOn} onToggle={setIsSwitchOn} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Text style={styles.gps}>CAMERA PERMISSION</Text>
                <Text style={styles.gpstxt}>
                  To track your location accordingly
                </Text>
              </View>

              <AnimatedSwitchBn isOn={isSwitchOn} onToggle={setIsSwitchOn} />
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
