import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './MarketplaceHeader.css';

const GallereyHeader = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const toggleMobileCategories = () => {
    setShowMobileCategories(!showMobileCategories);
  };

  return (
    <div className="content_marketplace_header">
      <div className="container">
        <div className="content_marketplace_header_main">
          <img
            src={
              darkTheme
                ? 'img/gallerey_title_dark.png'
                : 'img/gallerey_title.png'
            }
            alt="title"
          />
        </div>
      </div>
    </div>
  );
};

export default GallereyHeader;
