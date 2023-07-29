import React, { useState } from "react";
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../components/Text";
import LinearBackground from "../components/LinearBackground";
// import Card from "../components/Card";

import items from "../data/candidateItemData";

import colors from "../config/colors";
// import ViewImageModal from "../components/ViewImageModal";

function CandidateDetailsScreen({ navigation, route }) {
  const [visible, setVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState("");

  const closeImageModal = () => {
    setImageModalVisible(false);
    setImageUri("");
  };

  const openImageModal = (imageUri) => {
    setImageModalVisible(true);
    setImageUri(imageUri);
  };

  return (
    <LinearBackground colors={[colors.primary, colors.darkGreen]}>
      <View style={styles.containView}>
        <View style={styles.candidateDetailContain}>
          <View
            style={{ alignItems: "center", backgroundColor: "red", top: -40 }}
          >
            <TouchableWithoutFeedback
            // onPress={() => openImageModal(route.params.avatar)}
            >
              <Image
                source={require("../assets/images/candidate.jpg")}
                style={styles.candidateImage}
              />
              {/* {route.params.avatar ? (
                <Image
                  source={{ uri: route.params.avatar }}
                  style={styles.candidateImage}
                />
              ) : (
                <MaterialCommunityIcons
                  name="account"
                  size={80}
                  color={colors.light}
                />
              )} */}
            </TouchableWithoutFeedback>

            <View style={styles.nameContain}>
              <MaterialCommunityIcons
                name="account"
                size={20}
                color="rgba(62, 217, 8, 0.2)"
              />
              <Text style={styles.candidateName}>Great Joshua Macaiva</Text>
            </View>

            <View style={styles.positionsContain}>
              <View style={styles.item}>
                <Text style={styles.smallText}>Current Position:</Text>
                <Text style={styles.mediumText}>Minister</Text>
              </View>

              <View style={styles.item}>
                <Text style={styles.smallText}>Vying for:</Text>
                <Text style={styles.mediumText}>Deputy Governor</Text>
              </View>

              <View style={styles.item}>
                <Text style={styles.smallText}>Party:</Text>
                <Text style={styles.mediumText}>APC</Text>
              </View>
            </View>
          </View>

          <TouchableWithoutFeedback>
            <View style={styles.fullCard}>
              <View>
                <Text style={styles.fullText}>Profile</Text>
                <Text style={styles.descriptionText} numberOfLines={4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nemo porro suscipit repellat officiis iusto unde temporibus,
                  ullam qui. Tempora eos atque suscipit omnis voluptatum
                  sapiente aliquam vitae qui eveniet?
                </Text>
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

          <View
            style={{ backgroundColor: "red", height: "38%", width: "100%" }}
          >
            <FlatList
              data={items}
              keyExtractor={(individualItem) => individualItem.id.toString()}
              renderItem={({ item }) => (
                <View
                  cardColor={item.cardColor}
                  icon={item.icon}
                  text={item.text}
                  style={styles.fullCard}
                  // onPress={() =>
                  //   navigation.navigate(item.route, { user: route.params })
                  // }
                />
              )}
              // numColumns={2}
            />
          </View>
        </View>
      </View>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  candidateDetailContain: {
    backgroundColor: "orange",
    bottom: 40,
    paddingHorizontal: 30,
    width: "80%",
  },
  candidateName: {
    fontFamily: "Rubik",
    color: colors.darkGreen,
    fontSize: 22,
    fontWeight: "700",
  },
  candidateImage: {
    borderColor: colors.white,
    borderRadius: 75,
    borderWidth: 8,
    height: 150,
    width: 150,
  },
  containView: {
    alignItems: "center",
    backgroundColor: colors.white,
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 154,
  },
  descriptionText: {
    color: "#676767",
    fontSize: 10,
    fontWeight: "bold",
    fontStyle: "normal",
    width: 127,
  },
  fullCard: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: "rgba(120, 255, 72, 0.2)",
    borderRadius: 10,
    borderWidth: 2,
    elevation: 8,
    flexDirection: "row",
    height: 100,
    justifyContent: "space-between",
    marginVertical: 20,
    width: "100%",
    padding: 15,
  },
  fullText: {
    color: colors.darkGreen,
    fontFamily: "Rubik",
    fontSize: 15,
    fontWeight: "bold",
  },
  item: {
    // alignItems: "center",
    marginHorizontal: 15,
  },
  mediumText: {
    color: "#676767",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
  },
  nameContain: {
    flexDirection: "row",
    alignItems: "center",
  },
  positionsContain: {
    alignSelf: "flex-start",
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "85%",
  },
  smallText: {
    color: colors.black,
    fontSize: 10,
    fontWeight: "700",
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default CandidateDetailsScreen;
