import React, { useEffect, useState } from 'react';
import './PutOnMarketplace.css';
import SearchIcon from '../../Icons/SearchIcon';
import Filter from '../../ContentMarketplace/Filter/FilterPutOn';
import PutOnBlock from '../PutOnBlock/PutOnBlock';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
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

const PutOnMarketplace = (props) => {
  const [activeImages, setActiveImages] = useState([]);
  const [disabledButton, setDisabledButton] = useState(false);
  const [fixedButtons, setFixedButtons] = useState(true);
  const [errorMessageSingl, setErrorMessageSingl] = useState(
    'Available only for one NFT'
  );
  const [errorMessageBunding, setErrorMessageBunding] = useState(
    'Available only for two or more NFTs that were created by you'
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e) => {
    let offset;
    if (window.screen.width > 575) {
      offset = 250;
    } else {
      offset = 550;
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

  useEffect(() => {
    let arr = activeImages.slice();
    let ifCrerator = arr.some((val) => val.creator === false);
    if (activeImages.length === 1) {
      setErrorMessageSingl(null);
      setErrorMessageBunding(
        'Available only for two or more NFTs that were created by you'
      );
      setDisabledButton(true);
    } else if (activeImages.length < 1) {
      setDisabledButton(true);
      setErrorMessageBunding(
        'Available only for two or more NFTs that were created by you'
      );
      setErrorMessageSingl('Available only for one NFT');
    } else if ((activeImages.length > 1) & ifCrerator) {
      setDisabledButton(true);
      setErrorMessageBunding(
        'Available only for NFTs that were created by you'
      );
      setErrorMessageSingl('Available only for one NFT');
    } else {
      setErrorMessageBunding(null);
      setDisabledButton(false);
      setErrorMessageSingl('Available only for one NFT');
    }
  }, [activeImages]);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [errorMessageBunding]);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [errorMessageSingl]);

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
    <div className="put_on_marketplace">
      <div className="container">
        <div className="put_on_marketplace_header">
          <h2>Put on Marketplace</h2>
          <a className="tutorial gradient-txt" href="/">
            Tutorial &#5125;
          </a>
        </div>
        <div className="put_on_marketplace_menu">
          <div className="put_on_marketplace_search">
            <input type="search" />
            <button>
              <SearchIcon />
            </button>
          </div>
          <Filter />
        </div>
        <div className="put_on_marketplace_main">
          {product.map((product, i) => (
            <PutOnBlock product={product} key={i} addImage={addImage} />
          ))}
          {AddEmptyBlocks(product.length)}
        </div>
      </div>
      <div
        className={
          fixedButtons
            ? 'put_on_marketplace_buttons_wrapper fixed'
            : 'put_on_marketplace_buttons_wrapper'
        }
      >
        <div className="container">
          <ReactTooltip />
          <div className="put_on_marketplace_buttons">
            <div
            // data-tip={errorMessageSingl ? errorMessageSingl : null}
            // data-arrow-color="transparent"
            >
              <Link
                className={activeImages.length !== 1 ? 'disabled' : null}
                to={{
                  pathname: '/put-on-marketplace/create',
                  state: { activeImages }
                }}
              >
                Singl
              </Link>
            </div>
            <div className="inf_btn">
              <img
                src="../img/i.png"
                alt="info"
                data-tip="Available only for one NFT"
                data-arrow-color="transparent"
              />
            </div>
            <div
            // data-tip={errorMessageBunding ? errorMessageBunding : null}
            // data-arrow-color="transparent"
            >
              <Link
                className={disabledButton ? 'disabled' : null}
                to={{
                  pathname: '/put-on-marketplace/create',
                  state: { activeImages }
                }}
              >
                Create Bundle
              </Link>
            </div>
            <div className="inf_btn">
              <img
                src="../img/i.png"
                alt="info"
                data-tip="Available only for NFTs that were created by you"
                data-arrow-color="transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PutOnMarketplace;
