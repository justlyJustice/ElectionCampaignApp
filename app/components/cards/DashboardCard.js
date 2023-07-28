import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Text from "../Text";

function DashboardCard({
  cardColor = colors.darkGreen,
  iconName,
  titleText,
  onPress,
}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: cardColor }]}>
        <View style={styles.iconDiv}>
          <MaterialCommunityIcons name={iconName} style={styles.icon} />
        </View>

        <View style={styles.contentView}>
          <Text style={styles.title}>{titleText}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    width: "100%",
  },
  contentView: {
    /*   marginHorizontal: 10, */
  },
  icon: {
    color: colors.white,
    fontSize: 30,
    marginHorizontal: 10,
  },
  title: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 14,
  },
});

export default DashboardCard;
