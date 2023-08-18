import { useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";

import colors from "../../config/colors";

import Text from "../../components/Text";
import ScreenWrapper from "../../components/ScreenWrapper";

import { splitTextToArray } from "../../utility/helpers";

function PersonalProfileScreen({ route }) {
  const { profile } = route.params;

  return (
    <ScreenWrapper back>
      <>
        <View style={styles.topTextContain}>
          <Text style={styles.title}>Personal Profile</Text>
        </View>

        {splitTextToArray(profile).map((desc, i) => (
          <Text key={i} style={styles.description}>
            {desc}
          </Text>
        ))}
      </>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  desc: {
    color: colors.medium,
    fontFamily: "Inter",
    fontSize: 16,
    // textAlign: "center",
  },
  description: {
    color: "#676767",
    fontFamily: "Inter",
    fontSize: 15,
    textAlign: "justify",
  },
  image: { borderRadius: 10, height: 249, marginBottom: 20, width: "100%" },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 22,
  },
  topTextContain: {
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
});

export default PersonalProfileScreen;
