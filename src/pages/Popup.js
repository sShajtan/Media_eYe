import React, { useState } from "react";
import SoonPopup from "../components/SoonPopup/Popup";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSoonPopup, setShowSoonPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    this.setState({ showPopup: !this.state.showPopup });
  };

  const toggleSoonPopup = () => {
    setShowSoonPopup(!showSoonPopup);
  };

  return (
    <React.Fragment>
      <SoonPopup showPopup={showSoonPopup} togglePopup={toggleSoonPopup} />
    </React.Fragment>
  );
};

export default Popup;
