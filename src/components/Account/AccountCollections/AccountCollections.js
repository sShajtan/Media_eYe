import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './AccountCollections.css';
import SearchIcon from '../../Icons/SearchIcon';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import CollectionBlock from '../CollectionBlock/CollectionBlock';
import AccountMenu from '../AccountMenu/AccountMenu';
import { useHistory } from 'react-router-dom';
import { updateActiveTab } from '../../../store/app/appSlice';

const AccountCollections = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);
  const [wallet, setWallet] = useState('9999999999999999999999999999999');
  // const [activeTab, setActiveTab] = useState('owner');
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.app.activeTab);
  const [grid, setGrid] = useState('1');
  const [copyWallet, setCopyWallet] = useState(false);

  let history = useHistory();

  useEffect(() => {
    if (copyWallet === true) {
      setTimeout(() => {
        setCopyWallet(false);
      }, 3000);
    }
  });

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
            <div className="collection_left_block">
              <h6>Business eYe Level 1</h6>
              <button>
                <span>Subscription</span>
              </button>
            </div>
            <div className="creator_account_avatar">
              <img src="../img/creator_account_avatar.png" />
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
                    <img src="../img/copy.png" />
                  </button>
                  {copyWallet ? 'Copied!' : null}
                </div>
              </div>
              <div className="account_balance">
                <img src="../img/token_1.png" />
                Balance: 123345 eYe ($1234)
              </div>
              <button
                className="create_collection create_collection_mobile"
                onClick={() =>
                  history.push('/create/collection', { fromPopup: true })
                }
              >
                Create Collection
              </button>
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
            <div className="creator_account_filter_center">
              <button
                className={activeTab === 'owner' ? 'active' : null}
                onClick={() => dispatch(updateActiveTab('owner'))}
              >
                Owner
              </button>
              <button
                className={activeTab === 'minter' ? 'active' : null}
                onClick={() => dispatch(updateActiveTab('minter'))}
              >
                Minter
              </button>
            </div>
            <button
              className="create_collection"
              onClick={() =>
                history.push('/create/collection', { fromPopup: true })
              }
            >
              Create Collection
            </button>
            <div className="grid_filter">
              <div className="grid_menu">
                <button className="2rows" onClick={() => setGrid('2')}>
                  <img
                    src={
                      grid == '2'
                        ? '../../img/2rows-active.png'
                        : '../../img/2rows_' + theme + '.png'
                    }
                  />
                </button>
                <button className="1rows" onClick={() => setGrid('1')}>
                  <img
                    src={
                      grid == '1'
                        ? '../../img/1rows_active.png'
                        : '../../img/1rows_' + theme + '.png'
                    }
                  />
                </button>
              </div>
              <FilterAccount />
            </div>
          </div>
          <div
            className={
              grid == '2'
                ? 'creator_account_main_block two_rows'
                : 'creator_account_main_block one_row'
            }
          >
            <CollectionBlock />
            <CollectionBlock />
            <CollectionBlock />
            <CollectionBlock />
            <CollectionBlock />
            <CollectionBlock />
            <CollectionBlock />
            <CollectionBlock />
          </div>
          <button className="load_more">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default AccountCollections;
