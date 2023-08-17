import { useEffect } from "react";
import { Image, View, ScrollView, StyleSheet } from "react-native";

import colors from "../../config/colors";

import Text from "../../components/Text";
import ScreenWrapper from "../../components/ScreenWrapper";

function BlueprintScreen({ route }) {
  return (
    <ScreenWrapper back>
      <View style={styles.topTextContain}>
        <Text style={styles.title}>Blueprint</Text>
        <Text style={styles.desc}>View candidate blueprint.</Text>
      </View>

      <Text
        style={{ color: "#676767", fontSize: 15, textAlign: "justify" }}
      ></Text>

      {/* <Image
            source={require("../assets/images/engineer.png")}
            style={{ height: 249, width: 250 }}
          /> */}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  desc: {
    color: colors.medium,
    fontFamily: "Inter",
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 22,
  },
  topTextContain: {
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  view: {
    paddingHorizontal: 50,
  },
});

export default BlueprintScreen;
