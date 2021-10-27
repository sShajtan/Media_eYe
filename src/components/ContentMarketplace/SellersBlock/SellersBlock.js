import React from 'react';
import Heart from '../../Icons/Heart';
import Men from '../../Icons/Men';
import './SellersBlock.css';
import { Link } from 'react-router-dom';
const SellersBlock = (props) => {
  return (
    <div className="sellers_block_wrapper">
      <Link to="creator/on-sale">
        <div className="sellers_block">
          <img
            className="sellers_block_ava"
            src="../../img/sellers_ava.png"
            alt="avatar"
          />
          <div className="sellers_block_info">
            <h6>Artist_Title</h6>
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
      </Link>
    </div>
  );
};

export default SellersBlock;
