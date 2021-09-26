import React from 'react';
import './CollectionBlock.css';

const CollectionBlock = (props) => {
  const {status} = props;



  const statusShow = () => {
    if(status === "check"){
      return <img className="status" src="../img/check.png" />
    } else if (status === "error") {
      return <img  className="status" src="../img/error.png" />
    } else if (status === "await") {
      return <img className="status" src="../img/await.png" />
    } else return null;
  }


  return (
    <div className="marketplace_block_wrapper collection_block_wrapper">
      
      <div className="marketplace_block">
        <div className="marketplace_block_img">
        <div className="marketplace_block_img_wrapper ">
          <img src="../img/marketplace_img.png" alt="marketplace block img" />
        </div>
        </div>
        <div className="marketplace_block_info">
          <h6>Demo Title, Demo Title</h6>{statusShow()}
          <a>@user123</a>
          <div className="marketplace_block_footer">
            <span>
              <img src="../img/heart.svg" alt="heart" />
              1,2 k
            </span>
            <span className="count">0.053 ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionBlock;
