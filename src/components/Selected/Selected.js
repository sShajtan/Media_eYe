import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Popup from './SelectPopup/Popup';
import './Selected.css';
import SelectedBlock from './SelectedBlock/SelectedBlock';

const Selected = (props) => {
    const darkTheme = useSelector((state) => state.app.darkTheme);
    let history = useHistory();
    const [showPopup, setShowPopup] = useState(false);

      const togglePopup = () => {
        setShowPopup(!showPopup);
    };

  return (
    <div className="selected">
    <Popup showPopup={showPopup}
            togglePopup={togglePopup} />
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
                <SelectedBlock inCollection={true} charity={true} togglePopup={togglePopup} />
                <SelectedBlock auction={true} togglePopup={togglePopup} />
                <SelectedBlock togglePopup={togglePopup}/>
                <SelectedBlock togglePopup={togglePopup} />
                <SelectedBlock togglePopup={togglePopup} />
                <SelectedBlock auction={true} bundle={true} togglePopup={togglePopup} />
            </div>
        </div>
    </div>
  );
};

export default Selected;
