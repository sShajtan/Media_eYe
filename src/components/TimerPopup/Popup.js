import React, { useState } from "react";
import emailjs from "emailjs-com";
import MessagePopup from "../MessagePopup/MessagePopup";
import "./Popup.css";
import CloseIcon from "../Icons/CloseIcon";

const Popup = (props) => {
  const [email, setEmail] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleMainPopup = () => {
    props.togglePopup();
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== null && email !== "") {
      emailjs
        .sendForm(
          "service_73soouc",
          "template_uj1tp7c",
          event.target,
          "user_1nI5rWG3deHxADsA0zfNc"
        )
        .then(
          (result) => {
            setEmail("");
            setShowPopup(false);
            toggleMainPopup();
          },
          (error) => {
            alert("Message not sent");
          }
        );
    }
  };

  return (
    <React.Fragment>
      <div className={props.showPopup ? "popup active" : "popup"}>
        <div
          className="popup-wrapper timer_popup soon_popup timer"
          onClick={props.togglePopup}
        >
          <div
            className="main-popup"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="close" onClick={props.togglePopup}>
              <CloseIcon />
            </div>
            <div className="popup-main">
              <h4>Newsletter</h4>
              <h6>Stay up to date with our latest updates and products</h6>
              <form onSubmit={handleSubmit}>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={handleChangeEmail}
                />
                <button>Subscribe</button>
              </form>
              <span>
                By signing up you consent to receive emails from Media eYe and
                its subsidiaries.
              </span>
            </div>
          </div>
        </div>
      </div>
      <MessagePopup showPopup={showPopup} togglePopup={togglePopup} />
    </React.Fragment>
  );
};

export default Popup;
