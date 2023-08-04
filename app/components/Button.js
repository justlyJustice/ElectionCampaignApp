import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function AppButton({
  backgroundColor = "secondary",
  onPress,
  children,
  style,
  textColor,
  title,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[backgroundColor] },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[textColor] }]}>
        {children ? children : title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // paddingVertical: 8,
    // paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.black,
    fontFamily: "InterMedium",
    fontSize: 14,
    textAlign: "center",
  },
});

export default AppButton;
