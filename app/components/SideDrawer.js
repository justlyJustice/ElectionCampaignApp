import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function SideDrawer(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default SideDrawer;
