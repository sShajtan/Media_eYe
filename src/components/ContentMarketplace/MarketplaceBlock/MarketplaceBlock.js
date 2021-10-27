import React from 'react';
import { Link } from 'react-router-dom';
import './MarketplaceBlock.css';

const MarketplaceBlock = (props) => {
  const { product } = props;
  return (
    <div className="marketplace_block_wrapper">
      <Link
        to={{
          pathname: '/product',
          state: { product }
        }}
      >
        <div className="marketplace_block">
          <div className="marketplace_block_img">
            <div className="marketplace_block_img_wrapper ">
              <img
                src={
                  product
                    ? product.img
                      ? product.img[0]
                      : '../../img/marketplace_img.png'
                    : '../../img/marketplace_img.png'
                }
                alt="marketplace block"
              />
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
      </Link>
    </div>
  );
};

export default MarketplaceBlock;
