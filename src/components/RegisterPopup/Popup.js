import React, { useState } from 'react';
import './Popup.css';
import CloseIcon from '../Icons/CloseIcon';

const Popup = (props) => {
  const { toggleMessagePopup } = props;
  const [email, setEmail] = useState('');
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
              <h4 style={{marginBottom:"20px", textAlign: "center"}}>MeDIA eYe Public Presale Round Open</h4>
              <form >
                <a href="https://mediaeyenft.com/pitchdeck/whitelist/">Register</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Popup;
