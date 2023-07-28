import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Screen from "./Screen";

function LinearBackground({ children, style, colors, ...otherProps }) {
  return (
    <LinearGradient colors={colors} style={styles.container} {...otherProps}>
      <ImageBackground
        source={require("../assets/images/screen-bg.png")}
        style={[styles.container]}
      >
        <Screen style={style}>{children}</Screen>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LinearBackground;
