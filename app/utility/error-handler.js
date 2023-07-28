import LogRocket from "@logrocket/react-native";

const handleNativeError = (errorString) => {
  LogRocket.captureException(errorString);
};

const handleJSError = (error, isFatal) => {
  LogRocket.captureException({ error, isFatal });
};

export default {
  handleNativeError,
  handleJSError,
};
