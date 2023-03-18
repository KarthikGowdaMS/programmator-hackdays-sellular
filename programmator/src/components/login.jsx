import React,{Component} from "react";
import '../css/login.css'

class Login extends Component{
    state={};
    render(){
        return(
            <div className="login">

            
    <section id="title">
        <div className="container-fluid">
            <h1>Login/Sign Up</h1>
        </div>
      </section>

    <section id="box">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-4 sign-up">
                    <h2>Sign Up</h2>
                    <div className="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="E-mail"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="username"/>    
                    </div>
                    <div className="form-group col-md-6">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="form-group submit">
                        <input type="submit" id="signUp" name="signUp_submit" value="Sign Up"/>
                    </div>
                </div>
                <div className="col-lg-4 log-in">
                    <h2>Login</h2>
                    <div className="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="E-mail"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="form-group col-md-6 hidden">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="form-group submit">
                        <input type="submit" id="login" name="login" value="Login"/>                </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
        </div>
    </section>
</div>
        );
    }
}

export default Login;