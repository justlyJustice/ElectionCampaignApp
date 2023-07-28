import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import colors from "../config/colors";
import ScreenHeader from "./ScreenHeader";

function ListViewWrapper({ children }) {
  return (
    <>
      <ImageBackground
        style={[styles.background, { paddingTop: 20 }]}
        source={require("../assets/images/screen-bg.png")}
      >
        <ScreenHeader />

        <View style={{ flex: 1 }}>{children}</View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    backgroundColor: colors.white,
    justifyContent: "center",
    flex: 1,
    padding: 30,
  },
});

export default ListViewWrapper;
