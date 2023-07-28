import client from "./client";

const register = (values) => client.post("/register", values);

export default {
  register,
};
