import React from 'react';
import './Popup.css';
import '../../Account/AddPopup/Popup.css';
import CloseIcon from '../../Icons/CloseIcon';

const Popup = (props) => {
  const { togglePopup } = props;

  return (
    <React.Fragment>
      <div className={props.showPopup ? 'popup active' : 'popup'}>
        <div
          className="popup-wrapper selected_popup charities_popup"
          onClick={togglePopup}
        >
          <div>
            <div className="container">
              <div
                className="main_add_popup"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="close" onClick={togglePopup}>
                  <CloseIcon />
                </div>
                <div className="selected_popup_main">
                  <h3>Register your Charity</h3>
                  <div className="collection_logo_img collection_block collection_block_img">
                    <h5>Logo image</h5>
                    <span>
                      This image will also be used for nsvigation. 350 x 350
                      recommended.
                    </span>
                    <label>
                      <input type="file" />
                    </label>
                  </div>
                  <div className="collection_block charity_block_input">
                    <label>Legal Charity Name</label>
                    <input type="text" placeholder="PolarisCharitable Trust" />
                  </div>
                  <div className="collection_block charity_block_input">
                    <label>Charity Registration (CC) Number</label>
                    <input type="text" placeholder="CC12345" />
                  </div>
                  <div className="collection_block charity_block_input">
                    <label>IRD Registered Name</label>
                    <input type="text" placeholder="PolarisCharitable Trust" />
                  </div>
                  <div className="collection_block charity_block_input">
                    <label>IRD Number</label>
                    <input type="text" placeholder="123-456-789" />
                  </div>
                  <div className="collection_block charity_block_input">
                    <label>Decscription</label>
                    <textarea rows="5"></textarea>
                  </div>
                  <button className="buy_btn">Registration</button>
                  <div className="charities_popup_footer">
                    <p>Please allow up to 24 hours to moderate your charity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Popup;
