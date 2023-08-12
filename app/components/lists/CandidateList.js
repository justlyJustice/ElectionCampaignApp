import { StyleSheet, FlatList } from "react-native";

import navigation from "../../navigation/rootNavigation";
import routes from "../../navigation/routes";

import Candidate from "../Candidate";

function CandidateList({ candidates }) {
  return (
    <FlatList
      data={candidates}
      keyExtractor={(candidate) => candidate._id.toString()}
      contentContainerStyle={{
        backgroundColor: "orange",
        width: "100%",
        padding: 10,
      }}
      renderItem={({ item }) => (
        <Candidate
          candidateName={item.name}
          contestingParty={item.party}
          onPress={() => navigation.navigate(routes.CANDIDATE_PROFILE, item)}
          image={item.avatar}
        />
      )}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CandidateList;
