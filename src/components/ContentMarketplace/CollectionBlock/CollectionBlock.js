import React, { useState } from 'react';
import './CollectionBlock.css';
import { Link } from 'react-router-dom';

const CollectionBlock = (props) => {
  const { collection } = props;
  const [like, setLike] = useState(false);

  return (
    <div className="collection_block_single_wrapper">
      <div className="collection_block_single">
        <Link to={'/account/collections/collection'}>
          <div className="collection_block_single_img">
            <div className="collection_block_single_img_wrapper">
              <img
                src={collection ? collection.img : '../../img/05china05.png'}
                alt="marketplace block"
              />
            </div>
          </div>
          <div className="collection_block_single_ava">
            <img
              src={collection ? collection.ava : '../../img/05china05.png'}
              alt="avatar"
            />
          </div>
          <div className="collection_block_single_info">
            <h6>Collection 1 [Title]</h6>
            <span>$345,000</span>
            <div
              className="collection_block_single_footer"
              onClick={(event) => event.preventDefault()}
            >
              <span>
                <div className="like_wrapper" onClick={() => setLike(!like)}>
                  <div
                    className={like ? 'scattering active' : 'scattering'}
                  ></div>
                </div>
                1,2 k
              </span>
              <span>1000 Items</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CollectionBlock;
