import { Alert } from "react-native";
import { create } from "apisauce";

import authStorage from "../auth/storage";
import cache from "../utility/cache";

import baseURL from "../config/url";

const apiClient = create({
  baseURL,
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

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();

  if (!authToken) return;

  request.headers["x-auth-token"] = authToken;
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
