import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CandidateProfileScreen from "../screens/CandidateProfileScreen";
import BlueprintScreen from "../screens/aspirant/BlueprintScreen";
import CandidatesScreen from "../screens/aspirant/CandidatesScreen";
import FeedsScreen from "../screens/FeedsScreen";
import FeedDetailsScreen from "../screens/FeedDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feeds" component={FeedsScreen} />

      <Stack.Screen name="FeedDetails" component={FeedDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
