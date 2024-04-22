import React from "react";
import './Login.css'
const Login =()=>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
              <h1>Sign Up</h1>
              <div className="loginsignup-fields">
                <input type="text"placeholder=" Your Name" />
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Password" />
              </div>  
              <button>Continue</button>
              <p className="loginsignup-login">Already have account ? <span>Login here</span></p>
              <div className="loginsignup-agree">
                <input type="checkbox" />
                <p>By continuing, i agree to the terms of use & privacy policy </p>
              </div>
            </div>
        </div>
    )
}
export default Login