import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Airdrop.css';
import SearchIcon from '../../Icons/SearchIcon';
import Filter from '../../ContentMarketplace/Filter/FilterPutOn';
import AirdropBlock from '../AirdropBlock/AirdropBlock';
import { useLocation } from 'react-router-dom';
import AddEmptyBlocks from '../../../utils/AddEmptyBlocks';

const Airdrop = (props) => {
  const [activeImages, setActiveImages] = useState([]);
  const [fixedButtons, setFixedButtons] = useState(true);
  const location = useLocation();
  const history = useHistory();
  const product = location.state.activeImages;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e) => {
    let offset;
    if (window.screen.width > 575) {
      offset = 150;
    } else {
      offset = 420;
    }
    if (
      document.body.clientHeight <
      window.scrollY + window.innerHeight + offset
    ) {
      setFixedButtons(false);
    }
    if (
      document.body.clientHeight >
      window.scrollY + window.innerHeight + offset
    ) {
      setFixedButtons(true);
    }
  };

  const addImage = (e) => {
    let id = e.target.id;
    let activeImage;
    let arr = activeImages.slice();
    if (e.target.checked === true) {
      activeImage = product.find((val) => val.id == id);
      arr.push(activeImage);
      setActiveImages(arr);
    } else {
      let filterArr = arr.filter((val) => val.id != id);
      setActiveImages(filterArr);
    }
  };

  return (
    <div className="create_campaign">
      <div className="container create_campaign_header">
        <button className="goBack_button" onClick={() => history.goBack()}>
          <span>&#8592; </span> GoBack
        </button>
      </div>
      <div className="create_campaign_content">
        <div className="container">
          <div className="create_campaign_menu">
            <div className="create_campaign_search">
              <input type="search" />
              <button>
                <SearchIcon />
              </button>
            </div>
            <Filter />
          </div>
          <div className="create_campaign_content_main">
            {product.map((product, i) => (
              <AirdropBlock product={product} key={i} addImage={addImage} />
            ))}
            {AddEmptyBlocks(product.length)}
          </div>
        </div>
      </div>
      <div
        className={
          fixedButtons
            ? 'create_campaign_footer_wrapper fixed'
            : 'create_campaign_footer_wrapper'
        }
      >
        <div className="container">
          <div className="put_on_marketplace_create_footer">
            <Link>Airdrop</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
