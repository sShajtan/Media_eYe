import React from 'react';
import { useSelector } from 'react-redux';
import CloseIcon from '../Icons/CloseIcon';
import './MessagePopup.css';

const MessagePopup = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  return (
    <div className={props.showPopup ? 'popup active' : 'popup'}>
      <div className="popup-wrapper" onClick={props.togglePopup}>
        <div
          className="main-popup message_popup"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="close" onClick={props.togglePopup}>
            <CloseIcon />
          </div>
          <div className="popup-main">
            <img
              src={darkTheme ? 'img/success_dark.png' : 'img/success.png'}
              alt="success"
            />
            <button className="got_it" onClick={props.togglePopup}>
              Got It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePopup;
