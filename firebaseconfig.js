import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDlQaQ4xhIlHO_HpzfOu7UIxPa_ob-QZg",
  authDomain: "boligo-login.firebaseapp.com",
  projectId: "boligo-login",
  storageBucket: "boligo-login.appspot.com",
  messagingSenderId: "39402990294",
  appId: "1:39402990294:web:abb90e8eeccadeb178b777",
  measurementId: "G-T7C7TK75KC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
