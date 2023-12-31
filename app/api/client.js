import { Alert } from "react-native";
import { create } from "apisauce";

import cache from "../utility/cache";

import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
});

apiClient.axiosInstance.interceptors.request.use(null, (error) => {
  const expectedError =
    error.response &&
    error.respons.status >= 400 &&
    error.response.status < 500;

  if (!expectedError || !error.response) {
    Alert.alert(`Internal Server Error`, `Something went wrong`);
  }

  return Promise.reject(error);
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
