import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";

function UserIconButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[colors.primary, colors.darkGreen]}
        start={180}
        end="100%"
        style={styles.container}
      >
        <View style={{ alignSelf: "center" }}>
          <MaterialCommunityIcons
            name="menu-open"
            size={35}
            color={colors.white}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    width: 60,
    position: "relative",
    bottom: 30,
  },
});

export default UserIconButton;
