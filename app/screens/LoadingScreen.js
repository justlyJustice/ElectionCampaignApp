import {
  ImageBackground,
  Image,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

function LoadingScreen() {
  if (Platform.OS === "web")
    return (
      <ActivityIndicator
        style={{ alignSelf: "center", flexDirection: "row" }}
        color={colors.darkGreen}
        size={80}
      />
    );

  return (
    <ImageBackground
      source={require("../assets/images/screen-bg.png")}
      style={styles.container}
    >
      <Image
        source={require("../assets/images/Logo-2.png")}
        style={styles.image}
      />

      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/lf30_editor_hlsy4n24.json")}
        style={styles.loadingAnimation}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  loadingAnimation: {
    top: 120,
  },
  image: {
    height: 200,
    width: 200,
  },
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default LoadingScreen;
