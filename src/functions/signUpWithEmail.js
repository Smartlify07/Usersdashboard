import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import signUpErrors from "./signUpErrors";

const auth = getAuth();
const signUpWithEmail = async (email, password, handleStep) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    handleStep();
  } catch (error) {
    console.log(error);
    return signUpErrors(error.code);
  }
};

export default signUpWithEmail;
