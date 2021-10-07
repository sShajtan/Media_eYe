import React, { useRef, useEffect, useState } from 'react';
import './AccountCurrently.css';
import SearchIcon from '../../Icons/SearchIcon';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import MarketplaceBlock from '../../ContentMarketplace/MarketplaceBlock/MarketplaceBlock';
import AccountMenu from '../AccountMenu/AccountMenu';

const AccountCurrently = (props) => {
  return (
    <div className="creator_account account_collection">
      <div className="container">
        <div className="creator_account_main">
          <div className="img_line">
            <img src="../img/creator_account.png" />
            <button className="account_img_edit">
              <img src="../img/pen.png" />
            </button>
          </div>
          <div className="creator_account_main_header">
            <h6>Business eYe Level 1</h6>
            <div className="creator_account_avatar">
              <img src="../img/creator_account_avatar.png" />
            </div>
            <div className="creator_account_info">
              <span>
                <img src="../img/heart.svg" alt="heart" />
                &nbsp;123 k
              </span>
              <h4>Username</h4>
              <div className="account_wallet">0x9276...12ae</div>
              <div className="account_balance">
                <img src="../img/token_1.png" />
                Balance: 123345 eYe ($1234)
              </div>
            </div>
          </div>
          <AccountMenu />
          <div className="creator_account_filter">
            <div></div>
            <div className="header_search">
              <input type="search" />
              <button>
                <SearchIcon />
              </button>
            </div>
            <FilterAccount />
          </div>
          <div className="creator_account_main_block">
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCurrently;
