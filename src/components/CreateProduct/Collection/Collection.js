import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Collection.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Art from '../../Icons/Categories/Art';

const animatedComponents = makeAnimated();

const options = [
  { value: 'Gaming', label: 'Gaming' },
  { value: 'Media', label: 'Media' },
  { value: 'Art', label: 'Art' },
  { value: 'Crypto', label: 'Crypto' },
  { value: 'Business', label: 'Business' },
  { value: 'Sport', label: 'Sport' }
];

const Collection = (props) => {
  const [activeCategory, setActiveCategory] = useState('1');
  const { darkTheme } = props;
  const [activeSingle, setActiveSingle] = useState(true);
  let history = useHistory();

  const handleChange = (e) => {
    setActiveCategory(e.target.value);
  };

  return (
    <div className="collection_product">
      <div className="container">
        <a className="goBack_button" onClick={() => history.goBack()}>
          <span>&#8592; </span> GoBack
        </a>
        <h3>Create your collection</h3>
        <a className="tutorial">Tutorial &#5125;</a>
        <div className="collection_product_main">
          <div className="collection_logo_img collection_block collection_block_img">
            <h5>Logo image</h5>
            <span>
              This image will also be used for nsvigation. 350 x 350
              recommended.
            </span>
            <label>
              <input type="file" ection_block />
            </label>
          </div>
          <div className="collection_fratured_img collection_block collection_block_img">
            <h5>Logo image</h5>
            <span>
              This image will also be used for nsvigation. 350 x 350
              recommended.
            </span>
            <label>
              <input type="file" ection_block />
            </label>
          </div>
          <div className="collection_banner_img collection_block collection_block_img">
            <h5>Logo image</h5>
            <span>
              This image will also be used for nsvigation. 350 x 350
              recommended.
            </span>
            <label>
              <input type="file" ection_block />
            </label>
          </div>
          <div className="collection_block">
            <label>Name</label>
            <input type="text" />
            <span>Choose a name for your store.</span>
          </div>
          <div className="collection_block collection_block_url">
            <label>URL</label>
            <input type="text" />
            <span>
              Customize your URL on OpenSea. Must only contain lowercase
              letters, numbers, and hyphens.
            </span>
          </div>
          <div className="collection_block collection_block_desc">
            <label>Decscription</label>
            <textarea rows="3"></textarea>
          </div>
          <div className="collection_block collection_block_category">
            <h5>Category</h5>
            <span>
              Adding a catrgory will help make your item discoverable on Media
              eYe.
            </span>
            <div>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                options={options}
                isMulti
              />
            </div>
          </div>
          <div className="collection_block collection_block_links">
            <span>Links</span>
            <div>
              <input placeholder="yoursite.io" />
            </div>
            <div>
              <input placeholder="https://discord.gg/abcde" />
            </div>
            <div>
              <input placeholder="https://twitter.com/YourTwitterHandle" />
            </div>
            <div>
              <input placeholder="https://www.instagram.com/YourInstagramHandle" />
            </div>
            <div>
              <input placeholder="https://www.medium.com/@YourMediumHandle" />
            </div>
            <div>
              <input placeholder="https://t.me/abcdef/" />
            </div>
          </div>
          <div className="collection_block collection_block_royalties">
            <label>Royalties</label>
            <span>
              Collect a fee when a user re-sells an item you originally created.
              This is deducted from the final sale price and paid monthly to a
              payout address of your choosing.
            </span>
            <span>Percentage fee</span>
            <input type="text" placeholder="0.00" />
          </div>
          <div className="collection_block collection_block_buttons collection_block_blockchain">
            <h5>Blockchain</h5>
            <span>
              Select the blockchain where you’d like new items from this
              collection to be added by default.
            </span>
            <div>
              <button>
                <img
                  src={
                    darkTheme ? '../img/eth_sm.png' : '../img/eth_sm_dark.png'
                  }
                />
                <div>
                  <h6>ETH</h6>
                  <span>Ethereum</span>
                </div>
              </button>
              <button>
                <img src="../img/bnb.png" />
                <div>
                  <h6>BNB</h6>
                  <span>Binance</span>
                </div>
              </button>
            </div>
            <select>
              <option>ETH</option>
            </select>
          </div>
          <div className="collection_block collection_block_buttons collection_block_payment">
            <h5>Payment tokens</h5>
            <span>These tokens can be used to buy and sell your items.</span>
            <div>
              <button>
                <img
                  src={
                    darkTheme ? '../img/eth_sm.png' : '../img/eth_sm_dark.png'
                  }
                />
                <div>
                  <h6>ETH</h6>
                  <span>Ethereum</span>
                </div>
              </button>
              <button>
                <img src="../img/bnb.png" />
                <div>
                  <h6>BNB</h6>
                  <span>Binance</span>
                </div>
              </button>
              <button>
                <img src="../img/eye_sm.png" />
                <div>
                  <h6>eYe</h6>
                  <span>Media eYe</span>
                </div>
              </button>
            </div>
            <select>
              <option>Add token</option>
            </select>
          </div>
          <div className="collection_block collection_block_buttons collection_block_theme">
            <h5>Display theme</h5>
            <span>Change how your items are shown.</span>
            <div>
              <button>
                <img src="../img/padded.png" />
                <h5>Padded</h5>
                <span>Recommended for assets with transparent background</span>
              </button>
              <button>
                <img src="../img/contained.png" />
                <h5>Contained</h5>
                <span>Recommended for assets that are not a 1:1 ratio</span>
              </button>
              <button>
                <img src="../img/covered.png" />
                <h5>Covered</h5>
                <span>Recommended for assets that can extend to the edge</span>
              </button>
            </div>
          </div>
          <button className="create">Create</button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
