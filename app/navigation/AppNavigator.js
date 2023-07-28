import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import SideDrawer from "../components/SideDrawer";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Feed" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
