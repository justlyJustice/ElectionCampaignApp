import { Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import navigation from "../navigation/rootNavigation";

const tabNavScreenOptions = {
  headerShadowVisible: false,
  headerShown: false,
  tabBarLabelVisible: false,
  // tabBarStyle: {
  //   alignItems: "center",
  //   backgroundColor: colors.light,
  //   flexDirection: "column",
  //   justifyContent: "center",
  // },
};

const tabScreenOptions = {
  headerShown: false,
  headerTitleStyle: {
    fontFamily: "PoppinsBold",
    // fontSize:,
  },
  headerShadowVisible: false,
  // headerTransparent: true,
  tabBarShowLabel: false,
};

const headerOptionsStyle = {
  headerLeft: () => (
    <MaterialCommunityIcons
      color={colors.primary}
      name="arrow-left"
      onPress={() => navigation.goBack()}
      size={30}
      style={{ marginRight: Platform.OS === "android" ? 20 : 0 }}
    />
  ),
  headerShown: true,
  headerShadowVisible: false,
  headerTitle: "",
};

export { headerOptionsStyle, tabScreenOptions, tabNavScreenOptions };
