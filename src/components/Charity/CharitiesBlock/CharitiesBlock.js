import React from 'react';
import './CharitiesBlock.css';
import { useHistory } from 'react-router-dom';

const CharitiesBlock = (props) => {
  const { togglePopup } = props;
  let history = useHistory();

  return (
    <div
      className="charities_block"
      onClick={() => history.push('/charities/single')}
    >
      <div className="charities_block_left">
        <div className="charities_block_img_wrapper">
          <img src="../../img/marketplace_img.png" />
        </div>
      </div>
      <div className="charities_block_right">
        <div className="charities_block_text">
          <h5>PolarisCharitable Trust</h5>
          <p>
            Sed ut perspiciatis, unde omnis iste natus oloremqueeaque ipsa,
            quae, quia voluptas sit, aspernatur aut odit aut fugit ...
          </p>
        </div>
        <div
          className="charities_block_footer"
          onClick={(event) => event.stopPropagation()}
        >
          <div>
            <h6>Total donations</h6>
            <span>2000 ETH </span>
          </div>
          <button className="charities_block_donate" onClick={togglePopup}>
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharitiesBlock;
