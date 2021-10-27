import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse } from 'react-collapse';
import './SingleCreator.css';
import SearchIcon from '../../Icons/SearchIcon';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import { useHistory } from 'react-router-dom';
import Down from '../../Icons/down';
import avatar from '../../../assets/img/avatar_collection.png';
import ExploreBlock from '../../ContentMarketplace/ExploreBlock/ExploreBlock';

const SingleCreator = (props) => {
  const [showText, setShowText] = useState(false);
  const theme = useSelector((state) => state.app.darkTheme);
  const [showEditblock, setShowEditblock] = useState(false);
  let history = useHistory();

  return (
    <div className="creator_account account_collection single_collection single_creator">
      <div className="container">
        <div className="creator_account_main">
          <div className="img_line">
            <img src="../../../img/creator_account_1.png" alt="line" />
            <button
              className="account_img_edit active"
              onClick={() => setShowEditblock(!showEditblock)}
            >
              <img src="../../../img/pen.png" alt="edit" />
            </button>
            <div className="edit_block">
              <Collapse isOpened={showEditblock}>
                <button>Edit</button>
                <button>Remove collection</button>
              </Collapse>
            </div>
          </div>
          <div className="creator_account_main_header">
            <div className="collection_left_block">
              <span className="goBack_button" onClick={() => history.goBack()}>
                <span>&#8592; </span> Go Back
              </span>
              <button
                onClick={() =>
                  history.push('/create/collection', { fromPopup: true })
                }
              >
                <span>Create Collection</span>
              </button>
            </div>
            <div className="creator_account_avatar">
              <img src="../../../img/creator_account_avatar.png" alt="avatar" />
            </div>
            <div className="collection_right_block">
              <div className="account_links">
                <a href="/">
                  <img
                    src={
                      theme
                        ? '../../../img/account_links/1_dark.png'
                        : '../../../img/account_links/1.png'
                    }
                    alt="account link"
                  />
                </a>
                <a href="/">
                  <img
                    src={
                      theme
                        ? '../../../img/account_links/2_dark.png'
                        : '../../../img/account_links/2.png'
                    }
                    alt="account link"
                  />
                </a>
                <a href="/">
                  <img
                    src={
                      theme
                        ? '../../../img/account_links/3_dark.png'
                        : '../../../img/account_links/3.png'
                    }
                    alt="account link"
                  />
                </a>
                <a href="/">
                  <img
                    src={
                      theme
                        ? '../../../img/account_links/4_dark.png'
                        : '../../../img/account_links/4.png'
                    }
                    alt="account link"
                  />
                </a>
              </div>
            </div>
            <div className="creator_account_info">
              <h4>Collection 1 [Title]</h4>

              <Collapse isOpened={showText}>
                <div className="single_collection_info">
                  {!showText ? <div className="oppacity_wrapper"></div> : null}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ut varius odio. Donec ullamcorper, lorem at dignissim
                  ullamcorper, tellus nisl fringilla augue, ut convallis justo
                  ligula sed nunc. Aliquam tortor elit, maximus nec scelerisque
                  et, posuere vel felis. Aenean fringilla in felis ac sagittis.
                  Mauris porta dui at mi luctus, sit amet tincidunt dui
                  ultrices. Cras ut porttitor ligula. Nam tellus neque, tempus
                  gravida lacus sit amet, fringilla tristique dui. Sed dui
                  tortor, maximus at ante vitae, mollis dictum felis. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Phasellus rhoncus, ante vel viverra
                  placerat, metus erat efficitur dui, non fermentum elit nunc
                  quis lorem. Etiam vel volutpat arcu. Aliquam lobortis felis a
                  venenatis faucibus. Maecenas aliquam, nibh vel rhoncus
                  posuere, ipsum nulla tincidunt neque, ac rutrum nisi orci non
                  erat. Mauris in elit faucibus, congue lorem hendrerit,
                  fringilla sem. In eget vestibulum odio, non porta lorem.
                  Vestibulum ante ipsum primis
                </div>
              </Collapse>

              <button
                className={showText ? 'open_text_btn active' : 'open_text_btn'}
                onClick={() => setShowText(!showText)}
              >
                <Down />
              </button>
            </div>
          </div>
          <div className="single_collection_info_block">
            <div>
              <span>7.0k</span>
              items
            </div>
            <div>
              <span>2.3k</span>
              ovners
            </div>
            <div>
              <img src="../../../img/heart.png" alt="heart" />
              123 k
            </div>
            <div>
              <span>74.0</span>
              volume traded
            </div>
            <div>
              <img src="../../../img/eth.png" alt="token ETH" />
              ERC 721
            </div>
          </div>
          <div className="creator_account_filter">
            <div className="creator_account_search">
              <input type="text" placeholder="Search" />
              <button>
                <SearchIcon />
              </button>
            </div>
            <div className="add_block_colletion add_block_colletion_creator">
              <div class="active_minters_block_cretor">
                <img src={avatar} alt="avatar" />
                <div>
                  <h5>Artist_Title_1</h5>
                  <span>Owner</span>
                </div>
              </div>
            </div>
            <div className="grid_filter">
              <FilterAccount />
            </div>
          </div>
          <div className="active_minters"></div>
          <div className="creator_account_main_block">
            <ExploreBlock mintedBlock={'1/1111'} />
            <ExploreBlock mintedBlock={'2/1111'} />
            <ExploreBlock mintedBlock={'1/1'} />
            <ExploreBlock />
            <ExploreBlock />
            <ExploreBlock />
            <ExploreBlock />
            <ExploreBlock />
          </div>
          <button className="load_more">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCreator;
