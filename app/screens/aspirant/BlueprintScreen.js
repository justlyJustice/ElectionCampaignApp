import { Image, View, ScrollView, StyleSheet } from "react-native";

import LinearBackground from "../../components/LinearBackground";
import Text from "../../components/Text";

import colors from "../../config/colors";

function BlueprintScreen({ route }) {
  return (
    <LinearBackground colors={[colors.primary, colors.darkGreen]}>
      <View style={styles.container}>
        <View style={styles.topTextContain}>
          <Text style={styles.title}>Blueprint</Text>
          <Text style={styles.desc}>Oyeinnoah Paris</Text>
        </View>

        <ScrollView style={styles.view}>
          {/* <Text
            style={{ color: , fontSize: 15, textAlign: "justify" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            voluptates ad hic. Quasi deleniti ea ratione optio reprehenderit eos
            rerum earum animi tenetur. Adipisci vel aperiam dolorem, aut
            laudantium ducimus suscipit qui voluptates molestias debitis
            reiciendis rem iste, asperiores impedit fugit vero ex ipsam maiores
          </Text> */}

          <Image
            source={require("../../assets/images/engineer.png")}
            style={{ height: 249, width: 250 }}
          />

          <Text
            style={{ color: "#676767", fontSize: 15, textAlign: "justify" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            voluptates ad hic. Quasi deleniti ea ratione optio reprehenderit eos
            rerum earum animi tenetur. Adipisci vel aperiam dolorem, aut
            laudantium ducimus suscipit qui voluptates molestias debitis
            reiciendis rem iste, asperiores impedit fugit vero ex ipsam maiores
          </Text>
        </ScrollView>
      </View>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    // top: 60,
  },
  desc: {
    color: colors.medium,
    fontFamily: "Inter",
    fontSize: 16,
  },
  text: {
    color: colors.white,
    fontSize: 12,
  },

  title: {
    fontFamily: "PoppinsBold",
    fontSize: 22,
  },
  topTextContain: {
    marginVertical: 20,
  },
  view: {
    paddingHorizontal: 20,
  },
});

export default BlueprintScreen;
