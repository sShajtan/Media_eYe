import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ProfileMain.css';


const ProfileMain = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);



  return (
    <div className="profile_main">
      <h2>Profile</h2>
            <div className="profile_main_inputs">
              <div>
                <label>Login</label>
                <input />
              </div>
              <div>
                <label>Full Name</label>
                <input />
              </div>
              <div>
                <label>Enter your Email</label>
                <input />
              </div>
              <div>
                <label>Website</label>
                <input />
              </div>
              <div>
                <label>Instagram</label>
                <input />
              </div>
              <div>
                <label>Twitter</label>
                <input />
              </div>
            </div>
            <button className="save"><span>Save</span></button>
    </div>
  );
};

export default ProfileMain;
