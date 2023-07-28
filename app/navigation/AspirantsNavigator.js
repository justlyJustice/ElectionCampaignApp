import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CandidateDetailsScreen from "../screens/CandidateDetailsScreen";

const Stack = createNativeStackNavigator();

const AspirantsNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={CandidateDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AspirantsNavigator;
