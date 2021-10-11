import React, { useState, useEffect } from 'react';
import CharitiesBlock from '../CharitiesBlock/CharitiesBlock';
import Popup from '../CharitiesPopupRegister/Popup';
import './Charities.css';

const Charities = (props) => {
  const { togglePopup } = props;
  const [showPopup, setShowPopup] = useState(false);

  const toggleCharitiesPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="charities">
      <Popup showPopup={showPopup} togglePopup={toggleCharitiesPopup} />
      <div className="container">
        <div className="charities_header">
          <img src="../../img/charities_header.png" />
          <img src="../../img/charities_header_mobile.png" />
          <a className="charities_registration" onClick={toggleCharitiesPopup}>
            Registration
          </a>
        </div>
        <h4>Charities</h4>
        <div className="charities_main">
          <CharitiesBlock togglePopup={togglePopup} />
          <CharitiesBlock togglePopup={togglePopup} />
          <CharitiesBlock togglePopup={togglePopup} />
          <CharitiesBlock togglePopup={togglePopup} />
          <CharitiesBlock togglePopup={togglePopup} />
          <CharitiesBlock togglePopup={togglePopup} />
        </div>
        <button className="load_more"> Load more</button>
      </div>
    </div>
  );
};

export default Charities;
