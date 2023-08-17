import {
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../components/Text";
import LinearBackground from "../components/LinearBackground";
import Card from "../components/Card.js";

import items from "../data/candidateItemData";
import routes from "../navigation/routes";
import colors from "../config/colors";
import settings from "../config/settings";

function CandidateDetailsScreen({ navigation, route }) {
  const { candidate } = route.params;

  return (
    <LinearBackground colors={[colors.white, colors.white]}>
      <View style={{ alignSelf: "center" }}>
        <View style={styles.avatarView}>
          {candidate.avatar ? (
            <Image
              resizeMode="cover"
              source={{ uri: `${settings.imageUrl}/${candidate.avatar}` }}
              style={styles.candidateImage}
            />
          ) : (
            <MaterialCommunityIcons
              name="account"
              size={80}
              color={colors.light}
            />
          )}
        </View>
      </View>

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

        <TouchableHighlight style={{ width: "70%" }}>
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
        </TouchableHighlight>

        <FlatList
          data={items}
          contentContainerStyle={{
            columnGap: 2,
          }}
          keyExtractor={(individualItem) => individualItem.id.toString()}
          renderItem={({ item }) => (
            <Card
              cardColor={item.cardColor}
              icon={item.icon}
              text={item.text}
              onPress={() =>
                navigation.navigate(item.route, { user: route.params })
              }
            />
          )}
          numColumns={2}
        />
      </View>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  avatarView: {
    borderColor: colors.white,
    borderRadius: 90,
    borderWidth: 8,
    height: 180,
    overflow: "hidden",
    width: 180,
  },
  candidateDetailContain: {
    alignItems: "center",
    bottom: 40,
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
  containView: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    flex: 1,
    paddingTop: 40,
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
  item: {
    marginHorizontal: 18,
  },
  mediumText: {
    color: "#676767",
    fontSize: 10,
    textAlign: "center",
  },
  nameContain: {
    marginBottom: 15,
  },
  positionsContain: {
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  smallText: {
    color: colors.black,
    fontFamily: "InterMedium",
    fontSize: 12,
    textAlign: "center",
  },
  textContain: {
    marginVertical: 10,
    width: "100%",
  },
});

export default CandidateDetailsScreen;
