import {
  ActivityIndicator as Indicator,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      {Platform.OS === "web" ? (
        <Indicator size={80} color={colors.darkGreen} />
      ) : (
        <LottieView
          autoPlay
          loop
          source={require("../assets/animations/loader.json")}
          style={styles.loader}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    flex: 1,
    position: "absolute",
    padding: 30,
    backgroundColor: "white",
    height: "100%",
    justifyContent: "center",
    width: "100%",
    zIndex: 1,
  },
  loader: {
    width: 180,
  },
});

export default ActivityIndicator;
