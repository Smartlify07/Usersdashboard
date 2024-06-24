// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCN44WLqbedvnP5t0s0aE_EfdjnyU8GJBs",
  authDomain: "usersdashboard-f782a.firebaseapp.com",
  projectId: "usersdashboard-f782a",
  storageBucket: "usersdashboard-f782a.appspot.com",
  messagingSenderId: "327205700169",
  appId: "1:327205700169:web:75d13adba703e1608f7598",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
