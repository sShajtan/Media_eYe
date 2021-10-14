import React, { useRef, useEffect } from 'react';
import './AccountMenu.css';
import { NavLink } from 'react-router-dom';

var ReactDOM = require('react-dom');

const AccountMenu = () => {
  const Links = useRef(null);

  const focus = () => {
    const element = ReactDOM.findDOMNode(Links.current).getElementsByClassName(
      'active'
    );
    element[0].focus();
  };

  useEffect(() => {
    focus();
  });

  return (
    <div className="creator_account_menu_wrapper">
      <div className="creator_account_menu" ref={Links}>
        <NavLink exact to="/account/minted">
          <span>Minted </span>
          <div className="line"></div>
        </NavLink>
        <NavLink exact to="/account/purchased">
          <span>NFTs Purchased</span>
          <div className="line"></div>
        </NavLink>
        <NavLink exact to="/account/currently">
          <span>Owned NFTs</span>
          <div className="line"></div>
        </NavLink>
        <NavLink exact to="/account/campaign">
          <span>Campaign</span>
          <div className="line"></div>
        </NavLink>
        <NavLink exact to="/account/favorites">
          <span>Favorites</span>
          <div className="line"></div>
        </NavLink>
        <NavLink exact to="/account/collections">
          <span> Collections</span>
          <div className="line"></div>
        </NavLink>
        <NavLink exact to="/account/content">
          <span>Content</span>
          <div className="line"></div>
        </NavLink>
      </div>
    </div>
  );
};

export default AccountMenu;
