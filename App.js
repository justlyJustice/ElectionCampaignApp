import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import { navigationRef } from "./app/navigation/rootNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import useFont from "./app/hooks/useFont";
import LoadingScreen from "./app/screens/LoadingScreen";

const App = (props) => {
  const { fontsLoaded } = useFont();

  if (!fontsLoaded) return <LoadingScreen />;

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
