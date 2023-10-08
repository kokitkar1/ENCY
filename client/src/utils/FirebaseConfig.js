import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCwNtSXcjDxiJ5NzxH5JGX3NehizAwZ0aI",
    authDomain: "ency-a2031.firebaseapp.com",
    projectId: "ency-a2031",
    storageBucket: "ency-a2031.appspot.com",
    messagingSenderId: "273273024609",
    appId: "1:273273024609:web:9cca79395a1d1f72077a20",
    measurementId: "G-5KWSJ50VCW"
  };


  const app = initializeApp(firebaseConfig)

  export const firebaseAuth = getAuth(app)