import { View, StyleSheet } from "react-native";

import FeedCard from "../components/FeedCard";
import ScreenWrapper from "../components/ScreenWrapper";

import colors from "../config/colors";

function FeedsScreen(props) {
  return (
    <ScreenWrapper>
      <FeedCard
        title="Visit to Southern Ijaw to see newly installed Caretaker..."
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt officia autem veniam obcaecati suscipit possimus voluptatibus. Alias magni molestiae amet!
        "
      />

      <FeedCard
        title="Visit to Southern Ijaw to see newly installed Caretaker..."
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt officia autem veniam obcaecati suscipit possimus voluptatibus. Alias magni molestiae amet!
        "
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 15,
  },
  heading: {
    color: colors.darkGreen,
    fontFamily: "PoppinsBold",
    fontSize: 22,
  },
});

export default FeedsScreen;
