import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";
import Button from "./Button";

import settings from "../config/settings";

function FeedCard({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={
            image
              ? { uri: `${settings.imageUrl}/${image}` }
              : require("../assets/images/candidate.jpg")
          }
          resizeMode="cover"
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>

          <Text style={styles.subTitle} numberOfLines={3}>
            {subTitle}
          </Text>

          <View style={styles.bottomContent}>
            <Button
              onPress={onPress}
              backgroundColor="secondary"
              title="View Feed"
              textColor="medium"
              style={styles.btn}
            />

            {/* <Feather name="arrow-right" size={20} />
            </Button> */}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bottomContent: {
    marginTop: 10,
  },
  btn: {
    // fontFamily: "InterBold",
    width: "40%",
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.medium,
    fontFamily: "InterMedium",
    fontSize: 15,
    textAlign: "justify",
  },
  title: {
    fontFamily: "PoppinsBold",
    textTransform: "capitalize",
  },
});

export default FeedCard;
