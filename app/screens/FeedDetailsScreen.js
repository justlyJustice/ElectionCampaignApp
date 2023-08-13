import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";

import Text from "../components/Text";
import ScreenWrapper from "../components/ScreenWrapper";
import settings from "../config/settings";

function FeedDetailsScreen({ route }) {
  const feed = route.params;

  return (
    <ScreenWrapper>
      <Image
        style={styles.image}
        source={
          feed.image
            ? { uri: `${settings.imageUrl}/${feed.image}` }
            : require("../assets/images/candidate.jpg")
        }
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{feed.headline}</Text>
        <Text style={styles.description}>{feed.description}</Text>
        <View style={styles.userContainer}>
          {/* <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          /> */}
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  description: {
    color: colors.medium,
    fontFamily: "Inter",
    fontSize: 15,
    marginVertical: 10,
    textAlign: "justify",
  },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 24,
    lineHeight: 24,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default FeedDetailsScreen;
