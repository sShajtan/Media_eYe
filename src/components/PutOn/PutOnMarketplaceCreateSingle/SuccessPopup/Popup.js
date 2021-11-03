import React, { useState } from 'react';
import './Popup.css';
import CloseIcon from '../../../Icons/CloseIcon';

const Popup = (props) => {
  const { togglePopup } = props;

  return (
    <React.Fragment>
      <div className={props.showPopup ? 'popup active' : 'popup'}>
        <div
          className="popup-wrapper mint_popup success_mint_popup"
          onClick={props.togglePopup}
        >
          <div onClick={(event) => event.stopPropagation()}>
            <div className="container">
              <div className="main_mint_popup">
                <div className="close" onClick={props.togglePopup}>
                  <CloseIcon />
                </div>
                <img src="../../img/big_success.png" />
                <h2>NFT has been successfully pushed to the marketplace</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Popup;
