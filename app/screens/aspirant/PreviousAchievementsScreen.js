import { Image, View, StyleSheet } from "react-native";

import ScreenWrapper from "../../components/ScreenWrapper";
import Text from "../../components/Text";

import colors from "../../config/colors";

function PreviousAchievementsScreen({ route }) {
  const { previous_achievements } = route.params;

  console.log(previous_achievements);

  return (
    <ScreenWrapper back>
      <View style={styles.topTextContain}>
        <Text style={styles.title}>Previous Achievements</Text>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.white,
    flex: 1,
    // paddingHorizontal: 20,
    width: "100%",
  },
  desc: {
    color: colors.medium,
    fontFamily: "Inter",
    fontSize: 16,
  },
  text: {
    fontFamily: "PoppinsBold",
    lineHeight: 20,
  },
  previousAchievement: {
    marginVertical: 10,
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
  view: {
    paddingHorizontal: 20,
  },
});

export default PreviousAchievementsScreen;
