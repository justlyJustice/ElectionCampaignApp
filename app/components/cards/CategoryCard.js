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
          {bodyText && (
            <Text style={styles.body} numberOfLines={1}>
              {bodyText}
            </Text>
          )}
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
    marginVertical: 10,
    padding: 30,
    width: "100%",
  },

  body: {
    fontFamily: "InterMedium",
    fontSize: 12,
    lineHeight: 11,
    width: "90%",
  },
  contentView: {
    lineHeight: 0,
    paddingRight: 20,
    width: "100%",
  },
  iconDiv: {
    // marginRight: 10,
  },
  icon: {
    fontSize: 40,
    marginRight: 10,
  },
  title: {
    color: colors.white,
    fontFamily: "PoppinsBold",
    fontSize: 16,
  },
});

export default CategoryCard;
