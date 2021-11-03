import React from 'react';
import './MarketplaceHeader.css';
import Filter from '../Filter/Filter';
import MenuMarketplace from '../MenuMarketplace/MenuMarketplace';
import CharityBtn from '../Filter/CharityBtn/CharityBtn';
import { useHistory } from 'react-router-dom';

const NftMarketplaceHeader = (props) => {
  const { darkTheme } = props;
  const history = useHistory();
  return (
    <div className="content_marketplace_header">
      <div className="container">
        <div className="content_marketplace_header_main">
          <div className="nft_marketplace_banner_mobile">
            <img
              src={
                darkTheme
                  ? 'img/nft_marketplace_title_mobile.png'
                  : 'img/nft_marketplace_title_mobile.png'
              }
              alt="title"
            />
            <button
              className="sell_nft"
              onClick={() => history.push('/put-on-marketplace')}
            >
              Sell NFT
            </button>
          </div>
          <div className="nft_marketplace_banner">
            <img
              src={
                darkTheme
                  ? 'img/nft_marketplace_title_dark.png'
                  : 'img/nft_marketplace_title.png'
              }
              alt="title"
            />
            <button
              className="sell_nft"
              onClick={() => history.push('/put-on-marketplace')}
            >
              Sell NFT
            </button>
          </div>
          <div className="content_marketplace_header_main_wrapper">
            <MenuMarketplace />
            <CharityBtn />
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftMarketplaceHeader;
