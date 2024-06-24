import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import loginErrors from "./loginErrors";

const auth = getAuth();
export const loginWithEmail = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/dashboard/customers");
  } catch (error) {
    console.error(error);
    return loginErrors(error.code);
  }
};
