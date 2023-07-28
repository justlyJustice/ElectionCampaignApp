import React from "react";
import { Image, View, ScrollView, StyleSheet } from "react-native";

import colors from "../config/colors";
import LinearBackground from "../components/LinearBackground";
import Text from "../components/Text";

function BlueprintScreen({ route }) {
  const { user } = route.params;
  return (
    <LinearBackground colors={[colors.primary, colors.darkGreen]}>
      <View style={styles.container}>
        <View style={styles.screenIndicator}>
          <Text style={styles.text}>Blueprint - {user.name}</Text>
        </View>

        <ScrollView style={styles.view}>
          <Text
            style={{ color: "#676767", fontSize: 15, textAlign: "justify" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            voluptates ad hic. Quasi deleniti ea ratione optio reprehenderit eos
            rerum earum animi tenetur. Adipisci vel aperiam dolorem, aut
            laudantium ducimus suscipit qui voluptates molestias debitis
            reiciendis rem iste, asperiores impedit fugit vero ex ipsam maiores
          </Text>

          <Image
            source={require("../assets/images/engineer.png")}
            style={{ height: 249, width: 250 }}
          />

          <Text
            style={{ color: "#676767", fontSize: 15, textAlign: "justify" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            voluptates ad hic. Quasi deleniti ea ratione optio reprehenderit eos
            rerum earum animi tenetur. Adipisci vel aperiam dolorem, aut
            laudantium ducimus suscipit qui voluptates molestias debitis
            reiciendis rem iste, asperiores impedit fugit vero ex ipsam maiores
          </Text>
        </ScrollView>
      </View>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 700,
    width: "100%",
    top: 60,
  },
  screenIndicator: {
    alignSelf: "flex-start",
    alignItems: "center",
    backgroundColor: colors.darkGreen,
    borderRadius: 5,
    bottom: 10,
    elevation: 5,
    height: 22,
    justifyContent: "center",
    paddingHorizontal: 14,
    left: 26,
  },
  text: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  view: {
    paddingHorizontal: 50,
  },
});

export default BlueprintScreen;
