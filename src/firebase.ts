import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Incolliamo i dati direttamente qui
const firebaseConfig = {
  apiKey: "AIzaSyDYuihh_yD6ubpGTIPPTmAXiu_JltPA5U4",
  authDomain: "gen-lang-client-0979281085.firebaseapp.com",
  projectId: "gen-lang-client-0979281085",
  storageBucket: "gen-lang-client-0979281085.firebasestorage.app",
  messagingSenderId: "292829250787",
  appId: "1:292829250787:web:4948b593da81e5c7b531d6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
