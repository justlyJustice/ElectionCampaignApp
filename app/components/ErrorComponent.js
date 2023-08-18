import { StyleSheet, View } from "react-native";

import Button from "./Button";
import Text from "./Text";

function ErrorComponent({ text = "Retry", onPress }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "InterMedium", textAlign: "center" }}>
        Couldn't retrieve the campaign activities'.
      </Text>

      <Button title="Retry" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
    width: "100%",
  },
});

export default ErrorComponent;
