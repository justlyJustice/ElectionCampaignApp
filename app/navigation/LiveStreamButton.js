import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";

function LiveStreamButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Feather name="video" color={colors.darkGreen} size={20} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.darkGreen,
    borderRadius: 40,
    borderWidth: 10,
    // bottom: Platform.OS === "android" ? 40 : 30,
    bottom: 20,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
});

export default LiveStreamButton;
