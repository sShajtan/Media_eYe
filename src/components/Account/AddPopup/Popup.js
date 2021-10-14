import React, { useState } from 'react';
import './Popup.css';
import CloseIcon from '../../Icons/CloseIcon';
import AddPopupBlock from '../AddPopupBlock/AddPopupBlock';
import { useHistory } from 'react-router-dom';

const Popup = (props) => {
  const { togglePopup } = props;
  let history = useHistory();

  return (
    <React.Fragment>
      <div className={props.showPopup ? 'popup active' : 'popup'}>
        <div className="popup-wrapper add_popup" onClick={props.togglePopup}>
          <div onClick={(event) => event.stopPropagation()}>
            <div className="container">
              <div className="main_add_popup">
                <div className="close" onClick={props.togglePopup}>
                  <CloseIcon />
                </div>
                <div className="main_add_popup_header">
                  <button onClick={() => history.push('/create')}>
                    Create NFT
                  </button>
                  <h4>Select minted content</h4>
                  <div></div>
                </div>
                <div className="main_add_popup_body">
                  <AddPopupBlock id={1} />
                  <AddPopupBlock id={2} />
                  <AddPopupBlock id={3} />
                  <AddPopupBlock id={4} />
                  <AddPopupBlock id={5} />
                  <AddPopupBlock id={6} />
                  <AddPopupBlock id={7} />
                  <AddPopupBlock id={8} />
                </div>
                <button className="add_btn">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Popup;
