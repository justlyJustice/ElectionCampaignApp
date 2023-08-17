import { View, TextInput, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppTextInput({ width = "100%", placeholderTextColor, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        placeholderTextColor={[colors.white, placeholderTextColor]}
        style={{ fontFamily: "Inter" }}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightWhite,
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 15,
    padding: 8,
  },
});

export default AppTextInput;
