import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3SdG4A9zYOJEyqaICYrw8i53f-cmqgaE",
    authDomain: "marrazzocake.firebaseapp.com",
    projectId: "marrazzocake",
    storageBucket: "marrazzocake.appspot.com",
    messagingSenderId: "345805967166",
    appId: "1:345805967166:web:34d9ba55910b155c71266f"
  };
  
  
const app = firebase.initializeApp(firebaseConfig);


export function getFirestore(){
    return firebase.firestore(app);
}