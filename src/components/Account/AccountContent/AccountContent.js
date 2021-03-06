import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './AccountContent.css';
import SearchIcon from '../../Icons/SearchIcon';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import ContentBlock from '../ContentBlock/ContentBlock';
import AccountMenu from '../AccountMenu/AccountMenu';
import EditAvatar from '../../Icons/EditAvatart';

const AccountContent = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);
  const [wallet] = useState('9999999999999999999999999999999');
  const [activeTab, setActiveTab] = useState('approved');
  const [copyWallet, setCopyWallet] = useState(false);

  return (
    <div className="creator_account account_collection account_content">
      <div className="container">
        <div className="creator_account_main">
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
                  <img src="../img/men.svg" alt="men" />
                  &nbsp;55 k
                </span>
              </div>
              <h4>Username</h4>
              <div
                className="account_wallet"
                value="0x9276999999999999912aediv"
              >
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
        </div>
      </div>

      <div className="account_main_block_wrapper">
        <div className="container">
          <AccountMenu />
          <div className="creator_account_filter">
            <div className="creator_account_search">
              <input type="text" placeholder="Search" />
              <button>
                <SearchIcon />
              </button>
            </div>
            <div className="creator_account_filter_center">
              <div
                className={activeTab === 'approved' ? 'active' : null}
                onClick={() => {
                  setActiveTab('approved');
                }}
              >
                <span>Approved</span>&nbsp;{' '}
                <img
                  src={
                    activeTab === 'approved'
                      ? '../../../img/approved_active.png'
                      : theme
                      ? '../../../img/approved_dark.png'
                      : '../../../img/approved.png'
                  }
                  alt="aproved"
                />
              </div>
              <div
                className={activeTab === 'waiting' ? 'active' : null}
                onClick={() => {
                  setActiveTab('waiting');
                }}
              >
                <span>Waiting for Approval</span> &nbsp;{' '}
                <img
                  src={
                    activeTab === 'waiting'
                      ? '../../../img/waiting_active.png'
                      : theme
                      ? '../../../img/waiting_dark.png'
                      : '../../../img/waiting.png'
                  }
                  alt="waiting"
                />
              </div>
              <div
                className={activeTab === 'not_approved' ? 'active' : null}
                onClick={() => {
                  setActiveTab('not_approved');
                }}
              >
                <span>Isn't approved</span> &nbsp;{' '}
                <img
                  src={
                    activeTab === 'not_approved'
                      ? '../../../img/not_approved_active.png'
                      : theme
                      ? '../../../img/not_approved_dark.png'
                      : '../../../img/not_approved.png'
                  }
                  alt="not_approved"
                />
              </div>
            </div>
            <div className="grid_filter">
              <div className="grid_menu"></div>
              <FilterAccount />
            </div>
          </div>
          {activeTab === 'approved' ? (
            <div className="account_main_block approved">
              <ContentBlock status="approved" ifps={true} />
              <ContentBlock status="approved" />
              <ContentBlock status="approved" />
              <ContentBlock status="approved" />
            </div>
          ) : null}
          {activeTab === 'waiting' ? (
            <div className="account_main_block waiting">
              <ContentBlock status="waiting" />
              <ContentBlock status="waiting" />
              <ContentBlock status="waiting" />
              <ContentBlock status="waiting" />
            </div>
          ) : null}
          {activeTab === 'not_approved' ? (
            <div className="account_main_block not_approved">
              <ContentBlock status="not_approved" />
              <ContentBlock status="not_approved" />
              <ContentBlock status="not_approved" />
              <ContentBlock status="not_approved" />
            </div>
          ) : null}
        </div>
        <button className="load_more">Load More</button>
      </div>
    </div>
  );
};

export default AccountContent;
