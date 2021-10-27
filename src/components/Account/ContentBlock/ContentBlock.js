import React from 'react';
import Download from '../../Icons/Download';
import './ContentBlock.css';

const ContentBlock = (props) => {
  const { product, status, ifps } = props;

  const statusShow = (pro) => {
    if (status === 'approved') {
      return <img className="status" src="../img/check.png" alt="approved" />;
    } else if (status === 'waiting') {
      return <img className="status" src="../img/await.png" alt="await" />;
    } else if (status === 'not_approved') {
      return <img className="status" src="../img/error.png" alt="error" />;
    } else return null;
  };

  return (
    <div className="explore_block_wrapper ">
      <div className="explore_block">
        <div
          className={
            product
              ? product.isBunding !== undefined
                ? 'explore_block_img bunding_block'
                : 'explore_block_img'
              : null
          }
        >
          {product ? (
            product.img.map((image, i) => (
              <React.Fragment>
                <div className="explore_block_img_wrapper" key={i}>
                  <div>
                    <img src={image} alt="nft_card" />
                  </div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <React.Fragment>
              <div className="explore_block_img_wrapper">
                <div>
                  <img src="../../img/marketplace_img.png" alt="product" />
                </div>
              </div>
            </React.Fragment>
          )}{' '}
        </div>

        <div className="explore_block_info explore_block_info_content">
          <h6>Demo Title, Demo Title {statusShow()}</h6>
          <div className="explore_block_footer explore_block_footer_content">
            {(status === 'approved') & ifps ? (
              <React.Fragment>
                <span>
                  <p className="ifps_text">The file exceeds 100 MB </p>
                  <button className="mint">
                    IPFS <Download />
                  </button>
                </span>
              </React.Fragment>
            ) : status === 'approved' ? (
              <button className="mint" onClick={props.togglePopup}>
                Mint
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
