import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import All from '../../Icons/Categories/All';
import Entertaiment from '../../Icons/Categories/Entertaiment';
import Art from '../../Icons/Categories/Art';
import Media from '../../Icons/Categories/Media';
import Crypto from '../../Icons/Categories/Crypto';
import Business from '../../Icons/Categories/Business';
import Sport from '../../Icons/Categories/Sport';
import './CreatorsHeader.css';
import { Collapse } from 'react-collapse';
import Filter from '../../ContentMarketplace/Filter/Filter';
import MenuMarketplace from '../../ContentMarketplace/MenuMarketplace/MenuMarketplace';

const CreatorsHeader = (props) => {
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
            className="creator_title"
            src="img/creator_title.png"
            alt="title"
          />
          <img
            className="creator_title_mobile"
            src="img/creator_title_mobile.png"
            alt="title"
          />
          <div className="content_marketplace_header_main_wrapper">
            <MenuMarketplace />
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsHeader;
