import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Popup from './SelectPopup/Popup';
import PopupBid from './SelectPopupBid/Popup';
import './Selected.css';
import SelectedBlock from './SelectedBlock/SelectedBlock';

const Selected = (props) => {
    const darkTheme = useSelector((state) => state.app.darkTheme);
    let history = useHistory();
    const [showPopup, setShowPopup] = useState(false);
    const [showPopupBid, setShowPopupBid] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const togglePopupBid = () => {
        setShowPopupBid(!showPopupBid);
    };

  return (
    <div className="selected">
    <Popup showPopup={showPopup} togglePopup={togglePopup} />
    <PopupBid showPopup={showPopupBid} togglePopupBid={togglePopupBid} />
        <div className="container">
            <div>
                <a className="goBack_button" onClick={() => history.goBack()}>
                    <span>&#10094;</span>
                </a>
            </div>
            <div className="selected_header">
                <h2>Favorites</h2>
                <div>You have selected <span>5 products</span></div>
            </div>
            <div className="selected_main">
                <SelectedBlock inCollection={true} charity={true} togglePopup={togglePopup} togglePopupBid={togglePopupBid} />
                <SelectedBlock auction={true} togglePopup={togglePopup} togglePopupBid={togglePopupBid} />
                <SelectedBlock togglePopup={togglePopup} togglePopupBid={togglePopupBid}/>
                <SelectedBlock togglePopup={togglePopup} togglePopupBid={togglePopupBid} />
                <SelectedBlock togglePopup={togglePopup} togglePopupBid={togglePopupBid}/>
                <SelectedBlock auction={true} bundle={true} togglePopup={togglePopup} togglePopupBid={togglePopupBid} />
            </div>
        </div>
    </div>
  );
};

export default Selected;
