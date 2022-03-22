import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBJ3UuZkvHdINbfkSBDNHUQwS186GntD-g",
    authDomain: "my-articles-e49dc.firebaseapp.com",
    projectId: "my-articles-e49dc",
    storageBucket: "my-articles-e49dc.appspot.com",
    messagingSenderId: "58049292763",
    appId: "1:58049292763:web:f9581d31abf0824018dffe"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);