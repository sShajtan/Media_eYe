import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CreateCampaign.css';
import ReactTooltip from 'react-tooltip';
import SearchIcon from '../../Icons/SearchIcon';
import Filter from '../../ContentMarketplace/Filter/FilterPutOn';
import PutOnBlock from '../../PutOn/PutOnBlock/PutOnBlock';
import AddEmptyBlocks from '../../../utils/AddEmptyBlocks';

const product = [
  {
    id: 1,
    img: ['../../img/home_explore/1.png'],
    fullImage: ['../../img/home_explore/f1.jpg'],
    quantity: 100,
    creator: false,
    info: {
      type: 1155,
      label: 'Lorem1',
      creator: '1c2e11...6f13d',
      adress: 'Lorem1',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 2,
    img: ['../../img/home_explore/2.png'],
    fullImage: ['../../img/home_explore/f2.jpg'],
    creator: false,
    info: {
      type: 1155,
      label: 'Lorem2',
      creator: '1c2e11...6f13d',
      adress: 'Lorem2',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 3,
    img: ['../../img/home_explore/3.png'],
    fullImage: ['../../img/home_explore/f3.jpg'],
    creator: false,
    info: {
      type: 1155,
      label: 'Lorem3',
      creator: '1c2e11...6f13d',
      adress: 'Lorem3',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 4,
    img: ['../../img/home_explore/4.png'],
    fullImage: ['../../img/home_explore/f4.jpg'],
    creator: true,
    quantity: 100,
    info: {
      type: 1155,
      label: 'Lorem4',
      creator: '1c2e11...6f13d',
      adress: 'Lorem4',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 5,
    img: ['../../img/home_explore/5.png'],
    fullImage: ['../../img/home_explore/f5.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem5',
      creator: '1c2e11...6f13d',
      adress: 'Lorem5',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 6,
    img: ['../../img/home_explore/6.png'],
    fullImage: ['../../img/home_explore/f6.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem6',
      creator: '1c2e11...6f13d',
      adress: 'Lorem6',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 7,
    img: ['../../img/home_explore/7.png'],
    fullImage: ['../../img/home_explore/f7.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem7',
      creator: '1c2e11...6f13d',
      adress: 'Lorem7',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 8,
    img: ['../../img/home_explore/13.png'],
    fullImage: ['../../img/home_explore/f13.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem8',
      creator: '1c2e11...6f13d',
      adress: 'Lorem8',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 9,
    img: ['../../img/home_explore/9.png'],
    fullImage: ['../../img/home_explore/f9.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem9',
      creator: '1c2e11...6f13d',
      adress: 'Lorem9',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 10,
    img: ['../../img/home_explore/10.png'],
    fullImage: ['../../img/home_explore/f10.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem10',
      creator: '1c2e11...6f13d',
      adress: 'Lorem10',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 11,
    img: ['../../img/home_explore/11.png'],
    fullImage: ['../../img/home_explore/f11.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem11',
      creator: '1c2e11...6f13d',
      adress: 'Lorem11',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 12,
    img: ['../../img/home_explore/6.png'],
    fullImage: ['../../img/home_explore/f6.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem12',
      creator: '1c2e11...6f13d',
      adress: 'Lorem12',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 13,
    img: ['../../img/home_explore/7.png'],
    fullImage: ['../../img/home_explore/f7.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem13',
      creator: '1c2e11...6f13d',
      adress: 'Lorem13',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 14,
    img: ['../../img/home_explore/9.png'],
    fullImage: ['../../img/home_explore/f9.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem14',
      creator: '1c2e11...6f13d',
      adress: 'Lorem14',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 15,
    img: ['../../img/home_explore/6.png'],
    fullImage: ['../../img/home_explore/f6.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem15',
      creator: '1c2e11...6f13d',
      adress: 'Lorem15',
      token_id: 1155,
      number: 10
    }
  },
  {
    id: 16,
    img: ['../../img/home_explore/16.jpg'],
    fullImage: ['../../img/home_explore/f16.jpg'],
    creator: true,
    info: {
      type: 1155,
      label: 'Lorem16',
      creator: '1c2e11...6f13d',
      adress: 'Lorem16',
      token_id: 1155,
      number: 10
    }
  }
];

const CreateCampaign = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const [activeToken, setActiveToken] = useState(null);
  const [activeImages, setActiveImages] = useState([]);
  const [activeBlockchain, setActiveBlockchain] = useState(null);
  const [fixedButtons, setFixedButtons] = useState(true);
  let history = useHistory();

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
        <h3>Create your NFT Campagin</h3>
        <a className="tutorial" href="/">
          Tutorial &#5125;
        </a>
        <div className="create_campaign_main">
          <div className="create_campaign_block create_campaign_block_buttons create_campaign_block_blockchain">
            <h5>Blockchain</h5>
            <span>
              Select the blockchain where you’d like new items from this
              collection to be added by default.
            </span>
            <div>
              <button
                className={activeBlockchain === 'ETH' ? 'active' : null}
                onClick={() => {
                  setActiveBlockchain('ETH');
                }}
              >
                <img
                  src={
                    darkTheme ? '../img/eth_sm.png' : '../img/eth_sm_dark.png'
                  }
                  alt="eth"
                />
                <div>
                  <h6>ETH</h6>
                  <span>Ethereum</span>
                </div>
              </button>
              <button
                className={activeBlockchain === 'BNB' ? 'active' : null}
                onClick={() => {
                  setActiveBlockchain('BNB');
                }}
              >
                <img src="../img/bnb.png" alt="BNB" />
                <div>
                  <h6>BNB</h6>
                  <span>Binance</span>
                </div>
              </button>
            </div>
          </div>
          <div className="create_campaign_block create_campaign_block_buttons create_campaign_block_blockchain create_campaign_block_tokens">
            <h5>Token type</h5>
            <ReactTooltip />
            <div>
              <div>
                <button
                  className={activeToken === '721' ? 'active' : null}
                  onClick={() => {
                    setActiveToken('721');
                  }}
                >
                  <img
                    src={
                      activeToken === '721' && darkTheme === false
                        ? '../img/alt_white.png'
                        : '../img/alt.png'
                    }
                    alt="721"
                  />
                  <div>
                    <h6>ERC - 721</h6>
                  </div>
                </button>
                <div>
                  <img
                    src="../img/i.png"
                    data-html={true}
                    data-class="roadmap_popup roadmap_popup_active"
                    data-tip="<h6><img src='../img/alt.png' />ERC - 721</h6>
                  <br/>ERC-721 is a global Token standard exhibiting functionalities of developing the Non-Fungible Tokens over the Ethereum blockchain. The ERC-721 contributes to the rarity and uniqueness to the assets designed and developed. The NFTs are developed with unique uint256 token ID attributes that are available globally."
                    alt="info"
                  />
                </div>
              </div>
              <div>
                <button
                  className={activeToken === '1155' ? 'active' : null}
                  onClick={() => {
                    setActiveToken('1155');
                  }}
                >
                  <img
                    src={
                      activeToken === '1155' && darkTheme === false
                        ? '../img/alt_white.png'
                        : '../img/alt.png'
                    }
                    alt="1155"
                  />
                  <div>
                    <h6>ERC - 1155</h6>
                  </div>
                </button>
                <div>
                  <img
                    src="../img/i.png"
                    data-html={true}
                    data-class="roadmap_popup roadmap_popup_active"
                    data-tip="<h6><img src='../img/alt.png' />ERC - 1155</h6>
                  <br/>ERC-1155 is a token standard specifically designed and developed by the Enjin network. ERC-1155 can be used to create both fungible (currencies) and non-fungible (digital cards, pets and in-game skins) assets exclusively on the Ethereum Blockchain Network Architecture along with Transaction bundling which reduces the cost of token development."
                    alt="info"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <PutOnBlock product={product} key={i} addImage={addImage} />
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
            <Link
              to={{
                pathname: '/create-campaign/airdrop',
                state: { activeImages }
              }}
            >
              Airdrop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
