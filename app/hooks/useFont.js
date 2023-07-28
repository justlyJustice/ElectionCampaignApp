import { useFonts } from "expo-font";

const useFont = () => {
  let [fontsLoaded] = useFonts({
    Rubik: require("../assets/fonts/Rubik-Medium.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  return { fontsLoaded };
};

export default useFont;
