import { getAuth, updatePhoneNumber } from "firebase/auth";

export const updateUserPhoneNumber = async (phone) => {
  const auth = getAuth();
  try {
    await updatePhoneNumber(auth.currentUser, {
      phoneNumber: phone,
    });
  } catch (error) {
    console.error(error);
  }
};
