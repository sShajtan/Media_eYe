import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ProfileSettings.css';

const ProfileSettings = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);

  return (
    <div className="profile_settings_page">
      <h2>Account Security</h2>
      <div className="profile_settings_main">
        <div className="profile_settings_block">
          <div className="profile_settings_block_info">
            <img src="../../img/profile_settings/1.png" />
            <div>
              <h6>Google Authenticator</h6>
              <span>Protect your account and transactions.</span>
            </div>
          </div>
          <div className="profile_settings_block_buttons">
            <button className="profile_settings_unset">
              <img src="../../img/profile_settings/unset.png" />
              Unset
            </button>
            <button className="profile_settings_button">
              <span>Enable</span>
            </button>
          </div>
        </div>
        <div className="profile_settings_block">
          <div className="profile_settings_block_info">
            <img src="../../img/profile_settings/2.png" />
            <div>
              <h6>Email Address Verification</h6>
              <span>Protect your account and transactions.</span>
            </div>
          </div>
          <div className="profile_settings_block_buttons">
            <button className="profile_settings_unset">
              <img src="../../img/profile_settings/unset.png" />
              Unset
            </button>
            <button className="profile_settings_button">
              <span>Enable</span>
            </button>
          </div>
        </div>
        <div className="profile_settings_block">
          <div className="profile_settings_block_info">
            <img src="../../img/profile_settings/3.png" />
            <div>
              <h6>Login Password</h6>
              <span>Login password is used to log in to your account.</span>
            </div>
          </div>
          <div className="profile_settings_block_buttons">
            <button className="profile_settings_unset">
              <img src="../../img/profile_settings/unset.png" />
              Unset
            </button>
            <button className="profile_settings_button">
              <span>Enable</span>
            </button>
          </div>
        </div>
      </div>
      <button className="create_wallet">
        <span>Save Changes</span>
      </button>
    </div>
  );
};

export default ProfileSettings;
