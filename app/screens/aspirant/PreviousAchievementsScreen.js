import { Image, View, ScrollView, StyleSheet } from "react-native";

import LinearBackground from "../../components/LinearBackground";
import Text from "../../components/Text";

import colors from "../../config/colors";
import { timeFromNow } from "../../utility/helpers";

function PreviousAchievementsScreen({ route }) {
  const { previous_achievements } = route.params;

  return (
    <LinearBackground colors={[colors.primary, colors.darkGreen]}>
      <View style={styles.container}>
        <View style={styles.textContain}>
          <Text style={styles.title}>Previous Achievements</Text>
          <Text style={styles.desc}>Oyeinnoah Paris</Text>
        </View>

        <ScrollView style={styles.view}>
          {previous_achievements.map((prevAchievement) => (
            <View key={prevAchievement._id} style={styles.previousAchievement}>
              <Image
                source={require("../../assets/images/engineer.png")}
                resizeMode="cover"
                style={{ height: 200, width: "100%" }}
              />

              <View style={styles.textContain}>
                <Text style={styles.text}>{prevAchievement.name}</Text>

                <Text style={styles.desc}>{prevAchievement.location}</Text>
              </View>

              <View>
                <Text>{prevAchievement.date_completed}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
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
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 22,
  },
  previousAchievement: {
    marginVertical: 10,
  },
  textContain: {
    marginVertical: 20,
  },
  view: {
    paddingHorizontal: 20,
  },
});

export default PreviousAchievementsScreen;
