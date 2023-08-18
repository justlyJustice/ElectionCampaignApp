import { View, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({ iconName = "menu", onPress }) {
  return (
    <View style={styles.container}>
      <Feather
        color={colors.light}
        name={iconName}
        onPress={onPress}
        size={25}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
});

export default Icon;
