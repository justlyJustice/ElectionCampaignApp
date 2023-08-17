import { NavigationContainer } from "@react-navigation/native";

import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://c6b70cb1fe445aa4c92cdd84acadf943@o518596.ingest.sentry.io/4505699721478144",
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

import AppNavigator from "./app/navigation/AppNavigator";
import { navigationRef } from "./app/navigation/rootNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import useFont from "./app/hooks/useFont";
import LoadingScreen from "./app/screens/LoadingScreen";
import AuthProvider from "./app/auth/context";
import { useState } from "react";

const App = (props) => {
  const { fontsLoaded } = useFont();
  const [user, setUser] = useState(null);

  if (!fontsLoaded) return <LoadingScreen />;

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      <AuthProvider values={{ user, setUser }}>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
