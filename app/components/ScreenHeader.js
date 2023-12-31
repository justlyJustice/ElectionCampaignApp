import React from "react";

import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";

function ScreenHeader({ back = false }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        {back ? (
          <MaterialCommunityIcons
            name="arrow-left"
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
        ) : (
          <MaterialCommunityIcons
            name="menu"
            style={styles.icon}
            onPress={() => navigation.toggleDrawer()}
          />
        )}

        <Image
          source={require("../assets/images/Logo-2.png")}
          style={styles.topImage}
        />
      </View>
    </View>
  );
}

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
  },
  icon: {
    color: colors.light,
    fontSize: 25,
  },
  topView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topImage: {
    height: 100,
    width: 100,
  },
});
