import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import AspirantsNavigator from "./AspirantsNavigator";
import CandidateDetailsScreen from "../screens/CandidateDetailsScreen";
import {
  tabScreenOptions,
  headerOptionsStyle,
  tabNavScreenOptions,
} from "../styles";
import FeedsScreen from "../screens/FeedsScreen";
import HeaderLeftIcon from "../components/HeaderLeftIcon";
import colors from "../config/colors";
import LiveStreamButton from "./LiveStreamButton";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={FeedsScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Live"
        component={CandidateDetailsScreen}
        options={{
          tabBarButton: () => <LiveStreamButton />,
        }}
      />
      <Tab.Screen
        name="Candidate"
        component={CandidateDetailsScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
