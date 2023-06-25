import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9ZmIzqy-s7sW-kEby07sIrsaCDCv13C8",
  authDomain: "netflix-6595a.firebaseapp.com",
  projectId: "netflix-6595a",
  storageBucket: "netflix-6595a.appspot.com",
  messagingSenderId: "608302218142",
  appId: "1:608302218142:web:2c07e6c6350d2e0f06b48f",
  measurementId: "G-6MWGYHJH1Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
