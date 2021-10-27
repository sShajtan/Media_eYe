import React from 'react';
import { NavLink } from 'react-router-dom';

const CreatorMenu = (props) => {
  return (
    <div className="creator_account_menu_wrapper">
      <div className="creator_account_menu">
        <NavLink to="/creator/on-sale">
          <span>
            On sale <i>40</i>
          </span>
          <div className="line"></div>
        </NavLink>
        <NavLink to="/creator/owned">
          <span>
            Owned <i>43</i>
          </span>
          <div className="line"></div>
        </NavLink>
        <NavLink to="/creator/created">
          <span>
            Created <i>72</i>
          </span>
          <div className="line"></div>
        </NavLink>
        <NavLink to="/creator/liked">
          <span>
            Liked <i>39</i>
          </span>
          <div className="line"></div>
        </NavLink>
        <NavLink to="/creator/activity">
          <span>Activity</span>
          <div className="line"></div>
        </NavLink>
        <NavLink to="/creator/collections">
          <span>Collections</span>
          <div className="line"></div>
        </NavLink>
        <NavLink to="/creator/events">
          <span>Events</span>
          <div className="line"></div>
        </NavLink>
      </div>
    </div>
  );
};

export default CreatorMenu;
