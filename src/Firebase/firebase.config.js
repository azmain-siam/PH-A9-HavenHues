import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVxEYThE8bZQZAoSS1HkfKKudPhMRpkQk",
  authDomain: "a9-react-auth.firebaseapp.com",
  projectId: "a9-react-auth",
  storageBucket: "a9-react-auth.appspot.com",
  messagingSenderId: "974876829086",
  appId: "1:974876829086:web:e7231662ea09ae9242a28f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
