export default __DEV__
  ? "http://192.168.0.164:2023/api/v1"
  : "https://campaign-9ja-api.vercel.app/api/v1";

export const imageUrl = __DEV__
  ? "http://192.168.0.164:2023"
  : "https://campaign-9ja-api.vercel.app";
