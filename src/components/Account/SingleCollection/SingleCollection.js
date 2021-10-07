import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse } from 'react-collapse';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import avatar from '../../../assets/img/avatar_collection.png';
import './SingleCollection.css';
import SearchIcon from '../../Icons/SearchIcon';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import { useHistory } from 'react-router-dom';
import Down from '../../Icons/down';
import CollectionSingleBlock from '../CollectionSingleBlock/CollectionSingleBlock';

const animatedComponents = makeAnimated();

let minters = [
  {
    id: 1,
    value: 'Artist_Title_1',
    label: (
      <span>
        <img src={avatar} />
        &ensp; Artist_Title<button>Add</button>
      </span>
    ),
    img: avatar
  },
  {
    id: 2,
    value: 'Artist_Title_2',
    label: (
      <span>
        <img src={avatar} />
        &ensp; Artist_Title<button>Add</button>
      </span>
    ),
    img: avatar
  },
  {
    id: 3,
    value: 'Artist_Title_3',
    label: (
      <span>
        <img src={avatar} />
        &ensp; Artist_Title<button>Add</button>
      </span>
    ),
    img: avatar
  },
  {
    id: 4,
    value: 'Artist_Title_4',
    label: (
      <span>
        <img src={avatar} />
        &ensp; Artist_Title<button>Add</button>
      </span>
    ),
    img: avatar
  }
];

const SingleCollection = (props) => {
  const [wallet, setWallet] = useState('9999999999999999999999999999999');
  const [showText, setShowText] = useState(false);
  const theme = useSelector((state) => state.app.darkTheme);
  const [grid, setGrid] = useState('1');
  const [showEditblock, setShowEditblock] = useState(false);
  const [activeMinters, setActiveMinters] = useState([]);
  const [valueSelect, setValueSelect] = useState(null);
  const activeTab = useSelector((state) => state.app.activeTab);
  const Links = useRef(null);
  let history = useHistory();

  const handleChangMinters = (e) => {
    if (e[0] === undefined) {
      return;
    }
    let arr = activeMinters.slice();
    arr.push(e[0]);
    setActiveMinters(arr);
    minters.forEach(function (item, i) {
      if (item.id == e[0].id) {
        minters.splice(i, 1);
      }
    });
  };

  const deleteMinters = (id) => {
    let arr = activeMinters.slice();
    arr.forEach(function (item, i) {
      if (item.id == id) {
        arr.splice(i, 1);
        minters.push(item);
      }
    });
    setActiveMinters(arr);
  };

  const activeMintersList = activeMinters.map(function (item) {
    return (
      <div className="active_minters_block">
        <img
          src="../../img/close_btn.png"
          className="close_btn"
          onClick={() => deleteMinters(item.id)}
        />
        <img src={item.img} />
        <h5 onClick={() => history.push('/creator-account')}>{item.value}</h5>
      </div>
    );
  });

  return (
    <div className="creator_account account_collection single_collection">
      <div className="container">
        <div className="creator_account_main">
          <div className="img_line">
            <img src="../../img/creator_account_1.png" />
            <button
              className="account_img_edit active"
              onClick={() => setShowEditblock(!showEditblock)}
            >
              <img src="../../img/pen.png" />
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
              <a className="goBack_button" onClick={() => history.goBack()}>
                <span>&#8592; </span> Go Back
              </a>
              <button onClick={() => history.push('/create/collection')}>
                <span>Create Collection</span>
              </button>
            </div>
            <div className="creator_account_avatar">
              <img src="../../img/creator_account_avatar.png" />
            </div>
            <div className="collection_right_block">
              <div className="account_links">
                <a>
                  <img
                    src={
                      theme
                        ? '../../img/account_links/1_dark.png'
                        : '../../img/account_links/1.png'
                    }
                  />
                </a>
                <a>
                  <img
                    src={
                      theme
                        ? '../../img/account_links/2_dark.png'
                        : '../../img/account_links/2.png'
                    }
                  />
                </a>
                <a>
                  <img
                    src={
                      theme
                        ? '../../img/account_links/3_dark.png'
                        : '../../img/account_links/3.png'
                    }
                  />
                </a>
                <a>
                  <img
                    src={
                      theme
                        ? '../../img/account_links/4_dark.png'
                        : '../../img/account_links/4.png'
                    }
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
              <img src="../../img/heart.png" />
              123 k
            </div>
            <div>
              <span>74.0</span>
              volume traded
            </div>
            <div>
              <img src="../../img/eth.png" />
              ERC 721
            </div>
          </div>

          {activeTab === 'minter' ? null : (
            <button
              className="create_collection create_collection_mobile"
              onClick={() => history.push('/create/collection')}
            >
              Create Collection
            </button>
          )}
          {activeTab === 'minter' ? (
            <h3>You are Minter of the Collection 1 [Title]</h3>
          ) : null}
          <div className="creator_account_filter">
            <div className="creator_account_search">
              <input type="text" placeholder="Search" />
              <button>
                <SearchIcon />
              </button>
            </div>
            <div className="add_block_colletion">
              <button className="create_collection">Add Item</button>
              {activeTab === 'minter' ? null : (
                <div>
                  <h6>Add Minter</h6>
                  <div className="collection_block_content_minters">
                    <Select
                      components={animatedComponents}
                      options={minters}
                      placeholder="@user_name"
                      onChange={handleChangMinters}
                      isMulti
                      value={valueSelect}
                    />
                  </div>
                </div>
              )}
            </div>
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
          <div className="active_minters">
            {activeMinters.length > 0 ? (
              <h4>{activeMinters.length} Minters</h4>
            ) : null}
            {activeMintersList}
          </div>
          <div
            className={
              grid == '2'
                ? 'creator_account_main_block two_rows'
                : 'creator_account_main_block one_row'
            }
          >
            <CollectionSingleBlock />
            <CollectionSingleBlock />
            <CollectionSingleBlock />
            <CollectionSingleBlock />
            <CollectionSingleBlock />
            <CollectionSingleBlock />
            <CollectionSingleBlock />
            <CollectionSingleBlock />
          </div>
          <button className="load_more">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCollection;
