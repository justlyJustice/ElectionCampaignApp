import { Image, View, StyleSheet, TouchableOpacity } from "react-native";

import Text from "../components/Text";

import colors from "../config/colors";
import AppButton from "./Button";

function SideDrawer(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Logo-2.png")}
        style={styles.logo}
      />

      <View style={styles.drawerItems}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>View Candidate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Campaign Activities</Text>
        </TouchableOpacity>

        <View style={styles.hr} />

        <TouchableOpacity
          style={[styles.item, { backgroundColor: colors.darkGreen }]}
        >
          <Text style={[styles.text, { color: colors.white }]}>
            Admin Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.item, { backgroundColor: colors.darkGreen }]}
        >
          <Text style={[styles.text, { color: colors.white }]}>FAQs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  drawerItems: {
    alignItems: "center",
    marginTop: 20,
  },
  hr: {
    borderColor: colors.light,
    borderWidth: 0.5,
    marginVertical: 10,
    width: "100%",
  },
  item: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    marginVertical: 10,
    padding: 5,
    paddingHorizontal: 20,
    width: "100%",
  },
  logo: {
    alignSelf: "center",
    height: 140,
    width: 140,
  },
  text: {
    fontFamily: "InterMedium",
    fontSize: 15,
  },
});

export default SideDrawer;
