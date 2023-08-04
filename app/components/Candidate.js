import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "../components/Text";
import colors from "../config/colors";

function Candidate({
  image,
  candidateName = "Joel Justice",
  contestingParty = "BCN",
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.topContain}>
          {!image && (
            <LinearGradient
              colors={["#f0f0f0", "#c0c0c0"]}
              locations={[0.4, 0.8]}
              style={styles.box}
            />
          )}

          {image && (
            <Image
              resizeMode="cover"
              source={{ uri: image }}
              style={styles.image}
            />
          )}
        </View>

        <>
          <Text style={styles.candidateName}>
            {candidateName} -{" "}
            <Text style={styles.candidateParty}>{contestingParty}</Text>
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
    backgroundColor: "red",
    borderRadius: 10,
    height: "100%",
    marginHorizontal: 10,
    width: "45%",
  },
  box: {
    borderRadius: 8,
    width: "100%",
    height: 120,
  },
  image: {
    borderRadius: 20,
    width: "100%",
    height: 120,
  },
  topContain: {
    marginBottom: 8,
  },
});

export default Candidate;
