import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBjnt0Wt9i3xrdNyOvIOGRYVpwJuuzdFEY",
    authDomain: "instagram-app-fe437.firebaseapp.com",
    projectId: "instagram-app-fe437",
    storageBucket: "instagram-app-fe437.appspot.com",
    messagingSenderId: "235618774830",
    appId: "1:235618774830:web:d289bac2168c25b8ba54bf"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
