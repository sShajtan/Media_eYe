import React, { useRef, useState } from 'react';
import './AirdropBlock.css';
import Slider from 'react-slick';
import SearchIcon from '../../Icons/SearchIcon';
import CloseIconRecepient from '../../Icons/CloseIconRecepient';
import { Collapse } from 'react-collapse';
import Down from '../../Icons/down';

const AirdropBlock = (props) => {
  const { product, airdropSingle, addImage } = props;
  const sliderRef = useRef();
  const [recepientAddress, setRecpientAddress] = useState('');
  const [recepient, setRecpient] = useState([]);
  const [showRecipient, setShowRecipient] = useState(false);

  const addRecepient = () => {
    if (recepientAddress.length < 11) {
      return;
    }
    if ((recepient.length === 1) & (product.quantity === undefined)) {
      return;
    }
    if (recepient.length === product.quantity) {
      return;
    }
    let arr = recepient.slice();
    if (arr.some((elem) => elem === recepientAddress)) {
      return;
    } else {
      arr.push(recepientAddress);
      setRecpient(arr);
    }
  };

  const deleteRecepient = (i) => {
    let arr = recepient.slice();
    arr.splice(i, 1);
    setRecpient(arr);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    arrows: false,
    fade: true,
    autoplay: false,
    pauseOnHover: true,
    className: 'explorer_slide'
  };

  return (
    <div className="explore_block_wrapper airdrop_block">
      <div className="explore_block">
        <div className="explore_block_img">
          <Slider {...settings} ref={sliderRef}>
            {product ? (
              product.img.map((image, i) => (
                <React.Fragment>
                  <div className="explore_block_img_wrapper" key={i}>
                    <div>
                      <img src={image} alt="nft_card" />
                    </div>
                  </div>
                </React.Fragment>
              ))
            ) : (
              <React.Fragment>
                <div className="explore_block_img_wrapper">
                  <div>
                    <img src="../../img/marketplace_img.png" alt="product" />
                  </div>
                </div>
              </React.Fragment>
            )}
          </Slider>
        </div>
        <div className="explore_block_info put_on_block_single">
          <div>
            <h6>Demo Title, Demo Title </h6>
            <span className="put_on_block_single_quantity">
              {product.quantity ? 'Quantity ' + product.quantity : null}{' '}
            </span>
            {product.creator ? null : <a href="/">@user123</a>}
          </div>
          {airdropSingle ? (
            <div className="on_sale_in_checkbox">
              <input
                id={product.id}
                type="checkbox"
                onChange={(e) => addImage(e)}
              />
              <label htmlFor={product.id}>
                <span></span>
              </label>
            </div>
          ) : null}
        </div>
      </div>
      <h5
        onClick={() => setShowRecipient(!showRecipient)}
        className={showRecipient ? 'active' : null}
      >
        Add recipient (Optional) <Down />
      </h5>
      <Collapse isOpened={showRecipient}>
        <div className="airdrop_recepient_block">
          <div className="airdrop_recepient_block_search">
            <input type="search" />
            <button>
              <SearchIcon />
            </button>
          </div>
          <div className="airdrop_recepient_block_add_adress">
            <input
              value={recepientAddress}
              placeholder="Add Address"
              onChange={(e) => setRecpientAddress(e.target.value)}
            />{' '}
            <button onClick={() => addRecepient()}>
              <span>+</span>
            </button>
          </div>
          <div className="airdrop_recepient_block_adress_list">
            <ol>
              <li>
                <div>Address:</div> <div>Percentage split:</div>
                <div></div>
              </li>
            </ol>
            <ol>
              {recepient.map((item, i) => (
                <li key={i}>
                  <div>
                    <span>{i + 1}</span>
                    {item.substring(0, 5)}...
                    {item.substring(item.length - 5)}
                  </div>
                  <input />{' '}
                  <button onClick={() => deleteRecepient(i)}>
                    <CloseIconRecepient />
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="airdrop_recepient_block_footer">
            <span>CSV File</span>
            <label className="gradient-txt">
              Upload
              <input type="file" />
            </label>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default AirdropBlock;
