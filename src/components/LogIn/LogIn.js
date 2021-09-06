import React, { useState, useRef, useEffect } from "react";
import "./LogIn.css";
import { NavLink, useHistory } from "react-router-dom";

const LogIn = (props) => {
const [showPassword, setShowPassword] = useState(false);
let history = useHistory();
  return (
    <div className="login_page">
    <link
        href="https://fonts.googleapis.com/css?family=Droid+Sans"
        rel="stylesheet"
      ></link>
        <div className="login_left">
        </div>
        <div className="login_right">
          <div className="container">
            <div className="login_page_main">
              <a className="goBack_button" onClick={() => history.goBack()}>
                <span>	&#8592;</span> GoBack
              </a>
              <h2>LOG IN</h2>
              <form className="login_form">
                <div>
                  <label>Enter your Email</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Enter your Password</label>
                  <input type={showPassword ? "text" : "password" } />
                  <span onClick={()=>setShowPassword(!showPassword)} className="show_password"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.9998" cy="16.0001" r="4.33333" stroke="#A7A7A7" stroke-width="2"/>
                    <path d="M27.1991 14.9271C27.5828 15.4096 27.7746 15.6509 27.7746 16C27.7746 16.3491 27.5828 16.5904 27.1991 17.0729C25.465 19.2538 21.1047 24 16 24C10.8953 24 6.53501 19.2538 4.80088 17.0729C4.41723 16.5904 4.22541 16.3491 4.22541 16C4.22541 15.6509 4.41723 15.4096 4.80088 14.9271C6.53501 12.7462 10.8953 8 16 8C21.1047 8 25.465 12.7462 27.1991 14.9271Z" stroke="#A7A7A7" stroke-width="2"/>
                    </svg>
                    </span>            
                </div>
                <button type="submit" ><span>Log In</span></button>
              </form>
              <span>Have not an account yet ? &nbsp;<NavLink to="/signup"> Sign up</NavLink></span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default LogIn;
