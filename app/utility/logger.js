import * as Sentry from "sentry-expo";

const log = (error) => {
  __DEV__ ? console.log(error) : Sentry.Native.captureException(error);
};

export default { log };
