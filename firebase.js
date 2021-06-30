import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_2xD9AjuKmORc7DI0iWQru-FQ0UyCUas",
  authDomain: "facebook-clone-test-95ff1.firebaseapp.com",
  projectId: "facebook-clone-test-95ff1",
  storageBucket: "facebook-clone-test-95ff1.appspot.com",
  messagingSenderId: "471965529580",
  appId: "1:471965529580:web:65c37b53c03eafaa7ebcc9",
  measurementId: "G-QX41YQ4C0G",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
