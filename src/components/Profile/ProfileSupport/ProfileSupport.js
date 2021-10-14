import React from 'react';
import './ProfileSupport.css';

const ProfileSupport = (props) => {
  return (
    <div className="profile_support_page">
      <h2>Account Support</h2>
      <div className="profile_support_main">
        <div className="profile_support_topic">
          <label>Topic</label>
          <input />
        </div>
        <div className="profile_support_subject">
          <label>Subject</label>
          <input />
        </div>
        <div className="profile_support_description">
          <label>Description</label>
          <textarea rows="5"></textarea>
        </div>
      </div>
      <button className="create_wallet">
        <span>Send to support</span>
      </button>
      <button className="chat">
        <img src="../../img/chat.png" alt="chat_btn" />
      </button>
    </div>
  );
};

export default ProfileSupport;
