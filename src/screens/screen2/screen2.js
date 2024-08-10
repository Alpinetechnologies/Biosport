import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import styles from './style';
import {IMAGES} from '../../constants/images';
import {COLORS} from '../../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Screen2(props) {
  const list = [
    'Helps athletes understand their genetic predispositions.',
    'Allows for personalized training and nutrition plans.',
    '',
  ];

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={IMAGES.BG1} style={styles.topContainer}>
        <TouchableOpacity style={styles.backContainer}>
          <Ionicons name="arrow-back-outline" color={COLORS.BLACK} size={16} />
        </TouchableOpacity>

        <View style={styles.play}>
          <Ionicons name="play" color={COLORS.BLACK} size={20} />
        </View>
      </ImageBackground>

      <View style={styles.infoContainer}>
        <Text style={styles.heading}>
          Personalised Exercises and{'\n'}Nutrition
        </Text>
        <Text style={styles.subHeading}>
          Based on your genetics and your goals we have{'\n'}recommendations to
          follow.
        </Text>

        <View>
          <View style={styles.list}>
            <Ionicons name="alarm" color={COLORS.BLACK} size={16} />
            <Text style={styles.value}>12 exclusive trainings</Text>
          </View>
          <View style={styles.list}>
            <Ionicons name="alarm" color={COLORS.BLACK} size={16} />
            <Text style={styles.value}>20 min, Intermediate</Text>
          </View>
          <View style={styles.list}>
            <Ionicons name="alarm" color={COLORS.BLACK} size={16} />
            <Text style={styles.value}>
              Consultation with trainer available.
            </Text>
          </View>
        </View>
        <View style={styles.borderCard}>
          <Text style={styles.cardTitle}>Nutrition Analysis</Text>

          <View style={{...styles.list, justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.label}>CALORIES</Text>
              <TouchableOpacity
                style={{...styles.circle, backgroundColor: '#15d48f'}}>
                <Text style={styles.percentage}>92%</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.label}>CARBO{'\n'}HYDRATES</Text>
              <TouchableOpacity
                style={{...styles.circle, backgroundColor: '#f15757'}}>
                <Text style={styles.percentage}>92%</Text>
              </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={styles.label}>FAT</Text>
              <TouchableOpacity style={{...styles.circle}}>
                <Text style={styles.percentage}>92%</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.label}>PROTEIN</Text>
              <TouchableOpacity style={styles.circle}>
                <Text style={styles.percentage}>70%</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.viewMoreContainer}>
            <Text style={styles.viewMore}>View More</Text>
            <Ionicons color={'purple'} name="chevron-forward" size={12} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate('Screen3')}>
          <Text style={styles.btnTxt}>Join Challenge</Text>
        </TouchableOpacity>
        <View style={styles.list}>
          <TouchableOpacity style={styles.smallBorderBtn}>
            <Text style={styles.smallBorderBtnTxt}>Week 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activeBtn}>
            <Text style={styles.activeBtnTxt}>Week 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallBorderBtn}>
            <Text style={styles.smallBorderBtnTxt}>Week 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallBorderBtn}>
            <Text style={styles.smallBorderBtnTxt}>Week 4</Text>
          </TouchableOpacity>
        </View>

        <View style={{margin: 10}}>
          {['', ''].map((data, i) => (
            <View key={i} style={styles.cardContainer}>
              <View style={styles.dot}>
                <View style={styles.innerDot}></View>
              </View>
              <Text style={styles.day}>Day {i + 1}</Text>

              <View style={styles.listCard}>
                <View style={styles.flexRow}>
                  <Image source={IMAGES.BG1} style={styles.image} />
                  <View style={{flex: 1}}>
                    <Text style={styles.listValue}>20x Split snatches</Text>
                    <Text style={styles.time}>01:00</Text>
                  </View>
                  <Ionicons name="play" color={COLORS.BLACK} size={16} />
                </View>
              </View>
              <View style={styles.listCard}>
                <View style={styles.flexRow}>
                  <Image source={IMAGES.BG1} style={styles.image} />
                  <View style={{flex: 1}}>
                    <Text style={styles.listValue}>20x Split snatches</Text>
                    <Text style={styles.time}>02:15</Text>
                  </View>
                  <Ionicons name="play" color={COLORS.BLACK} size={16} />
                </View>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate('Screen3')}>
          <Text style={styles.btnTxt}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
