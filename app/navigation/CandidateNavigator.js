import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CandidateProfileScreen from "../screens/CandidateProfileScreen";
import BlueprintScreen from "../screens/aspirant/BlueprintScreen";
import CandidatesScreen from "../screens/aspirant/CandidatesScreen";
import PreviousAchievementsScreen from "../screens/aspirant/PreviousAchievementsScreen";

const Stack = createNativeStackNavigator();

const CandidateNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={CandidatesScreen} />

      <Stack.Screen
        name="CandidateProfile"
        component={CandidateProfileScreen}
      />

      <Stack.Screen name="Blueprint" component={BlueprintScreen} />

      {/* <Stack.Screen
        name="PreviousAchievements"
        component={PreviousAchievementsScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default CandidateNavigator;
