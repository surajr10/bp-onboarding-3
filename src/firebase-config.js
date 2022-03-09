import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBwZKU72NLCSsimpkJ59TuiF6dzIVvbY0s",
    authDomain: "bp-onboarding-3-3443f.firebaseapp.com",
    projectId: "bp-onboarding-3-3443f",
    storageBucket: "bp-onboarding-3-3443f.appspot.com",
    messagingSenderId: "713629583742",
    appId: "1:713629583742:web:2ddc53d2539910de954b2f",
    measurementId: "G-PK92JFJG6R"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

