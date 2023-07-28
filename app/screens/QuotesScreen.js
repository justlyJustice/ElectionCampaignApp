import React from "react";
import { Image, View, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import LinearBackground from "../components/LinearBackground";
import Text from "../components/Text";

function QuotesScreen({ route }) {
  const { user } = route.params;

  return (
    <LinearBackground colors={[colors.primary, colors.darkGreen]}>
      <View style={styles.container}>
        <View style={styles.screenIndicator}>
          <Text style={styles.text}>Quotes - {user.name}</Text>
        </View>

        <ScrollView style={styles.view}>
          {user.quotes.length > 0 &&
            user.quotes.map((quote, i) => (
              <Text style={styles.quoteText} key={i}>
                {`"${quote.desc}"`}
              </Text>
            ))}

          {/*  <Text style={styles.quoteText}>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            facilis."
          </Text>

          <Text style={styles.quoteText}>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            facilis."
          </Text>

          <Text style={styles.quoteText}>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            facilis."
          </Text>

          <Text style={styles.quoteText}>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            facilis."
          </Text> */}
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
  iconDiv: {
    alignItems: "center",
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    left: 40,
    position: "absolute",
    top: -25,
    width: 60,
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
  quoteText: {
    color: "#676767",
    fontSize: 12,
    fontWeight: "700",
    marginVertical: 10,
  },
});

export default QuotesScreen;
