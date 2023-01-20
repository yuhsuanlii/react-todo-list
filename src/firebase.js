import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTQAOhzTR1xxM5c__8T85pEY0t17Pmf5U",
    authDomain: "react-todo-list-f0248.firebaseapp.com",
    projectId: "react-todo-list-f0248",
    storageBucket: "react-todo-list-f0248.appspot.com",
    messagingSenderId: "964861238637",
    appId: "1:964861238637:web:8ebde64deda0d133b68e64",
    measurementId: "G-V60HSB8R1R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);