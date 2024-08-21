import { ImageSourcePropType } from "react-native";

type ImagesType = {
  BG1: ImageSourcePropType;
  BG2: ImageSourcePropType;
  OB1: ImageSourcePropType;
  OB2: ImageSourcePropType;
  LOGO: ImageSourcePropType;
  LOGO_WHITE: ImageSourcePropType;
  NEXT1: ImageSourcePropType;
  NEXT2: ImageSourcePropType;
  NEXT3: ImageSourcePropType;
  LOGIN_BG: ImageSourcePropType;
  WATER: ImageSourcePropType;
  GRAPH: ImageSourcePropType;
  GRAPH2: ImageSourcePropType;
  GRAPH3: ImageSourcePropType;
};

const IMAGES: ImagesType = {
  BG1: require("../assets/images/bg1.jpg"),
  BG2: require("../assets/images/bg2.jpg"),
  OB1: require("../assets/images/ob1.png"),
  OB2: require("../assets/images/ob2.png"),
  LOGO: require("../assets/images/logo.png"),
  LOGO_WHITE: require("../assets/images/logo-white.png"),
  NEXT1: require("../assets/images/next1.png"),
  NEXT2: require("../assets/images/next2.png"),
  NEXT3: require("../assets/images/next3.png"),
  LOGIN_BG: require("../assets/images/loginbg.png"),
  WATER: require("../assets/images/waterlevel.png"),
  GRAPH: require("../assets/images/graph.png"),
  GRAPH2: require("../assets/images/graph2.png"),
  GRAPH3: require("../assets/images/graph3.png"),
};

export { IMAGES };
