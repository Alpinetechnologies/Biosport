import {
  View,
  Text,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import styles from './style';
import {IMAGES} from '../../../constants/images';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../constants/colors';
import {TabView, SceneMap} from 'react-native-tab-view';
import IconInput from '../../../components/icon-input';
import InputBox from '../../../components/input-box';
import LabelInputBox from '../../../components/label-input-box';
import CustomBtn from '../../../components/custom-btn';

export default function Login(props) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'login', title: 'Log In'},
    {key: 'signup', title: 'Sign Up'},
  ]);

  const LoginRoute = () => (
    <View style={{flex: 1, marginTop: 15}} showsVerticalScrollIndicator={false}>
      <View style={{paddingVertical: 15}}>
        <IconInput icon={'mail'} placeholder="Enter Email" />
        <IconInput icon={'lock'} placeholder="Enter Your Password" />

        <CustomBtn
          title="Login"
          marginVertical={30}
          onPress={() => props.navigation.navigate('OtpVerification')}
        />

        <View style={styles.flexRow}>
          <Text style={styles.account}>Don't have an account ?</Text>
          <TouchableOpacity>
            <Text style={styles.register}> Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.or}>Or Sign In with</Text>

        <View style={styles.socialmediaContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: 'https://pngimg.com/d/google_PNG19635.png'}}
              style={styles.logoimg}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://e7.pngegg.com/pngimages/180/164/png-clipart-apple-logo-apple-logo-thumbnail.png',
              }}
              style={styles.logoimg}
            />
          </View>
        </View>
      </View>
    </View>
  );

  const SignUpRoute = () => (
    <View style={{flex: 1, marginTop: 15}} showsVerticalScrollIndicator={false}>
      <View style={{paddingVertical: 15}}>
        <IconInput icon={'user'} placeholder="Enter Email" />
        <IconInput icon={'lock'} placeholder="Enter Email" />
        <IconInput icon={'lock'} placeholder="Enter Your Password" />

        <CustomBtn
          title="Sign Up"
          marginVertical={30}
          onPress={() => props.navigation.navigate('OtpVerification')}
        />

        <Text style={styles.or}>Or Sign In with</Text>

        <View style={styles.socialmediaContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: 'https://pngimg.com/d/google_PNG19635.png'}}
              style={styles.logoimg}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://e7.pngegg.com/pngimages/180/164/png-clipart-apple-logo-apple-logo-thumbnail.png',
              }}
              style={styles.logoimg}
            />
          </View>
        </View>
      </View>
    </View>
  );
  const renderScene = SceneMap({
    login: LoginRoute,
    signup: SignUpRoute,
  });

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.topimg} source={IMAGES.LOGIN_BG}>
        <TouchableOpacity style={styles.backBtn}>
          <Feather name="arrow-left" color={COLORS.BLACK} />
        </TouchableOpacity>
        <View style={styles.toptxtContainer}>
          <Text style={styles.topTxt}>
            Go Ahead and setup Your{'\n'}Account
          </Text>
          <Text style={styles.subTxt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={{flex: 1}}>
            <TabView
              swipeEnabled={false}
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
              renderTabBar={(props, i) => (
                <View style={styles.tabsContainer} key={i}>
                  {props.navigationState.routes.map((item, j) => {
                    return props.navigationState.index === j ? (
                      <TouchableOpacity
                        key={j}
                        style={styles.selectedTabBtn}
                        onPress={() => props.jumpTo(item.key)}>
                        <Text style={styles.tabsTitle}>{item.title}</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        key={j}
                        style={styles.tabBtn}
                        onPress={() => props.jumpTo(item.key)}>
                        <Text style={styles.inactiveTabsTitle}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
