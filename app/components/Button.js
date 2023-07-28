import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function AppButton({
  backgroundColor = colors.primary,
  style,
  textColor = "white",
  onPress,
  title,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[textColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 5,
    height: 35,
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default AppButton;
