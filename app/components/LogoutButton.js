import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./Text";

function LogoutButton({ onPress }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor={colors.primary}
    >
      <>
        <MaterialCommunityIcons name="logout" color={colors.white} size={18} />
        <AppText style={styles.text}>Logout</AppText>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.darkGreen,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    width: 150,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "700",
  },
});

export default LogoutButton;
