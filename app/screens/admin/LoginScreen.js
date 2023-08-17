import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import colors from "../../config/colors";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/forms";

import LinearBackground from "../../components/LinearBackground";

import routes from "../../navigation/routes";

import authApi from "../../api/admin";

import useSubmit from "../../hooks/useSubmit";
import useAuth from "../../auth/useAuth";
import ScreenWrapper from "../../components/ScreenWrapper";

const validationSchema = Yup.object().shape({
  handle: Yup.string().required().label("Handle"),
  password: Yup.string().min(5).required().label("Password"),
});

function LoginScreen({ navigation }) {
  const {
    data,
    submit: login,
    isSubmitting: loading,
    errorMessage,
    isError,
  } = useSubmit(authApi.login);
  const { logIn } = useAuth();

  const handleSubmit = async (values, { resetForm }) => {
    login(values);

    if (data) console.log(data);
  };

  return (
    <ScreenWrapper back>
      <View
        style={{
          alignItems: "center",
          // backgroundColor: "red",
          // flex: 1,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/Logo-2.png")}
          style={styles.logo}
        />
        <ErrorMessage visible={isError} error={errorMessage} />
        <Form
          initialValues={{ handle: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage visible={isError} error={errorMessage} />

          <FormField name="handle" placeholder="Your handle" width="90%" />

          <FormField
            name="password"
            placeholder="Password"
            width="90%"
            secureTextEntry
          />

          <SubmitButton
            backgroundColor={loading ? "lightWhite" : "secondary"}
            disabled={loading}
            style={styles.loginButton}
            textColor="medium"
            title="Login Account"
          />
        </Form>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },
  newUserText: {
    color: colors.white,
    fontSize: 13,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  loginButton: {
    // backgroundColor: colors.secondary,
    marginVertical: 15,
    width: "90%",
  },
  logo: {
    height: 200,
    width: 200,
  },
});

export default LoginScreen;
