import React from 'react';
import './ContentBlock.css';

const ContentBlock = (props) => {
  const {status, togglePopup} = props;

  const statusShow = () => {
    if(status === "approved"){
      return <img className="status" src="../img/check.png" />
    } else if (status === "waiting") {
      return <img  className="status" src="../img/await.png" />
    } else if (status === "not_approved") {
      return <img className="status" src="../img/error.png" />
    } else return null;
  }



  return (
    <div className={status+" marketplace_block_wrapper content_block"}>
      <div className="marketplace_block">
        <div className="marketplace_block_img">
        <div className="marketplace_block_img_wrapper ">
          <img src="../../img/marketplace_img.png" alt="marketplace block img" />
        </div>
        </div>
        <div className="marketplace_block_info">
          <h6>Demo Title, Demo {statusShow()}</h6>
          <a>@user123</a>
          <div className="marketplace_block_footer">
            {status === "approved" ?  <button className="mint" onClick={props.togglePopup}>Mint</button> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
