import React from 'react';
import { NavLink } from 'react-router-dom';

const CreatorMenu = (props) => {
  return (
    <div className="creator_account_menu_wrapper">
      <div className="creator_account_menu">
        <button>
          <span>
            On sale <i>40</i>
          </span>
        </button>
        <button>
          <span>
            Owned <i>43</i>
          </span>
        </button>
        <button>
          <span>
            Created <i>72</i>
          </span>
        </button>
        <button>
          <span>
            Liked <i>39</i>
          </span>
        </button>
        <button>
          <span>Activity</span>
        </button>

        <NavLink to="/creator/collections">
          <span>Collections</span>
          <div className="line"></div>
        </NavLink>
      </div>
    </div>
  );
};

export default CreatorMenu;
