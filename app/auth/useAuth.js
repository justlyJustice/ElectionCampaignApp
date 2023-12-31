import jwtDecode from "jwt-decode";

import authStorage from "./storage";
import useUser from "../hooks/useUser";

const useAuth = () => {
  const { user, setUser } = useUser();

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};

export default useAuth;
