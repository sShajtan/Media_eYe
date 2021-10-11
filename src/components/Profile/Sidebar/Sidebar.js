import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

var ReactDOM = require('react-dom');

const Sidebar = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);
  const [fixSidebar, setFixSidebar] = useState(true);
  const mobileLinks = useRef(null);

  const focus = () => {
    console.log(mobileLinks.current.children);
    const element = ReactDOM.findDOMNode(
      mobileLinks.current
    ).getElementsByClassName('active');
    console.log(element[0].focus());
  };

  const handleScrollMen = (e) => {
    if (
      window.innerHeight + window.scrollY >
      document.body.clientHeight - 40
    ) {
      setFixSidebar(false);
    } else {
      setFixSidebar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollMen);
    focus();
  });

  return (
    <div className="sidebar_wrapper ">
      <div className={fixSidebar ? 'sidebar' : 'sidebar fix'}>
        <div className="mobile_sidebar_links_wrapper">
          <div className="mobile_sidebar_links" ref={mobileLinks}>
            <NavLink to="/profile" exact className="mobile_profile_btn">
              Profile
            </NavLink>
            <NavLink to="/profile/wallet" exact className="mobile_profile_btn">
              Wallet
            </NavLink>
            <NavLink
              to="/profile/subscription"
              exact
              className="mobile_profile_btn"
            >
              Subscription
            </NavLink>
            <NavLink
              to="/profile/settings"
              exact
              className="mobile_profile_btn"
            >
              Settings
            </NavLink>
            <NavLink to="/profile/support" exact className="mobile_profile_btn">
              Support
            </NavLink>
          </div>
        </div>
        <div className="sidebar_avatar">
          <img src="../../../img/creator_account_avatar.png" />
          <h4>@Media_Creator</h4>
          <div className="download_sidebar">
            <label>
              <input type="file" />+
            </label>
          </div>
        </div>
        <div className="sidebar_links">
          <NavLink to="/profile" exact className="profile_main_btn profile_btn">
            Profile
          </NavLink>
          <NavLink
            to="/profile/wallet"
            exact
            className="profile_wallet profile_btn"
          >
            Wallet
          </NavLink>
          <NavLink
            to="/profile/subscription"
            exact
            className="profile_subscription profile_btn"
          >
            Subscription
          </NavLink>
          <NavLink
            to="/profile/settings"
            exact
            className="profile_settings profile_btn"
          >
            Account Settings
          </NavLink>
          <NavLink
            to="/profile/support"
            exact
            className="profile_support profile_btn"
          >
            Support
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
