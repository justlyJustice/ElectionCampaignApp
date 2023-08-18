import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";
import routes from "../navigation/routes";
import ScreenWrapper from "../components/ScreenWrapper";
import Text from "../components/Text";
import CategoryCard from "../components/cards/CategoryCard";

function WelcomeScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <CategoryCard
          bodyText="Know election candidates and what their political profile proposes"
          titleText="VIEW CANDIDATE"
          onPress={() => navigation.navigate(routes.CANDIDATES_SCREEN)}
          iconName="account"
        />

        <CategoryCard
          bodyText="View past and ongoing campaign activities."
          titleText="CAMPAIGN ACTIVITIES"
          onPress={() => navigation.navigate(routes.FEEDS_SCREEN)}
          iconName="bookmark"
        />

        <View style={styles.hr} />

        <Button
          onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
          style={styles.btn}
          title="Admin User? Login"
        />

        <Button style={styles.btn} title="Frequently Asked Questions (FAQs)" />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  hr: {
    borderColor: colors.light,
    borderRadius: 20,
    borderWidth: 0.4,
    marginVertical: 10,
    width: "100%",
  },
  btn: {
    alignSelf: "center",
    width: "100%",
  },
});

export default WelcomeScreen;
