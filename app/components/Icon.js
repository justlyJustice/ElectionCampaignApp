import { View, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({ iconName = "menu" }) {
  return (
    <View style={styles.container}>
      <Feather color={colors.light} name={iconName} size={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Icon;
