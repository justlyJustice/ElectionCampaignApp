import { StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

const HeaderLeftIcon = () => {
  return <Feather style={styles.icon} name="home" />;
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    marginLeft: 20,
  },
});

export default HeaderLeftIcon;
