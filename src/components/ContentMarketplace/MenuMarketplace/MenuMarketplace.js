import React, { useState } from 'react';
import './MenuMarketplace.css';
import { useHistory } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import All from '../../../components/Icons/Categories/All';
import Entertaiment from '../../../components/Icons/Categories/Entertaiment';
import Media from '../../../components/Icons/Categories/Media';
import Art from '../../../components/Icons/Categories/Art';
import Crypto from '../../../components/Icons/Categories/Crypto';
import Business from '../../../components/Icons/Categories/Business';
import Sport from '../../../components/Icons/Categories/Sport';

const MenuMarketplace = (props) => {
  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const toggleMobileCategories = () => {
    setShowMobileCategories(!showMobileCategories);
  };
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="content_marketplace_header_menu_mobile">
        <button
          className={
            showMobileCategories
              ? 'categories_mobile_button open'
              : 'categories_mobile_button'
          }
          onClick={toggleMobileCategories}
        >
          Categories
        </button>
        <Collapse isOpened={showMobileCategories}>
          <div
            className="filter_fields categories_filter"
            onClick={(event) => event.stopPropagation()}
          >
            <button>
              <All />
              All
            </button>
            <button>
              <Art />
              Art
            </button>
            <button>
              <Crypto />
              Crypto
            </button>
            <button>
              <Entertaiment />
              Gaming
            </button>
            <button>
              <Business />
              Business
            </button>
            <button>
              <Media />
              Media
            </button>
            <button>
              <Sport />
              Sports
            </button>
            <button onClick={() => history.push('/charity-place')}>
              <img src="../../img/charity.png" alt="charity" />
              Charity
            </button>
          </div>
        </Collapse>
      </div>
      <div className="content_marketplace_header_menu">
        <button className="active">
          <span>All</span>
        </button>
        <button>
          <span>Art</span>
        </button>
        <button>
          <span>Crypto</span>
        </button>
        <button>
          <span>Gaming</span>
        </button>
        <button>
          <span>Business</span>
        </button>
        <button>
          <span>Media</span>
        </button>
        <button>
          <span>Sports</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default MenuMarketplace;
