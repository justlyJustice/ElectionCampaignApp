import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../../config/colors";
import Text from "../Text";

function IconCard({
  cardColor = "#A3BB98",
  icon,
  text,
  onPress,
  ...otherProps
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress} {...otherProps}>
      <View style={[styles.container, { backgroundColor: cardColor }]}>
        {icon && (
          <Feather
            name={icon ? icon.name : "circle"}
            color={icon ? icon.color : colors.black}
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
    height: 100,
    justifyContent: "center",
    margin: 10,
    width: "44%",
  },
  text: {
    color: colors.white,
    fontFamily: "InterBold",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
    width: 100,
  },
});

export default IconCard;
