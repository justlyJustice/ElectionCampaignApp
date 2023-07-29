import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import Text from "./Text";
import colors from "../config/colors";

function FeedCard({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("../assets/images/candidate.jpg")}
          resizeMode="cover"
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>

          <Text style={styles.subTitle} numberOfLines={3}>
            {subTitle}
          </Text>

          {/* <View style={styles.bottomContent}>
            <Text>
              <Feather name="calendar" />
            </Text>
          </View> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bottomContent: {
    marginTop: 10,
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
  },
});

export default FeedCard;
