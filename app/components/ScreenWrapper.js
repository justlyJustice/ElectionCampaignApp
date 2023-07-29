import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";

import colors from "../config/colors";
import Screen from "./Screen";

function ScreenWrapper({ children }) {
  return (
    <ImageBackground
      style={[styles.background, { paddingTop: 20 }]}
      source={require("../assets/images/screen-bg.png")}
    >
      <Screen>{children}</Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default ScreenWrapper;
