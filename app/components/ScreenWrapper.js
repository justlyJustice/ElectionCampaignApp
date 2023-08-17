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

function Wrapper({ back, children }) {
  return (
    <>
      <ImageBackground
        style={[styles.background, { paddingTop: 20 }]}
        source={require("../assets/images/screen-bg.png")}
      >
        <ScreenHeader back={back} />

        <ScrollView
          style={{ width: "100%" }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ height: "100%", flex: 1 }}>{children}</View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default Wrapper;
