import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Routes from "./navigation/routes";

const fonts = {
  thin: require("../assets/fonts/Outfit-Thin.ttf"),
  extraLight: require("../assets/fonts/Outfit-ExtraLight.ttf"),
  light: require("../assets/fonts/Outfit-Light.ttf"),
  regular: require("../assets/fonts/Outfit-Regular.ttf"),
  medium: require("../assets/fonts/Outfit-Medium.ttf"),
  semibold: require("../assets/fonts/Outfit-SemiBold.ttf"),
  bold: require("../assets/fonts/Outfit-Bold.ttf"),
  extraBold: require("../assets/fonts/Outfit-ExtraBold.ttf"),
  black: require("../assets/fonts/Outfit-Black.ttf"),
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Routes />
    </>
  );
}
