import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SideDrawer from "../components/SideDrawer";
import WelcomeScreen from "../screens/WelcomeScreen";

import colors from "../config/colors";
import { tabScreenOptions } from "../styles";
import CandidateNavigator from "./CandidateNavigator";
import FeedNavigator from "./FeedNavigator";
import LoginScreen from "../screens/admin/LoginScreen";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen component={WelcomeScreen} name="Welcome" />

      <Drawer.Screen name="Feeds" component={FeedNavigator} />

      <Drawer.Screen name="Candidates" component={CandidateNavigator} />

      <Drawer.Screen component={LoginScreen} name="Login" />

      <Drawer.Screen component={LoginScreen} name="FAQs" />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
