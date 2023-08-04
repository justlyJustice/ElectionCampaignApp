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

function CandidatesScreen({ route }) {
  const {
    request: loadCandidates,
    data: candidates,
    loading,
    error,
  } = useApi(aspirantApi.getAspirants);

  useEffect(() => {
    loadCandidates();
  }, []);

  if (error)
    return (
      <>
        <Text>Couldn't get the list of candidates!.</Text>
        <Button title="Retry" onPress={loadCandidates} />
      </>
    );

  return (
    <>
      <ActivityIndicator visible={loading} />

      <ScreenWrapper>
        <View style={styles.container}>
          <Text style={styles.title}>View Candidates' Profile</Text>

          <View style={styles.candidatsContaner}>
            <CandidateList candidates={candidates} />
          </View>
        </View>
      </ScreenWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  candidatsContaner: {},
  container: {},
  title: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "PoppinsBold",
    // fontWeight: "700",
    lineHeight: 30,
    textAlign: "center",
  },
});

export default CandidatesScreen;
