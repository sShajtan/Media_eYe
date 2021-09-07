import React, { useState } from 'react';
import CloseIcon from '../Icons/CloseIcon';
import MediumIcon from '../Icons/MediumIcon';
import Telegramicon from '../Icons/TelegramIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import MessagePopup from '../MessagePopup/MessagePopup';
import './Popup.css';

const Popup = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleMainPopup = () => {
    props.togglePopup();
  };

  return (
    <React.Fragment>
      <div className={props.showPopup ? 'popup active' : 'popup'}>
        <div
          className="popup-wrapper timer_popup soon_popup"
          onClick={props.togglePopup}
        >
          <div
            className="main-popup"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="close" onClick={props.togglePopup}>
              <CloseIcon />
            </div>
            <div className="popup-main soon">
              <h4>We are building something great!</h4>
              <div className="links">
                <a href="https://medium.com/@MeDIAeYeNFT" target="_blank">
                  <MediumIcon />
                </a>
                <a href="https://t.me/MeDIAeYeNFTofficial" target="_blank">
                  <Telegramicon />
                </a>
                <a href="https://twitter.com/MeDIAeYeNFT" target="_blank">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MessagePopup showPopup={showPopup} togglePopup={togglePopup} />
    </React.Fragment>
  );
};

export default Popup;
