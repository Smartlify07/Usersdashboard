import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const authFacebook = async (navigate) => {
  const provider = new FacebookAuthProvider();

  const auth = getAuth();
  try {
    await signInWithPopup(auth, provider);
    navigate("/dashboard/customers");
  } catch (error) {
    console.log(error.code, error.message);
  }
};
