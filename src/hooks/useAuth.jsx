import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useAuth = () => {
  const { authenticated, signUp, user, loading, error, setError } =
    useContext(AuthContext);
  return { authenticated, signUp, user, loading, error, setError };
};

export default useAuth;
