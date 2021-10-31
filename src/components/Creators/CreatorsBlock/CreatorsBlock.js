import React from 'react';
import { NavLink } from 'react-router-dom';
import Heart from '../../Icons/Heart';
import Men from '../../Icons/Men';
import './CreatorsBlock.css';

const CreatorsBlock = (props) => {
  const { link } = props;
  return (
    <div className="creator_block_wrapper">
      <NavLink to={link}>
        <div className="creator_block">
          <div className="creator_block_header">
            <img src="../../img/creators_block_header.png" />
          </div>
          <div className="creators_block_ava">
            <img src="../../img/sellers_ava.png" alt="avatar" />
          </div>
          <div className="creator_block_content">
            <h6>Username</h6>
            <div>
              <span>
                <Heart />
                1,2 k
              </span>
              <span>
                <Men />
                555
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CreatorsBlock;
