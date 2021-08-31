import React from "react";
import CloseIcon from "../Icons/CloseIcon";
import "./MessagePopup.css";

const MessagePopup = (props) => {
  return (
    <div className={props.showPopup ? "popup active" : "popup"}>
      <div className="popup-wrapper" onClick={props.togglePopup}>
        <div
          className="main-popup defi_popup"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="close" onClick={props.togglePopup}>
            <CloseIcon />
          </div>

          <div className="popup-main">
            <h2>Thank you for subscribing!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePopup;
