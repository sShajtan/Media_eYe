import React, { useState } from 'react';
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
          <img src="../../img/charities_header.png" alt="banner" />
          <img src="../../img/charities_header_mobile.png" alt="banner" />
          <button
            className="charities_registration"
            onClick={toggleCharitiesPopup}
          >
            Registration
          </button>
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
