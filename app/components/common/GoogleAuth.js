import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import Button from "../Button";
// import { google } from "../assets/images";
// import googleAuth from "../api/google-auth";
// import useSubmit from "../hooks/useSubmit";
// import useAuth from "../auth/useAuth";

WebBrowser.maybeCompleteAuthSession();

function GoogleAuth(props) {
  const [token, setToken] = useState("");
  // const { submit: login, isSubmitting: loggingIn } = useSubmit(googleAuth);
  // const { logIn } = useAuth();

  const [request, response, promptAsync] = Google.useAuthRequest({
    responseType: "id_token",
    androidClientId:
      "444773972184-0tl2sd8aolit842r2qp04qo94gsgfegp.apps.googleusercontent.com",
    expoClientId:
      "224494757698-mdr3ndf0veafhbkqvd3f4gprbt42r16e.apps.googleusercontent.com",
    iosClientId:
      "224494757698-l8splfhkm1tknsdkpu90ma6lgsnv4br6.apps.googleusercontent.com",
  });

  // useEffect(() => {
  //   if (response) {
  //     setToken(response?.params?.id_token);
  //   }

  //   if (token) {
  //     loginWithGoogle();
  //   }
  // }, [response, token]);

  // const loginWithGoogle = async () => {
  //   const res = await login(token);

  //   if (res.ok) {
  //     logIn(res.data.data);
  //   }
  // };

  return (
    <Button
      backgroundColor="secondary"
      // disabled={loggingIn}
      // style={{ opacity: loggingIn ? 0.3 : 1 }}
      // icon={google}
      onPress={() => {
        promptAsync({ useProxy: true, showInRecents: true });
      }}
      // textColor="primary_1100"
      title="Continue with Google"
    />
  );
}

export default GoogleAuth;
