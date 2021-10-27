import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './AccountCollections.css';
import SearchIcon from '../../Icons/SearchIcon';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import CollectionBlock from '../../ContentMarketplace/CollectionBlock/CollectionBlock';
import AccountMenu from '../AccountMenu/AccountMenu';
import { useHistory } from 'react-router-dom';
import { updateActiveTab } from '../../../store/app/appSlice';
import EditAvatar from '../../Icons/EditAvatart';

const collections = [
  {
    img: '../../img/top_collection_home/1.png',
    ava: '../../img/top_collection_home/a1.png'
  },
  {
    img: '../../img/top_collection_home/2.png',
    ava: '../../img/top_collection_home/a2.png'
  },
  {
    img: '../../img/top_collection_home/3.png',
    ava: '../../img/top_collection_home/a3.png'
  },
  {
    img: '../../img/top_collection_home/4.png',
    ava: '../../img/top_collection_home/a4.png'
  },
  {
    img: '../../img/top_collection_home/5.png',
    ava: '../../img/top_collection_home/a5.png'
  },
  {
    img: '../../img/top_collection_home/3.png',
    ava: '../../img/top_collection_home/a3.png'
  },
  {
    img: '../../img/top_collection_home/1.png',
    ava: '../../img/top_collection_home/a1.png'
  },
  {
    img: '../../img/top_collection_home/2.png',
    ava: '../../img/top_collection_home/a2.png'
  },
  {
    img: '../../img/top_collection_home/3.png',
    ava: '../../img/top_collection_home/a3.png'
  },
  {
    img: '../../img/top_collection_home/4.png',
    ava: '../../img/top_collection_home/a4.png'
  },
  {
    img: '../../img/top_collection_home/5.png',
    ava: '../../img/top_collection_home/a5.png'
  },
  {
    img: '../../img/top_collection_home/3.png',
    ava: '../../img/top_collection_home/a3.png'
  }
];

const productPerPage = 8;
let arrayForHoldingProducts = [];

const AccountCollections = (props) => {
  const [wallet] = useState('9999999999999999999999999999999');
  // const [activeTab, setActiveTab] = useState('owner');
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.app.activeTab);
  const [copyWallet, setCopyWallet] = useState(false);
  const [productToShow, setproductToShow] = useState([]);
  const [next, setNext] = useState(8);
  const history = useHistory();

  const loopWithSlice = (start, end) => {
    const slicedProducts = collections.slice(start, end);
    arrayForHoldingProducts = [...arrayForHoldingProducts, ...slicedProducts];
    setproductToShow(arrayForHoldingProducts);
  };

  useEffect(() => {
    loopWithSlice(0, productPerPage);
  }, []);

  const handleShowMoreProducts = () => {
    loopWithSlice(next, next + productPerPage);
    setNext(next + productPerPage);
  };

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
                    <img src="../img/copy.png" alt="copy button" />
                  </button>
                  {copyWallet ? 'Copied!' : null}
                </div>
              </div>
              <div className="account_balance">
                <img src="../img/token_11.png" alt="token" />
                Balance: 123345 eYe ($1234)
              </div>
              <button
                className="create_collection create_collection_mobile"
                onClick={() => history.push('/create/collection')}
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
              <FilterAccount />
            </div>
          </div>
          <div className="creator_account_main_block">
            {productToShow.map((collection, i) => (
              <CollectionBlock collection={collection} key={i} />
            ))}
          </div>
          <button className="load_more" onClick={handleShowMoreProducts}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountCollections;
