import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const authGoogle = async (navigate) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  try {
    await signInWithPopup(auth, provider);
    navigate("/dashboard/customers");
  } catch (error) {
    console.error(error.code, error.message, error.customData.email);
  }
};
