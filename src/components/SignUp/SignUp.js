import React, { useState, useRef, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./SignUp.css";

const SignUp = (props) => {
  let history = useHistory();
  return (
    <div className="signup_page">
    <link
        href="https://fonts.googleapis.com/css?family=Droid+Sans"
        rel="stylesheet"
      ></link>
        <div className="signup_left">
        </div>
        <div className="signup_right">
          <div className="container">
            <div className="signup_page_main">
              <a className="goBack_button" onClick={() => history.goBack()}>
                <span>	&#8592; </span> GoBack
              </a>
              <h2>SIGN UP</h2>
              <form className="signup_form">
                <div className="sign_up_col">
                  <div>
                    <label>Enter your Email</label>
                    <input type="email" />
                  </div>
                  <div className="sign_up_row_second">
                      <div>
                        <label>First Name</label>
                        <input type="text"/>
                      </div>
                      <div>
                        <label>Last Name</label>
                        <input type="text"/>
                      </div>
                  </div>
                  <div>
                      <label>Company</label>
                      <input type="text"/>
                  </div>
                </div>
                <div className="sign_up_col">
                  <div>
                    <label>Password</label>
                    <input type="password" />
                  </div>
                  <div>
                    <label>Confirm password</label>
                    <input type="password"/>
                  </div>
                  <div>
                    <label>I’m a</label>
                    <input type="text"/>
                  </div>
                </div>
              </form>
              <button type="submit" className="sign_up_btn"><span>SignUp</span></button>
              <div className="sign_up_soc_links">
                <button>
                  <img src="img/google_soc.png" />
                </button>
                <button>
                  <img src="img/facebook_soc.png" />
                </button>
              </div>
              <span>Already a member ? &nbsp;<NavLink to="/login">Log in</NavLink></span>
            </div>
          </div>
        </div>
  
    </div>
  );
};

export default SignUp;
