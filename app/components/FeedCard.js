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
      <>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{ uri: `${settings.imageUrl}/${image}` }}
            resizeMode="cover"
          />

          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>

            {subTitle && (
              <Text numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </Text>
            )}

            <View style={styles.bottomContent}>
              <Button
                onPress={onPress}
                backgroundColor="secondary"
                title="View Activity"
                textColor="medium"
                style={styles.btn}
              />
            </View>
          </View>
        </View>
      </>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  btn: {
    fontFamily: "InterBold",
    width: "40%",
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
    overflow: "hidden",
  },
  detailsContainer: {
    marginTop: 10,
    // textAlign: "center",
  },
  image: {
    width: "100%",
    height: 250,
  },
  subTitle: {
    color: colors.medium,
    fontFamily: "InterMedium",
    fontSize: 15,
    textAlign: "justify",
  },
  title: {
    fontFamily: "PoppinsBold",
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "justify",
    textTransform: "capitalize",
  },
});

export default FeedCard;
