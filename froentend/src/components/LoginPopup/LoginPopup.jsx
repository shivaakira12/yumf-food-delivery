import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";
const LoginPopup = ({ setshowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setshowLogin(false)}
          ></img>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required></input>
          )}

          <input type="email" placeholder="Your email" required></input>
          <input type="password" placeholder="Your password" required></input>
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required></input>
          <p>I agree to the privacy policy and terms of service.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Don't have a Yumf account yet ?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have account ?{" "}
            <span onClick={() => setCurrState("Login")}> Login here </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
