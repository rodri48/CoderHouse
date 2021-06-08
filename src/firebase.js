import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCzhrrKBeFBz5IijigGPgeDwjdAWrE53Wk",
  authDomain: "e-commerce-coderhouse-9319c.firebaseapp.com",
  projectId: "e-commerce-coderhouse-9319c",
  storageBucket: "e-commerce-coderhouse-9319c.appspot.com",
  messagingSenderId: "600838081593",
  appId: "1:600838081593:web:9960ab984ced0f681651e8",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
