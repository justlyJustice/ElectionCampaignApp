import { NavigationContainer } from "@react-navigation/native";

import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://aefd44c6cc39339aa24d0ff91d2035f0@o518596.ingest.sentry.io/4505699540074496",
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

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
