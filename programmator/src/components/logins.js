// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
import Login from "./login";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-L0V3FYz7k6XyRHd9g0XKllcNA_CdKK8",
  authDomain: "login-nisb.firebaseapp.com",
  databaseURL: "https://login-nisb-default-rtdb.firebaseio.com",
  projectId: "login-nisb",
  storageBucket: "login-nisb.appspot.com",
  messagingSenderId: "229024370654",
  appId: "1:229024370654:web:17b7ce76b9ca065282574f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

Login.signUp.addEventListener('click', (e) => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
          username: username,
          email: email
      })
      alert('User created');
      // ...
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      alert(errorMessage);
  });
})

Login.login.addEventListener('click', (e)=>{
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
          last_login: dt,
      })
      // ...
      alert('User Logged in!!');
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
  });
})