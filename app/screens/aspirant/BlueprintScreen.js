import { useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";

import colors from "../../config/colors";

import Text from "../../components/Text";
import ScreenWrapper from "../../components/ScreenWrapper";
import useApi from "../../hooks/useApi";
import blueprintApi from "../../api/blueprint";
import ActivityIndicator from "../../components/ActivityIndicator";
import ErrorComponent from "../../components/ErrorComponent";
import settings from "../../config/settings";
import { splitTextToArray } from "../../utility/helpers";

function BlueprintScreen({ route }) {
  const { loading, data, error, refetch, request } = useApi(
    blueprintApi.getBlueprint
  );

  useEffect(() => {
    request();
  }, []);

  const displayContent = () => {
    if (data) {
      const blueprint = data[0];

      if (blueprint) {
        return (
          <>
            <View style={styles.topTextContain}>
              <Text style={styles.title}>Blueprint</Text>
              <Text style={styles.desc}>View candidate blueprint.</Text>
            </View>

            <Image
              source={{
                uri: `${settings.imageUrl}/${blueprint.image}`,
              }}
              resizeMode="cover"
              style={styles.image}
            />

            {/* <Markdown styles={styles.markdownStyles}>
              {blueprint.description}
            </Markdown> */}

            {splitTextToArray(blueprint.description).map((desc, i) => (
              <Text key={i} style={styles.description}>
                {desc}
              </Text>
            ))}
          </>
        );
      }
    }
  };

  console.log(loading);

  return (
    <ScreenWrapper back>
      {loading ? (
        <ActivityIndicator visible={loading} />
      ) : error ? (
        <ErrorComponent onPress={refetch} />
      ) : (
        displayContent()
      )}
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
  description: {
    color: "#676767",
    fontFamily: "Inter",
    fontSize: 15,
    marginVertical: 10,
    textAlign: "justify",
  },
  image: { borderRadius: 10, height: 249, marginBottom: 20, width: "100%" },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 22,
  },
  topTextContain: {
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default BlueprintScreen;
