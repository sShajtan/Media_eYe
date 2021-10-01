import React from 'react';
import './CollectionBlock.css';


const MarketplaceBlock = (props) => {
  const { id, activeToken } = props;
  return (
    <div className="marketplace_block_wrapper">
      <div className="marketplace_block">
        <div className="marketplace_block_img">
        <div className="marketplace_block_img_wrapper ">
          <img src="../../img/marketplace_img.png" alt="marketplace block img" />
        </div>
        </div>
        <div className="marketplace_block_info">
          <div>
            <h6>Demo Title, Demo Title</h6>
            {activeToken === '1155' ? <div>
              <label>Supply<input type="number" placeholder="10" /></label>
            </div> : null }
          </div>
          <div className="on_sale_in_checkbox">
                      <input id={id} type="checkbox" />
                      <label htmlFor={id}>
                        <span></span>
                      </label>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceBlock;
