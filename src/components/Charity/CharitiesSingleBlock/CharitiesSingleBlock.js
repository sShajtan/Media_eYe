import React from 'react';
import './CharitiesSingleBlock.css';
import Timer from 'react-compound-timer';
import { useHistory } from 'react-router-dom';

const CharitiesSingleBlock = (props) => {
  const { isAuction } = props;
  let history = useHistory();
  return (
    <div
      className="marketplace_block_wrapper charities_single_block_wrapper"
      onClick={() => history.push('/product')}
    >
      <div className="marketplace_block">
        <div className="marketplace_block_img">
          <div className="marketplace_block_img_wrapper ">
            <img
              src="../../../img/marketplace_img.png"
              alt="marketplace block"
            />
            {isAuction ? (
              <div className="selected_block_timer">
                <span>
                  <Timer initialTime={550000000} direction="backward">
                    {() => (
                      <React.Fragment>
                        <Timer.Hours />:
                        <Timer.Minutes />:
                        <Timer.Seconds />
                      </React.Fragment>
                    )}
                  </Timer>
                </span>
                left <img src="../../img/fire.png" alt="auction" />
              </div>
            ) : null}
          </div>
        </div>
        <div className="marketplace_block_info">
          <h6>
            Demo Title, Demo Title{' '}
            <span className="charities_percent_block">
              <img src="../../img/heart_hand.png" alt="charities" />
              50%
            </span>
          </h6>
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

export default CharitiesSingleBlock;
