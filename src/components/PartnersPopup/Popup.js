import React, { useState } from "react";
import emailjs from "emailjs-com";
import MessagePopup from "../MessagePopup/MessagePopup";
import "./Popup.css";
import CloseIcon from "../Icons/CloseIcon";

const Popup = (props) => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleMainPopup = () => {
    props.togglePopup();
  };

  // const handleChangeEmail = (event) => {
  //   setEmail(event.target.value);
  // };

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
          className="popup-wrapper partners"
          onClick={props.togglePopup}
        >
          <div
            className="main-popup"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="popup-main">
              <div className="close" onClick={props.togglePopup}>
                <CloseIcon />
              </div>
              <h4>Become a partner</h4>
              <form className="partners_form" onSubmit={handleSubmit}>
                <div>
                  <label>Email</label>
                  <input />
                </div>
                <div>
                  <label >Name</label>
                  <input />
                </div>
                <div>
                  <label>Twitter</label>
                  <input />
                </div>
                <div>
                  <label>Portfolio Link</label>
                  <input />
                </div>
                <div className="textarea">
                  <label>Description</label>
                  <textarea rows="3" />
                </div>
                <button type="submit" className="partners_submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <MessagePopup showPopup={showPopup} togglePopup={togglePopup} />
    </React.Fragment>
  );
};

export default Popup;
