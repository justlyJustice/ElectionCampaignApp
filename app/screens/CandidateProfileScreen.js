import {
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../components/Text";
import LinearBackground from "../components/LinearBackground";
import Card from "../components/Card.js";

import items from "../data/candidateItemData";
import routes from "../navigation/routes";
import colors from "../config/colors";
import settings from "../config/settings";
import ScreenHeader from "../components/ScreenHeader";
import Icon from "../components/Icon";

function CandidateDetailsScreen({ navigation, route }) {
  const { candidate } = route.params;

  return (
    <LinearBackground colors={[colors.white, colors.secondary]}>
      <>
        <Icon iconName="arrow-left" onPress={() => navigation.goBack()} />

        <View style={styles.avatarView}>
          <Image
            resizeMode="cover"
            source={{ uri: `${settings.imageUrl}/${candidate.avatar}` }}
            style={styles.candidateImage}
          />
        </View>
      </>

      <View style={styles.containView}>
        <View style={styles.nameContain}>
          <Text style={styles.candidateName}>{candidate.name}</Text>

          <View style={styles.positionsContain}>
            <View style={styles.item}>
              <Text style={styles.smallText}>Vying for:</Text>
              <Text style={styles.mediumText}>
                {candidate.aspiring_position}
              </Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.smallText}>Party:</Text>
              <Text style={styles.mediumText}>{candidate.party}</Text>
            </View>
          </View>
        </View>

        <Pressable
          style={{ width: "80%" }}
          onPress={() =>
            navigation.navigate(routes.PERSONAL_PROFILE_SCREEN, {
              profile: candidate.profile,
            })
          }
        >
          <View style={styles.fullCard}>
            <View style={{ width: "70%" }}>
              <Text style={styles.fullText}>Personal Profile</Text>
              <Text style={styles.descriptionText} numberOfLines={4}>
                View the candidate profile shows more of the contesting
                candidate.
              </Text>
            </View>

            <View>
              <MaterialCommunityIcons
                name="account-circle"
                size={70}
                color={colors.darkGreen}
              />
            </View>
          </View>
        </Pressable>

        <View style={styles.cardList}>
          {items.map((item) => (
            <Card
              cardColor={item.cardColor}
              icon={item.icon}
              text={item.text}
              key={item.id}
              onPress={() => navigation.navigate(item.route, candidate)}
              width="45%"
            />
          ))}
        </View>
      </View>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  avatarView: {
    alignSelf: "center",
    borderColor: colors.white,
    borderRadius: 90,
    borderWidth: 8,
    height: 160,
    overflow: "hidden",

    width: 160,
    zIndex: 30,
  },
  candidateDetailContain: {
    alignItems: "center",
    bottom: 90,
    flex: 1,
    width: "100%",
    zIndex: -1,
  },
  candidateName: {
    fontFamily: "PoppinsBold",
    fontSize: 20,
    marginTop: 5,
  },
  candidateImage: {
    height: "100%",
    width: "100%",
  },
  cardList: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "83%",
  },
  containView: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    flex: 1,
    paddingTop: 40,
    top: -70,
    width: "100%",
  },
  descriptionText: {
    fontFamily: "Inter",
    fontSize: 11,
  },
  fullCard: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 2,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 15,
    paddingHorizontal: 20,
  },
  fullText: {
    color: colors.darkGreen,
    fontFamily: "PoppinsBold",
    fontSize: 18,
  },

  mediumText: {
    color: "#676767",
    fontSize: 10,
    textAlign: "center",
  },
  nameContain: {
    alignItems: "center",
    marginBottom: 15,
    marginTop: 40,
    width: "100%",
  },
  positionsContain: {
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  smallCard: {
    width: "50%",
  },
  smallText: {
    color: colors.black,
    fontFamily: "InterMedium",
    fontSize: 12,
    textAlign: "center",
  },
});

export default CandidateDetailsScreen;
