import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.0.108:2023/api/v1",
    imageUrl: "http://192.168.0.108:2023/uploads",
  },
  staging: {
    apiUrl: "http://192.168.0.108:2023/api/v1",
    imageUrl: "http://192.168.0.108:2023/uploads",
  },
  prod: {
    apiUrl: "https://campaign-9ja-app-production.up.railway.app/api/v1",
    imageUrl: "https://campaign-9ja-app-production.up.railway.app/uploads",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;

  if (Constants.manifest.releaseChannel === "staging") return settings.staging;

  return settings.prod;
};

export default getCurrentSettings();
