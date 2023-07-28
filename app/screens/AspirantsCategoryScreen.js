import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Wrapper from "../components/Wrapper";
import CategoryCard from "../components/cards/CategoryCard";
import routes from "../navigation/routes";

function AspirantsCategoryScreen({ navigation }) {
  return (
    <Wrapper>
      <View style={styles.container}>
        <CategoryCard
          bodyText="Presidential candidates from the various parties accross the nation."
          titleText="PRESIDENTIAL CANDIDATES"
          onPress={() => navigation.navigate(routes.PRESIDENTIAL_CANDIDATES)}
          iconName="account-cog"
        />

        <CategoryCard
          bodyText="Governorship candidates from the various parties accross the nation."
          titleText="GOVERNORSHIP CANDIDATES"
          onPress={() => navigation.navigate(routes.GOVERNORSHIP)}
          iconName="account-supervisor-circle"
        />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({});

export default AspirantsCategoryScreen;
