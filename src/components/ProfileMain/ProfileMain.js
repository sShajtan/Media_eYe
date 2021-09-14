import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ProfileMain.css';


const ProfileMain = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);



  return (
    <div className="profile_main">
            <div className="profile">
                <div className="container">
                
                </div>
            </div>
    </div>
  );
};

export default ProfileMain;
