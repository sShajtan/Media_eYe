import React from 'react';
import { NavLink } from 'react-router-dom';
import './CharityBtn.css';

const CharityBtn = (props) => {
  return (
    <div className="charity_btn_wrapper">
      <NavLink className="charity_btn" to="/charity-place">
        <span>
          {' '}
          <img src="../../img/charity.png" alt="charity" />
          Charity
        </span>
      </NavLink>
    </div>
  );
};

export default CharityBtn;
