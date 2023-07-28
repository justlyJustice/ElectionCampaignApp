import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Text from "../Text";

function CategoryCard({
  bodyText,
  cardColor = colors.darkGreen,
  iconColor = colors.white,
  iconName,
  titleText,
  onPress,
}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: cardColor }]}>
        <View style={styles.iconDiv}>
          <MaterialCommunityIcons
            name={iconName}
            style={[styles.icon, { color: iconColor }]}
          />
        </View>

        <View style={styles.contentView}>
          <Text style={styles.title}>{titleText}</Text>
          {bodyText && <Text style={styles.body}>{bodyText}</Text>}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    elevation: 3,
    flexDirection: "row",
    height: 120,
    /*  justifyContent: "space-between", */
    marginVertical: 10,
    padding: 30,
    width: "100%",
  },
  body: {
    fontStyle: "italic",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 15,
    width: "60%",
  },
  contentView: {
    /*   marginHorizontal: 10, */
  },
  icon: {
    fontSize: 50,
    marginRight: 10,
  },
  title: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 14,
  },
});

export default CategoryCard;
