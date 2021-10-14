import React from 'react';
import './MintedBlock.css';

const MintedBlock = (props) => {
  const { count } = props;
  return (
    <div className="marketplace_block_wrapper minted_block">
      <div className="marketplace_block">
        <div className="marketplace_block_img">
          <div className="marketplace_block_img_wrapper ">
            <img
              src="../../../img/marketplace_img.png"
              alt="marketplace block"
            />
          </div>
        </div>
        <div className="marketplace_block_info">
          <h6>
            Demo Title, Demo Title <span>{count}</span>
          </h6>
          <a href="/@user123">@user123</a>
          <div className="marketplace_block_footer"></div>
        </div>
      </div>
    </div>
  );
};

export default MintedBlock;
