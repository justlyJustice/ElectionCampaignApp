import { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import FeedCard from "../components/FeedCard";
import ScreenWrapper from "../components/ScreenWrapper";
import Text from "../components/Text";

import feedsApi from "../api/feeds";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

import routes from "../navigation/routes";
import colors from "../config/colors";
import ErrorComponent from "../components/ErrorComponent";

function FeedsScreen({ navigation }) {
  const {
    refetch,
    request: loadFeeds,
    data: feeds,
    loading,
    error,
  } = useApi(feedsApi.getAllFeeds);

  useEffect(() => {
    loadFeeds();
  }, []);

  if (error) return <ErrorComponent onPress={() => refetch()} />;

  return (
    <ScreenWrapper back>
      <ActivityIndicator visible={loading} />

      <>
        <View style={styles.topTextContain}>
          <Text style={styles.title}>Campaign Activities</Text>
          <Text style={styles.desc}>
            View past and ongoing campaign activities.
          </Text>
        </View>

        <>
          {feeds.map((feed) => (
            <FeedCard
              key={feed._id}
              title={feed.headline}
              subTitle={feed.description}
              onPress={() =>
                navigation.navigate(routes.FEED_DETAILS_SCREEN, feed)
              }
              image={feed.image}
            />
          ))}
        </>
      </>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  desc: {
    color: colors.medium,
    fontFamily: "Inter",
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 22,
    textAlign: "center",
  },
  topTextContain: {
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
});

export default FeedsScreen;
