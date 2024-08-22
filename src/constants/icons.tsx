import { ImageSourcePropType } from "react-native";

type ImagesType = {
  STEP_1: ImageSourcePropType;
  STEP_2: ImageSourcePropType;
  STEP_3: ImageSourcePropType;
  STEP_4: ImageSourcePropType;
  STEP_5: ImageSourcePropType;
  FITBIT: ImageSourcePropType;
};

const ICONS: ImagesType = {
  STEP_1: require("../assets/icons/step1.png"),
  STEP_2: require("../assets/icons/step2.png"),
  STEP_3: require("../assets/icons/step3.png"),
  STEP_4: require("../assets/icons/step4.png"),
  STEP_5: require("../assets/icons/step5.png"),

  FITBIT: require("../assets/icons/fitbit.png"),
};

export { ICONS };
