import { useContext } from "react";
import { AuthContext } from "../auth/context";

const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  return {
    user,
    setUser,
  };
};

export default useUser;
