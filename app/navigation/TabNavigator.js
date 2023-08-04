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
    >
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
        options={{
          ...tabScreenOptions,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color, focused }) => (
            <Feather
              name="home"
              size={size}
              color={focused ? colors.olive : colors.medium}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Candidate"
        component={CandidateNavigator}
        options={{
          ...tabScreenOptions,
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, focused }) => (
            <Feather
              name="user"
              size={size}
              color={focused ? colors.olive : colors.medium}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
