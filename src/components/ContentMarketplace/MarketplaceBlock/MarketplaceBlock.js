import React from 'react';
import './MarketplaceBlock.css';

const MarketplaceBlock = () => {
  return (
    <div className="marketplace_block_wrapper">
      <div className="marketplace_block">
        <div className="marketplace_block_img">
          <div className="marketplace_block_img_wrapper ">
            <img src="../../img/marketplace_img.png" alt="marketplace block" />
          </div>
        </div>
        <div className="marketplace_block_info">
          <h6>Demo Title, Demo Title</h6>
          <a href="/">@user123</a>
          <div className="marketplace_block_footer">
            <span>
              <img src="../../img/heart.svg" alt="heart" />
              1,2 k
            </span>
            <span className="count">0.053 ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceBlock;
