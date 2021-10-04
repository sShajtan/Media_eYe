import React from 'react';
import './CollectionBlock.css';
import { useHistory } from 'react-router-dom';

const CollectionBlock = (props) => {
  const {status} = props;
  let history = useHistory();


  return (
    <div className="marketplace_block_wrapper collection_block_wrapper">
      
      <div className="marketplace_block"onClick={() => history.push("/account/collections/collection")}>
        <div className="marketplace_block_img">
        <div className="marketplace_block_img_wrapper ">
          <img src="../../img/05china05.png" alt="marketplace block img" />
        </div>
        </div>
        <div className="collection_block_ava">
            <img src="../../img/creator_account_avatar.png" />
          </div>
        <div className="marketplace_block_info">
          <h6>Collection 1 [Title]</h6>
          <span>$345,000</span>
          <div className="marketplace_block_footer">
            <span>
              <img src="../../img/heart.svg" alt="heart" />
              1,2 k 
            </span>
            <span>1000 Items</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionBlock;
