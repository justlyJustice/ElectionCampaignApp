import { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import ActivityIndicator from "../../components/ActivityIndicator";
import Button from "../../components/Button";
import CandidateList from "../../components/lists/CandidateList";
import ScreenWrapper from "../../components/ScreenWrapper";
import Text from "../../components/Text";

import aspirantApi from "../../api/aspirant";
import colors from "../../config/colors";

import useApi from "../../hooks/useApi";

function CandidatesScreen() {
  const {
    request: loadCandidates,
    data: candidates,
    loading,
    error,
  } = useApi(aspirantApi.getAspirants);

  useEffect(() => {
    loadCandidates();
  }, []);

  if (error) return <ErrorComponent onPress={() => refetch()} />;

  return (
    <>
      <ActivityIndicator visible={loading} />

      <ScreenWrapper back>
        <View style={styles.container}>
          <View style={styles.topTextContain}>
            <Text style={styles.title}>Election Candidate</Text>
            <Text style={styles.desc}>
              View candidate political profile, previous achievements and more.
            </Text>
          </View>

          <View style={styles.candidatsContaner}>
            <CandidateList candidates={candidates} />
          </View>
        </View>
      </ScreenWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 22,
  },
  desc: {
    color: colors.medium,
    fontFamily: "Inter",
    fontSize: 16,
    textAlign: "center",
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

export default CandidatesScreen;
