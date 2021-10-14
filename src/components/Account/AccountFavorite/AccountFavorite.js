import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchIcon from '../../Icons/SearchIcon';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import AccountMenu from '../AccountMenu/AccountMenu';
import Popup from '../../Selected/SelectPopup/Popup';
import PopupBid from '../../Selected/SelectPopupBid/Popup';
import './AccountFavorite.css';
import SelectedBlock from '../../Selected/SelectedBlock/SelectedBlock';

const AccountFavorite = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupBid, setShowPopupBid] = useState(false);
  const [wallet] = useState('9999999999999999999999999999999');
  const [grid, setGrid] = useState('1');
  const [copyWallet, setCopyWallet] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const togglePopupBid = () => {
    setShowPopupBid(!showPopupBid);
  };

  return (
    <div className="selected">
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
              <img src="../img/token_1.png" alt="token" />
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
            <div className="grid_menu">
              <button className="2rows" onClick={() => setGrid('2')}>
                <img
                  src={
                    grid === '2'
                      ? '../../img/2rows-active.png'
                      : '../../img/2rows_' + darkTheme + '.png'
                  }
                  alt="two rows"
                />
              </button>
              <button className="1rows" onClick={() => setGrid('1')}>
                <img
                  src={
                    grid === '1'
                      ? '../../img/1rows_active.png'
                      : '../../img/1rows_' + darkTheme + '.png'
                  }
                  alt="one row"
                />
              </button>
            </div>
            <FilterAccount />
          </div>
        </div>
        <div className="account_selected_main">
          <SelectedBlock
            inCollection={true}
            charity={true}
            togglePopup={togglePopup}
            togglePopupBid={togglePopupBid}
          />
          <SelectedBlock
            auction={true}
            togglePopup={togglePopup}
            togglePopupBid={togglePopupBid}
          />
          <SelectedBlock
            togglePopup={togglePopup}
            togglePopupBid={togglePopupBid}
          />
          <SelectedBlock
            togglePopup={togglePopup}
            togglePopupBid={togglePopupBid}
          />
          <SelectedBlock
            togglePopup={togglePopup}
            togglePopupBid={togglePopupBid}
          />
          <SelectedBlock
            auction={true}
            bundle={true}
            togglePopup={togglePopup}
            togglePopupBid={togglePopupBid}
          />
        </div>
        <button className="load_more">Load More</button>
      </div>
    </div>
  );
};

export default AccountFavorite;
