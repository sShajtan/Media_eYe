import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionSingleBlock.css';

const CollectionSingleBlock = (props) => {
  const { count, product } = props;
  return (
    <div className="marketplace_block_wrapper">
      <div className="marketplace_block">
        <div className="marketplace_block_img">
          <Link
            to={{
              pathname: '/product',
              state: { product }
            }}
          >
            <div className="marketplace_block_img_wrapper ">
              <img
                src={
                  product ? product.img[0] : '../../../img/marketplace_img.png'
                }
                alt="marketplace block"
              />
            </div>
          </Link>
        </div>
        <div className="marketplace_block_info">
          <Link
            to={{
              pathname: '/product',
              state: { product }
            }}
          >
            <h6>
              Demo Title, Demo Title <span>{count}</span>
            </h6>
          </Link>
          <a href="/">@user123</a>
          <div className="marketplace_block_footer">
            <span>
              <img src="../../../img/heart.svg" alt="heart" />
              1,2 k
            </span>
            <span className="count">0.053 ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSingleBlock;
