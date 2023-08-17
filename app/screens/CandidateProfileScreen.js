import { useState } from "react";
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
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

  const [visible, setVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState("");

  return (
    <LinearBackground colors={[colors.white, colors.white]}>
      <View style={styles.containView}>
        <View style={styles.candidateDetailContain}>
          <View style={{ alignItems: "center", top: -40 }}>
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

            <View>
              <View style={styles.nameContain}>
                <Text style={styles.candidateName}>{candidate.name}</Text>
              </View>

              <View style={styles.positionsContain}>
                <View style={styles.item}>
                  <Text style={styles.smallText}>Current Position:</Text>
                  <Text style={styles.mediumText}>
                    {candidate.current_position}
                  </Text>
                </View>

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
          </View>

          <TouchableWithoutFeedback>
            <View style={styles.fullCard}>
              <View>
                <Text style={styles.fullText}>Profile</Text>
                <Text style={styles.descriptionText} numberOfLines={4}></Text>
              </View>

              <MaterialCommunityIcons
                name="account-circle"
                size={70}
                color="rgba(120, 255, 72, 0.2)"
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  left: 12,
                }}
              />
            </View>
          </TouchableWithoutFeedback>

          <View>
            <FlatList
              data={items}
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
        </View>
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
    width: "100%",
  },
  candidateName: {
    // color: colors.1,
    fontFamily: "PoppinsBold",
    fontSize: 20,
  },
  candidateImage: {
    height: "100%",
    width: "100%",
  },
  commentButton: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(229, 229, 229, 0.6)",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    padding: 2,
    width: 160,
  },
  commentIcon: {
    color: "rgba(229, 229, 229, 0.6)",
    fontSize: 15,
    marginRight: 8,
  },
  containView: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    position: "absolute",
    width: "100%",
    height: 700,
    left: 0,
    top: 154,
  },
  descriptionText: {
    color: "#676767",
    fontSize: 10,
    width: 127,
  },
  fullCard: {
    backgroundColor: colors.white,
    borderColor: "rgba(120, 255, 72, 0.2)",
    borderRadius: 10,
    borderWidth: 2,
    elevation: 8,
    flexDirection: "row",
    height: 100,
    marginVertical: 20,
    width: 248,
    padding: 15,
  },
  fullText: {
    color: colors.darkGreen,
    fontSize: 15,
  },
  item: {
    marginHorizontal: 15,
  },
  mediumText: {
    color: "#676767",
    fontSize: 10,
    textAlign: "center",
  },
  nameContain: {
    // flexDirection: "row",
    alignItems: "center",
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
});

export default CandidateDetailsScreen;
