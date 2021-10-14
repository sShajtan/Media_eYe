import React from 'react';
import './MarketplaceHeader.css';
import Filter from '../Filter/Filter';
import MenuMarketplace from '../MenuMarketplace/MenuMarketplace';

const ContentMarketplaceHeader = (props) => {
  const { darkTheme } = props;

  return (
    <div className="content_marketplace_header">
      <div className="container">
        <div className="content_marketplace_header_main">
          <img
            src={
              darkTheme
                ? 'img/content_marketplace_title_dark.png'
                : 'img/content_marketplace_title.png'
            }
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

export default ContentMarketplaceHeader;
