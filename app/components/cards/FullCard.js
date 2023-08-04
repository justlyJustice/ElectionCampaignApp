import { View, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import Text from "../Text";

import colors from "../../config/colors";

function FullCard({ title, desc, onPress, iconName, variant }) {
  return (
    <Pressable
      style={[styles.container, { borderColor: colors[variant] }]}
      onPress={onPress}
    >
      <View style={styles.bluePrintText}>
        <Text style={[styles.cardTitle, { color: colors[variant] }]}>
          {title}
        </Text>

        <Text style={styles.cardDesc} numberOfLines={2}>
          {desc}
        </Text>
      </View>

      <Feather color={colors[variant]} name={iconName} size={40} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 4,
    flexDirection: "row",
    height: 140,
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 20,
    width: "95%",
  },
  bluePrintText: {
    width: "80%",
  },
  cards: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  cardDesc: {
    color: colors.medium,
    fontFamily: "InterMedium",
    fontSize: 14,
  },
  cardTitle: {
    color: colors.secondary,
    fontFamily: "PoppinsBold",
    fontSize: 20,
    lineHeight: 20,
  },
});

export default FullCard;
