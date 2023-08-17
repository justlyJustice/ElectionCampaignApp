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

function Candidate({ candidate, onPress }) {
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
            <Text style={styles.candidateParty}>
              {candidate.aspiring_position + ", " + candidate.party}
            </Text>
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
    fontFamily: "PoppinsMedium",
  },
  container: {
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: "hidden",
    width: "45%",
  },
  box: {
    borderRadius: 8,
    width: 150,
    height: 140,
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
