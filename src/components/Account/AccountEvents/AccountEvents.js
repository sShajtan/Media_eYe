import React, { useState } from 'react';
import SearchIcon from '../../Icons/SearchIcon';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import AccountMenu from '../AccountMenu/AccountMenu';
import Popup from '../../Selected/SelectPopup/Popup';
import PopupBid from '../../Selected/SelectPopupBid/Popup';
import './AccountEvents.css';
import EventsBlock from '../../Events/EventsBlock/EventsBlock';
import EditAvatar from '../../Icons/EditAvatart';

const AccountFavorite = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupBid, setShowPopupBid] = useState(false);
  const [wallet] = useState('9999999999999999999999999999999');
  const [copyWallet, setCopyWallet] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const togglePopupBid = () => {
    setShowPopupBid(!showPopupBid);
  };

  return (
    <div className="selected account_collection">
      <Popup showPopup={showPopup} togglePopup={togglePopup} />
      <PopupBid showPopup={showPopupBid} togglePopupBid={togglePopupBid} />
      <div className="container">
        <div className="img_line">
          <img src="../img/creator_account.png" alt="line" />
          <button className="account_img_edit">
            <img src="../img/pen.png" alt="edit" />
          </button>
        </div>
        <div className="creator_account_main_header">
          <div className="collection_left_block">
            <h6>Business eYe Level 1</h6>
            <button>
              <span>Subscription</span>
            </button>
          </div>
          <div className="creator_account_avatar">
            <img src="../img/creator_account_avatar.png" alt="avatar" />
            <button className="edit_avatar">
              <EditAvatar />
            </button>
          </div>
          <div className="collection_right_block">
            <button>
              <span>Put on Marketplace</span>
            </button>
          </div>
          <h6 className="mobile_level">Business eYe Level 1</h6>
          <div className="creator_account_info">
            <div>
              <span>
                <img src="../img/heart.svg" alt="heart" />
                &nbsp;123 k
              </span>
              <span>
                <img src="../img/men.svg" alt="heart" />
                &nbsp;55 k
              </span>
            </div>
            <h4>Username</h4>
            <div className="account_wallet" value="0x9276999999999999912aediv">
              0x9276...12aediv
              <div className="copy_block">
                <button
                  className="copy_btn"
                  onClick={() => {
                    navigator.clipboard.writeText(wallet);
                    setCopyWallet(true);
                  }}
                >
                  <img src="../img/copy.png" alt="copy" />
                </button>
                {copyWallet ? 'Copied!' : null}
              </div>
            </div>
            <div className="account_balance">
              <img src="../img/token_11.png" alt="token" />
              Balance: 123345 eYe ($1234)
            </div>
          </div>
        </div>
        <AccountMenu />
        <div className="creator_account_filter">
          <div className="creator_account_search">
            <input type="text" placeholder="Search" />
            <button>
              <SearchIcon />
            </button>
          </div>
          <div className="grid_filter">
            <FilterAccount />
          </div>
        </div>
        <div className="account_events_main">
          <EventsBlock />
          <EventsBlock />
          <EventsBlock />
          <EventsBlock />
        </div>
        <button className="load_more">Load More</button>
      </div>
    </div>
  );
};

export default AccountFavorite;
