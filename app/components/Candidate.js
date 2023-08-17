import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "../components/Text";
import colors from "../config/colors";

import settings from "../config/settings";

function Candidate({
  candidate,
  // avatar,
  // candidateName = "Joel Justice",
  // contestingParty = "BCN",
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.topContain}>
          {!candidate.avatar && (
            <LinearGradient
              colors={["#f0f0f0", "#c0c0c0"]}
              locations={[0.4, 0.8]}
              style={styles.box}
            />
          )}

          {candidate.avatar && (
            <View style={styles.box}>
              <Image
                resizeMode="cover"
                source={
                  candidate.avatar
                    ? { uri: `${settings.imageUrl}/${candidate.avatar}` }
                    : require("../assets/images/candidate.jpg")
                }
                style={styles.image}
              />
            </View>
          )}
        </View>

        <>
          <Text style={styles.candidateName}>
            {candidate.name}
            {"\n"}
            <Text style={styles.candidateParty}>{candidate.party}</Text>
          </Text>
        </>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  candidateName: {
    color: colors.light,
    fontFamily: "InterBold",
    fontSize: 14,
    textAlign: "center",
  },
  candidateParty: {
    fontSize: 12,
    fontFamily: "InterMedium",
  },
  container: {
    alignItems: "center",
    // backgroundColor: "red",
    borderRadius: 10,
    // height: 120,
    marginHorizontal: 10,
    overflow: "hidden",
    width: "45%",
  },
  box: {
    borderRadius: 8,
    width: 150,
    height: 130,
  },
  image: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
  topContain: {
    marginBottom: 8,
  },
});

export default Candidate;
