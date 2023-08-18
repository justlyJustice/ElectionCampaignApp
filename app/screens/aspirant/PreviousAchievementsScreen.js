import { Image, View, StyleSheet } from "react-native";

import ScreenWrapper from "../../components/ScreenWrapper";
import Text from "../../components/Text";

import colors from "../../config/colors";
import settings from "../../config/settings";

function PreviousAchievementsScreen({ route }) {
  const { previous_achievements } = route.params;

  return (
    <ScreenWrapper back>
      <View style={styles.topTextContain}>
        <Text style={styles.title}>Previous Achievements</Text>
      </View>

      {previous_achievements.map((prevAch) => (
        <View style={styles.previousAchievement}>
          <Image
            style={styles.image}
            source={{ uri: `${settings.imageUrl}/${prevAch.image}` }}
          />

          <View>
            <Text style={styles.title}>{prevAch.name}</Text>
            <Text style={styles.location}>Location: {prevAch.location}</Text>
          </View>
        </View>
      ))}
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
  image: {
    borderRadius: 20,
    width: "100%",
    height: 300,
  },
  location: {
    color: colors.light,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
  },
  previousAchievement: {
    marginVertical: 20,
  },
  title: {
    fontFamily: "InterBold",
    fontSize: 18,
    lineHeight: 24,
    marginTop: 10,
    textAlign: "center",
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
