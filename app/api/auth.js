import useAuth from "../auth/useAuth";
import client from "./client";

const login = async (values) => await client.post("/login", values);

export default {
  login,
};
