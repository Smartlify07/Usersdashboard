import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();
export const updateUserProfile = async (name) => {
  try {
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
  } catch (error) {
    console.error(error);
  }
};
