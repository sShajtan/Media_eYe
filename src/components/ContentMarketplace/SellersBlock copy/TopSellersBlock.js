import React from 'react';
import './TopSellersBlock.css';

const TopSellersBlock = (props) => {
  return (
    <div className="top_sellers_block_wrapper">
      <div className="top_sellers_block">
        <img
          className="top_sellers_block_ava"
          src="../../img/sellers_ava.png"
          alt="avatar"
        />
        <div className="top_sellers_block_info">
          <h6>@nickname</h6>
          <span>
            <img src="../../img/cup.png" alt="cup" />
            0.053 ETH
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopSellersBlock;
