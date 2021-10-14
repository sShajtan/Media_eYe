import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { updateLoggedInUser } from '../../store/app/appSlice';
import EyeIcon from '../Icons/Eyeicon';
import './LogIn.css';

const rand = () => Math.random(0).toString(36).substr(2);
const generateToken = (length) =>
  (rand() + rand() + rand() + rand()).substr(0, length);

const LogIn = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin') {
      const token = generateToken();
      localStorage.setItem('token', token);
      dispatch(updateLoggedInUser(token));
      history.push('/nft-marketplace');
    }
  };
  return (
    <div className="login_page">
      <link
        href="https://fonts.googleapis.com/css?family=Droid+Sans"
        rel="stylesheet"
      ></link>
      <div className="login_left"></div>
      <div className="login_right">
        <div className="container">
          <div className="login_page_main">
            <button className="goBack_button" onClick={() => history.goBack()}>
              <span> &#8592;</span> GoBack
            </button>
            <h2>LOG IN</h2>
            <form className="login_form" onSubmit={onSubmit}>
              <div>
                <label>Enter your Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Enter your Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="show_password"
                >
                  <EyeIcon />
                </span>
              </div>
              <button type="submit">
                <span>Log In</span>
              </button>
            </form>
            <span>
              Have not an account yet ? &nbsp;
              <NavLink to="/signup"> Sign up</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
