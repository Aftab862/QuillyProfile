
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

function Startfirebase(){
const firebaseConfig = {
    apiKey: "AIzaSyAzELDGzoWlYzW4aDBZhKBqYNgOKt65kUI",
    authDomain: "profile-picture-a66b6.firebaseapp.com",
    databaseURL: "https://profile-picture-a66b6-default-rtdb.firebaseio.com",
    projectId: "profile-picture-a66b6",
    storageBucket: "profile-picture-a66b6.appspot.com",
    messagingSenderId: "429269887734",
    appId: "1:429269887734:web:a66e7a3f53e2611b81dad7",
    measurementId: "G-JSV57RHCGL"
  };
 
  const app = initializeApp(firebaseConfig);
  return getDatabase(app)

}

  export {  Startfirebase as default}