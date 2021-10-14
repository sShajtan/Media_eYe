import React from 'react';
import { NavLink } from 'react-router-dom';
import './CreatorsBlockInfo.css';

const CreatorsBlockInfo = (props) => {
  const { link } = props;
  return (
    <div className="creator_block-info_wrapper">
      <NavLink to={link}>
        <div className="creator_block_info">
          <div className="creator_block_info_main">
            <div className="creator_block_info_img">
              <img src="img/avatar.png" alt="avatart" />
            </div>
            <div className="creator_block_info_text">
              <h6>Artist_Title</h6>
              <div>
                <span>
                  <img src="img/heart.svg" alt="heart" /> 1,2 k
                </span>
                <span>
                  <img src="img/men.svg" alt="heart" /> 555
                </span>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CreatorsBlockInfo;
