import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';


const config = {
  apiKey: "AIzaSyAzELDGzoWlYzW4aDBZhKBqYNgOKt65kUI",
  authDomain: "profile-picture-a66b6.firebaseapp.com",
  databaseURL: "https://profile-picture-a66b6-default-rtdb.firebaseio.com",
  projectId: "profile-picture-a66b6",
  storageBucket: "profile-picture-a66b6.appspot.com",
  messagingSenderId: "429269887734",
  appId: "1:429269887734:web:a66e7a3f53e2611b81dad7",
  measurementId: "G-JSV57RHCGL"
};


initializeApp(config);
const storage = getStorage();
export { storage };





