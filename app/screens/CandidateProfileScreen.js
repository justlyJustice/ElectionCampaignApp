import { useEffect } from "react";
import {
  // FlatList,
  // Pressable,
  Image,
  View,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import Text from "../components/Text";
import LinearBackground from "../components/LinearBackground";
// import Card from "../components/Card";

// import items from "../data/candidateItemData";

import colors from "../config/colors";
import ScreenWrapper from "../components/ScreenWrapper";
// import IconCard from "../components/cards/IconCard";
import FullCard from "../components/cards/FullCard";

import aspirantApi from "../api/aspirant";

import routes from "../navigation/routes";

import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import settings from "../config/settings";

function CandidateProfileScreen({ navigation, route }) {
  const { _id } = route.params;

  const {
    request: loadCandidate,
    loading,
    data: aspirant,
    error,
  } = useApi(aspirantApi.getAspirant);

  useEffect(() => {
    loadCandidate(_id);
  }, []);

  if (error)
    return (
      <>
        <Text>Couldn't get the list of candidates!.</Text>
        <Button title="Retry" onPress={loadCandidate} />
      </>
    );

  return (
    <ScreenWrapper>
      <ActivityIndicator visible={loading} />

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <>
            <Image
              source={
                !aspirant.avatar
                  ? require("../assets/images/candidate.jpg")
                  : { uri: `${settings.imageUrl}/${aspirant.avatar}` }
              }
              style={styles.candidateImage}
            />
          </>
        </View>

        <View style={styles.details}>
          <View style={styles.nameContain}>
            <Text style={styles.candidateName}>{aspirant.name}</Text>
          </View>

          <View style={styles.positionsContain}>
            <View style={styles.item}>
              <Text style={styles.smallText}>Current Position:</Text>
              <Text style={styles.mediumText}>{aspirant.current_position}</Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.smallText}>Vying for:</Text>
              <Text style={styles.mediumText}>
                {aspirant.aspiring_position}
              </Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.smallText}>Party:</Text>
              <Text style={styles.mediumText}>{aspirant.party}</Text>
            </View>
          </View>

          {[
            {
              id: 0,
              title: "Previous Achievements",
              desc: "View all candidate's previous achievement",
              iconName: "award",
              variant: "olive",
              // route: routes.PREVIOUS_ACHIEVEMENT,
              handlePress: () =>
                navigation.navigate(routes.PREVIOUS_ACHIEVEMENT, {
                  previous_achievements: aspirant.previous_achievements,
                }),
            },
            {
              id: 1,
              title: "Blueprint",
              desc: "View the party's setout blueprint for their proposed administration",
              iconName: "book",
              variant: "secondary",
              handlePress: () =>
                navigation.navigate(routes.BLUEPRINT_SCREEN, _id),
            },
          ].map((item) => (
            <FullCard
              desc={item.desc}
              iconName={item.iconName}
              key={item.id}
              title={item.title}
              variant={item.variant}
              onPress={item.handlePress}
            />
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  bluePrintCard: {
    backgroundColor: "white",
    borderColor: colors.secondary,
    borderRadius: 10,
    borderWidth: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 20,
    width: "95%",
  },
  bluePrintText: {
    width: "70%",
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
    fontFamily: "Inter",
    fontSize: 14,
  },
  cardTitle: {
    color: colors.secondary,
    fontFamily: "PoppinsBold",
    fontSize: 20,
  },
  candidateDetailContain: {
    alignItems: "center",
    width: "100%",
  },
  candidateName: {
    // color: colors.secondary_100,
    fontFamily: "PoppinsBold",
    fontSize: 22,
  },
  candidateImage: {
    borderColor: colors.white,
    borderRadius: 100,
    borderWidth: 8,
    height: 120,
    top: 40,
    width: 120,
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    width: "100%",
    height: "100%",
  },
  descriptionText: {
    color: "#676767",
    fontSize: 10,
    fontWeight: "bold",
    fontStyle: "normal",
    width: 127,
  },
  details: {
    alignItems: "center",
    flex: 1,
    marginVertical: 10,
    paddingHorizontal: 20,
    top: 30,
    width: "100%",
  },
  item: {
    alignItems: "center",
  },
  mediumText: {
    color: "#676767",
    fontFamily: "PoppinsBold",
    fontSize: 12,
    fontStyle: "normal",
    textAlign: "center",
  },
  nameContain: {
    alignItems: "center",
  },
  positionsContain: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  smallText: {
    color: colors.black,
    fontFamily: "InterMedium",
    fontSize: 10,
    textAlign: "center",
  },
  topContainer: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    width: "100%",
  },
});

export default CandidateProfileScreen;
