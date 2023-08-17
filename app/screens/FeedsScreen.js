import { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Button from "../components/Button";
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

  return (
    <ScreenWrapper back style={styles.container}>
      {loading ? (
        <ActivityIndicator visible={loading} />
      ) : error ? (
        <ErrorComponent onPress={() => refetch()} />
      ) : (
        <>
          <View style={styles.container}>
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
          </View>
        </>
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  desc: {
    color: colors.medium,
    fontFamily: "Inter",
    fontSize: 16,
  },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 22,
  },
  topTextContain: {
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
});

export default FeedsScreen;
