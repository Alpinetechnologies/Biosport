import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  ActivityIndicator,
  Modal,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {WebView} from 'react-native-webview';

export default function EntryPoint() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadStart = () => {
    console.log('onLoadStart');
    SplashScreen.hide();
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    console.log('onLoadEnd');
    setIsLoading(false);
  };

  function ActivityLoader({isLoading}) {
    return (
      <Modal
        statusBarTranslucent={true}
        animationType="fade"
        transparent
        visible={isLoading}>
        <View style={styles.container}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={45} color="#0f4e04" />
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      {isLoading && <ActivityLoader isLoading={isLoading} />}
      <WebView
        source={{uri: 'https://www.amitco.in'}}
        style={{flex: 1}}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onLoadProgress={() => console.log('onLoadProgress')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  loaderContainer: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
