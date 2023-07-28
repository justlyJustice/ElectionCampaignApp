import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";

import colors from "../config/colors";
import ScreenHeader from "./ScreenHeader";

function Wrapper({ children }) {
  return (
    <>
      <ImageBackground
        style={[styles.background, { paddingTop: 20 }]}
        source={require("../assets/images/screen-bg.png")}
      >
        <ScreenHeader />

        <ScrollView style={{ width: "100%" }}>{children}</ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    height: "100%",
    padding: 30,
  },
});

export default Wrapper;
