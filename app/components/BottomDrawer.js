import React from "react";
import {
  FlatList,
  Image,
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import colors from "../config/colors";
import routes from "./app/navigation/routes";
import navigation from "./app/navigation/rootNavigation";

const items = [
  {
    id: 1,
    text: "My Account",
    route: "Account",
  },
  {
    id: 2,
    text: "View Candidates",
    route: "Candidates",
  },
  // {
  //   id: 3,
  //   text: "About App",
  //   route: "",
  // },
];

const Link = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.itemText}>{title}</Text>
  </TouchableOpacity>
);

function BottomDrawer({ modalVisible, setModalVisible }) {
  // console.log(navigation);

  return (
    <Modal
      statusBarTranslucent={true}
      animationType="slide"
      visible={modalVisible}
      transparent={true}
    >
      <View style={styles.overlay}>
        <View style={styles.drawer}>
          <Image
            source={require("../assets/images/Logo-2.png")}
            style={styles.image}
          />

          <View
            style={{
              alignItems: "center",
              top: 20,
              // justifyContent: "center",
            }}
          >
            <FlatList
              data={items}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    backgroundColor: "rgba(196, 196, 196, 0.2)",
                    height: 1,
                    width: "100%",
                  }}
                />
              )}
              renderItem={({ item }) => (
                <Link
                  title={item.text}
                  onPress={() => {
                    navigation.navigate(item.route);
                    setModalVisible(false);
                  }}
                />
              )}
            />
          </View>

          <TouchableWithoutFeedback
            style={{
              color: colors.light,
              bottom: 80,
              left: Platform.OS === "web" ? 600 : 300,
            }}
            onPress={() => setModalVisible(false)}
          >
            <MaterialCommunityIcons name="close" size={30} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    bottom: 0,
    flex: 1,
    height: "100%",
    left: 0,
    justifyContent: "flex-end",
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
    zIndex: 1,
  },
  drawer: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: "row",
    height: 150,
    justifyContent: "space-evenly",
    width: "100%",
  },
  image: {
    height: 80,
    marginHorizontal: 15,
    width: 80,
  },
  itemText: {
    fontSize: 12,
    fontWeight: "700",
    marginVertical: 3,
  },
});

export default BottomDrawer;
