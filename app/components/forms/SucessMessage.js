import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";

import Text from "../Text";

function SuccessMessage({ success, visible }) {
  if (!visible || !success) return null;

  return <Text style={styles.error}>{success}</Text>;
}

const styles = StyleSheet.create({
  error: { color: colors.darkGreen, fontSize: 15, textAlign: "left" },
});

export default SuccessMessage;
