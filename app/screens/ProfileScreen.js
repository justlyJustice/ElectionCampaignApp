import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import colors from "../config/colors";
import LinearBackground from "../components/LinearBackground";
import Text from "../components/Text";

function ProfileScreen({ route }) {
  // const { user } = route.params;

  // console.log(user);

  return (
    <LinearBackground colors={[colors.primary, colors.darkGreen]}>
      <View style={styles.container}>
        <View style={styles.screenIndicator}>
          <Text style={styles.topTitle}>Great Joshua Macaiva</Text>
        </View>

        <ScrollView style={styles.view}>
          {/* {user.profile.biography && (
            <View style={styles.textContain}>
              <Text style={styles.title}>Biography</Text>
              <Text style={styles.text}>{user.profile.biography}</Text>
            </View>
          )} */}

          {/* {user.profile.family && (
            <View style={styles.textContain}>
              <Text style={styles.title}>Family</Text>
              <Text style={styles.text}>{user.profile.family}</Text>
            </View>
          )} */}

          {/* {user.profile.academicBackground && (
            <View style={styles.textContain}>
              <Text style={styles.title}>Academic Background</Text>
              <Text style={styles.text}>{user.profile.academicBackground}</Text>
            </View>
          )} */}

          <View style={styles.textContain}>
            <Text style={styles.title}>Previous Achievements</Text>

            <View style={styles.achievements}>
              <View style={styles.achievement}>
                <Text style={styles.achievementTitle}>- Chairman, NDUTH</Text>

                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  vero laudantium error provident
                </Text>
              </View>

              <View style={styles.achievement}>
                <Text style={styles.achievementTitle}>- Chairman, NDUTH</Text>

                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  vero laudantium error provident
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  achievements: {
    marginLeft: 10,
  },
  achievement: {
    marginVertical: 4,
  },
  achievementTitle: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "700",
  },
  container: {
    backgroundColor: colors.white,
    height: 700,
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
  textContain: {
    marginVertical: 8,
  },
  text: {
    textAlign: "justify",
    color: "#676767",
    fontSize: 12,
    fontWeight: "bold",
  },
  topTitle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    color: colors.darkGreen,
    fontWeight: "700",
  },
  view: {
    paddingHorizontal: 40,
  },
});

export default ProfileScreen;
