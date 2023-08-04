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

function FeedsScreen({ navigation }) {
  const {
    request: loadFeeds,
    data: feeds,
    loading,
    error,
  } = useApi(feedsApi.getAllFeeds);

  useEffect(() => {
    loadFeeds();
  }, []);

  if (error)
    return (
      <ScreenWrapper>
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontFamily: "InterBold" }}>
            Couldn't get the list of candidates!.
          </Text>

          <Button title="Retry" onPress={() => loadFeeds()} />
        </View>
      </ScreenWrapper>
    );

  return (
    <ScreenWrapper>
      <ActivityIndicator visible={loading} />

      <View style={styles.container}>
        <View style={styles.topTextContain}>
          <Text style={styles.title}>Campaign Feed</Text>
          <Text style={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>

        <ScrollView>
          {feeds.map((feed) => (
            <FeedCard
              key={feed._id}
              title={feed.headline}
              subTitle={feed.description}
              onPress={() =>
                navigation.navigate(routes.FEED_DETAILS_SCREEN, feed)
              }
            />
          ))}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
    marginVertical: 20,
  },
});

export default FeedsScreen;
