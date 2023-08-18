import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Text from "./Text";

function Card({
  cardColor = colors.darkGreen,
  icon,
  text,
  onPress,
  style,
  width = 118,
  ...otherProps
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress} {...otherProps}>
      <View
        style={[styles.container, { backgroundColor: cardColor, width }, style]}
      >
        {icon && (
          <MaterialCommunityIcons
            name={icon.name}
            color={icon.color}
            size={20}
          />
        )}

        {text && (
          <Text style={[styles.text, { color: text.color }]}>{text.title}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    height: 80,
    justifyContent: "center",
    margin: 10,
  },
  text: {
    color: colors.white,
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 15,
    width: 100,
  },
});

export default Card;
