import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import CandidateNavigator from "./CandidateNavigator";

// import {
//   tabScreenOptions,
//   headerOptionsStyle,
//   tabNavScreenOptions,
// } from "../styles";
import FeedsScreen from "../screens/FeedsScreen";

import LiveStreamButton from "./LiveStreamButton";
import { tabNavScreenOptions, tabScreenOptions } from "../styles";
import colors from "../config/colors";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        ...tabNavScreenOptions,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    ></Tab.Navigator>
  );
};

export default TabNavigator;
