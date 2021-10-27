import React from 'react';
import './Popup.css';
import '../../Account/AddPopup/Popup.css';
import CloseIcon from '../../Icons/CloseIcon';

const Popup = (props) => {
  return (
    <React.Fragment>
      <div className={props.showPopup ? 'popup active' : 'popup'}>
        <div
          className="popup-wrapper selected_popup popup_image"
          onClick={props.togglePopup}
        >
          <div>
            <div className="container">
              <div className="close" onClick={props.togglePopup}>
                <CloseIcon />
              </div>
              <div className="popup_product_image_wrapper">
                <img
                  onClick={(event) => event.stopPropagation()}
                  src={props.img}
                  alt="product"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Popup;
