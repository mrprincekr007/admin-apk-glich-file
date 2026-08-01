import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACuULRrLXrOMgQl1ymqYjbI_3DvoLce94",
    authDomain: "glich-file.firebaseapp.com",
    databaseURL: "https://glich-file-default-rtdb.firebaseio.com",
    projectId: "glich-file",
    storageBucket: "glich-file.firebasestorage.app",
    messagingSenderId: "478287324189",
    appId: "1:478287324189:web:9b01db994f9898184fd2f4",
    measurementId: "G-WGXE522MSM"
};

const app = initializeApp(firebaseConfig);

let analytics = null;
try {
    analytics = getAnalytics(app);
} catch (e) {
    analytics = null;
}

const db = getDatabase(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
