import React,{Component} from "react";
import '../css/login.css'

class Login extends Component{
    state={};
    render(){
        return(
            <div>

            
    <section id="title">
        <div class="container-fluid">
            <h1>Login/Sign Up</h1>
        </div>
      </section>

    <section id="box">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-4 sign-up">
                    <h2>Sign Up</h2>
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="E-mail"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="username"/>    
                    </div>
                    <div class="form-group col-md-6">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div class="form-group submit">
                        <input type="submit" id="signUp" name="signUp_submit" value="Sign Up"/>
                    </div>
                </div>
                <div class="col-lg-4 log-in">
                    <h2>Login</h2>
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="E-mail"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div class="form-group col-md-6 hidden">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div class="form-group submit">
                        <input type="submit" id="login" name="login" value="Login"/>                </div>
                    </div>
                </div>
                <div class="col-lg-2"></div>
        </div>
    </section>
    <script>
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
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

  signUp.addEventListener('click', (e) => {
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

login.addEventListener('click', (e)=>{
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
 </script>

</div>





        );
    }
}

export default Login;