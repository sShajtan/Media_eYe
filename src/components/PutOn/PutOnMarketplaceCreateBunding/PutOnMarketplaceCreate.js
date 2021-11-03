import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './PutOnMarketplaceCreate.css';
import { useLocation } from 'react-router-dom';
import Down from '../../Icons/down';
import Twitter from '../../Icons/ProductIcons/Twitter';
import Facebook from '../../Icons/ProductIcons/Facebook';
import Instagram from '../../Icons/ProductIcons/Instagram';
import { Collapse } from 'react-collapse';
import SearchIcon from '../../Icons/SearchIcon';
import Slider from 'react-slick';
import CoverImage from '../../Icons/CoverImage';
import Popup from './SuccessPopup/Popup';
import PopupImage from '../../ProductCard/ProductPopup/Popup';
import CloseIconRecepient from '../../Icons/CloseIconRecepient';
import CoverImageActive from '../../Icons/CoverImageActive';
import { useHistory } from 'react-router-dom';

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="bunding_arrow_left">
      <span>
        <Down />
      </span>
    </button>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="bunding_arrow_right">
      <span>
        <Down />
      </span>
    </button>
  );
}

const PutOnMarketplace = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);
  const location = useLocation();
  const product = location.state.activeImages;
  const history = useHistory();
  const [activeSlide, setActiveSlide] = useState(0);
  const [showRecipient, setShowRecipient] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [activeBlockchain, setActiveBlockchain] = useState(null);
  const [activeSingle, setActiveSingle] = useState(true);
  const [activeToken, setActiveToken] = useState(null);
  const [nav1, setNav1] = useState(null);
  const [showPopupImage, setShowPopupImage] = useState(false);
  const [recepientAddress, setRecpientAddress] = useState('');
  const [recepient, setRecpient] = useState([]);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef();
  const slider2 = useRef();
  const [fixedButtons, setFixedButtons] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

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

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const addRecepient = () => {
    if (recepientAddress.length < 11) {
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

  const togglePopupImage = () => {
    setShowPopupImage(!showPopupImage);
  };

  const deleteRecepient = (i) => {
    let arr = recepient.slice();
    delete arr[i];
    setRecpient(arr);
  };

  useEffect(() => {
    setNav2(slider2.current);
  }, []);

  useEffect(() => {
    setNav1(slider1.current);
  }, []);

  const settings = {
    asNavFor: nav2,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    beforeChange: (current, next) => setActiveSlide(next)
  };

  const settings2 = {
    asNavFor: nav1,
    infinite: true,
    slidesToShow: product.length > 4 ? 5 : product.length,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: product.length > 3 ? 4 : product.length
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: product.length > 2 ? 3 : product.length
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="put_on_marketplace_create">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className="container">
        <Popup showPopup={showPopup} togglePopup={togglePopup} />
        <PopupImage
          showPopup={showPopupImage}
          togglePopup={togglePopupImage}
          img={product[activeSlide].fullImage}
        />
        <div className="product_main">
          <div className="product_left">
            <Slider
              {...settings}
              asNavFor={nav2}
              ref={(slider) => (slider1.current = slider)}
            >
              {product.map((item, i) => (
                <div
                  key={i}
                  className="product_image"
                  onClick={togglePopupImage}
                >
                  <img src={item.fullImage[0]} alt="product" />
                </div>
              ))}
            </Slider>
            <div
              className={
                'prodcut_bunding_small_slider count_slider_' + product.length
              }
            >
              <Slider
                {...settings2}
                ref={(slider) => (slider2.current = slider)}
              >
                {product.map((item, i) => (
                  <div className="prodcut_bunding_small_slide_wrapper" key={i}>
                    <div
                      className={
                        coverImage === i
                          ? 'prodcut_bunding_small_slide active'
                          : 'prodcut_bunding_small_slide'
                      }
                    >
                      <img src={item.img[0]} alt="product" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div
              className="cover_image"
              onClick={() => setCoverImage(activeSlide)}
            >
              {activeSlide === coverImage ? (
                <CoverImageActive />
              ) : (
                <CoverImage />
              )}{' '}
              Cover image
            </div>
            <div className="product_right">
              <h2>Product ID</h2>
              <div className="product_subtitle">NFT ID: 125815</div>
              <div className="bundle_count">Bundle of {product.length}</div>
              <div className="product_header">
                <span></span>
                <span>
                  Share: <Twitter /> <Facebook /> <Instagram />
                </span>
              </div>
              <div className="product_description">
                <h6>description</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{' '}
                </p>
              </div>
            </div>
            <div className="">
              <h5>Details</h5>
              <div className="product_auction_details">
                <div className="product_auction_details_row">
                  <span>NFT Token Type</span>
                  <span>{product[activeSlide].info.type}</span>
                </div>
                <div className="product_auction_details_row">
                  <span>Label</span>
                  <span>{product[activeSlide].info.label}</span>
                </div>
                <div className="product_auction_details_row">
                  <span>Creator address</span>
                  <span className="adress">
                    {product[activeSlide].info.creator}
                  </span>
                </div>
                <div className="product_auction_details_row">
                  <span>NFT address</span>
                  <span>{product[activeSlide].info.adress}</span>
                </div>
                <div className="product_auction_details_row">
                  <span>NFT Token ID</span>
                  <span>{product[activeSlide].info.token_id}</span>
                </div>
                <div className="product_auction_details_row">
                  <span>The number of tokens created</span>
                  <span>{product[activeSlide].info.number}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product_right">
            <h2>Product ID</h2>
            <div className="product_subtitle">NFT ID: 125815</div>
            <div className="bundle_count bundle_count_desktop">
              Bundle of {product.length}
            </div>
            <div className="product_header">
              <span></span>
              <span>
                Share: <Twitter /> <Facebook /> <Instagram />
              </span>
            </div>
            <div className="product_description">
              <h6>description</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </p>
            </div>
            <div className="collection_block collection_block_buttons collection_block_blockchain">
              <h5 className="blockchain_title">Blockchain</h5>
              <div>
                <button
                  className={activeBlockchain === 'ETH' ? 'active' : null}
                  onClick={() => {
                    setActiveBlockchain('ETH');
                  }}
                >
                  <img
                    src={theme ? '../img/eth_sm.png' : '../img/eth_sm_dark.png'}
                    alt="ETH"
                  />
                  <div>
                    <h6>ETH</h6>
                    <span>Ethereum</span>
                  </div>
                </button>
              </div>
              <div className="put_on_block">
                <h4>Put on marketplace</h4>
                <div className="put_on_buttons">
                  <div
                    className={activeSingle ? 'fixed active' : 'fixed'}
                    onClick={() => {
                      setActiveSingle(true);
                    }}
                  >
                    <svg
                      width="49"
                      height="49"
                      viewBox="0 0 49 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip1)">
                        <path
                          d="M38.2812 18.375H36.75V12.25C36.75 5.49412 31.2559 0 24.5 0C17.7441 0 12.25 5.49412 12.25 12.25V18.375H10.7188C8.18708 18.375 6.125 20.435 6.125 22.9688V44.4062C6.125 46.94 8.18708 49 10.7188 49H38.2812C40.8129 49 42.875 46.94 42.875 44.4062V22.9688C42.875 20.435 40.8129 18.375 38.2812 18.375ZM16.3333 12.25C16.3333 7.74608 19.9961 4.08333 24.5 4.08333C29.0039 4.08333 32.6667 7.74608 32.6667 12.25V18.375H16.3333V12.25Z"
                          fill="white"
                        />
                        <path
                          d="M26.8277 32.7898C26.1547 32.4179 25.4393 32.1346 24.731 31.8406C24.3201 31.6706 23.927 31.4723 23.5799 31.196C22.8964 30.6506 23.0274 29.7652 23.8278 29.4146C24.0545 29.3154 24.2918 29.2835 24.5326 29.2694C25.4606 29.2198 26.3424 29.3898 27.1818 29.7935C27.5998 29.9954 27.7379 29.9317 27.8796 29.496C28.0283 29.0356 28.1523 28.5681 28.2904 28.1041C28.3825 27.7925 28.2691 27.587 27.9752 27.456C27.4368 27.2187 26.8843 27.0487 26.3035 26.9566C25.5456 26.8397 25.5456 26.8362 25.542 26.0747C25.5385 25.0016 25.5385 25.0016 24.4618 25.0016C24.306 25.0016 24.1501 24.998 23.9943 25.0016C23.4914 25.0157 23.4064 25.1043 23.3922 25.6108C23.3851 25.8374 23.3922 26.0641 23.3887 26.2943C23.3851 26.9672 23.3816 26.9566 22.737 27.1904C21.1786 27.757 20.2153 28.8196 20.1126 30.5196C20.0205 32.0248 20.8067 33.0413 22.0428 33.7815C22.8043 34.2384 23.6472 34.5076 24.4547 34.8653C24.7699 35.0034 25.071 35.1628 25.3331 35.3824C26.1087 36.0234 25.967 37.0895 25.0462 37.4932C24.5539 37.7093 24.0332 37.7624 23.4984 37.6951C22.6732 37.5924 21.8834 37.3764 21.1397 36.9903C20.704 36.7636 20.5765 36.8238 20.4278 37.2949C20.3003 37.7022 20.1869 38.113 20.0736 38.5239C19.9213 39.0764 19.978 39.2074 20.5057 39.466C21.1786 39.7918 21.8976 39.9583 22.6307 40.0752C23.2045 40.1672 23.2222 40.192 23.2293 40.787C23.2328 41.0562 23.2328 41.3289 23.2364 41.5981C23.2399 41.9381 23.4028 42.1364 23.7534 42.1435C24.1501 42.1506 24.5503 42.1506 24.947 42.14C25.2728 42.1329 25.4393 41.9558 25.4393 41.6264C25.4393 41.2581 25.457 40.8862 25.4428 40.5179C25.4251 40.1424 25.5881 39.9512 25.9493 39.852C26.7816 39.6254 27.49 39.1791 28.0354 38.5133C29.5512 36.6716 28.9739 33.9763 26.8277 32.7898Z"
                          fill="#141233"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip1">
                          <rect width="49" height="49" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Fixed price
                  </div>
                  <div
                    className={activeSingle ? 'auction' : 'auction active'}
                    onClick={() => {
                      setActiveSingle(false);
                    }}
                  >
                    <svg
                      width="49"
                      height="49"
                      viewBox="0 0 49 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip2)">
                        <path
                          d="M28.1695 38.626H3.67934C1.64822 38.626 0 40.274 0 42.3054V48.9959H31.8487V42.3054C31.8487 40.274 30.2006 38.626 28.1695 38.626Z"
                          fill="#A7A7A7"
                        />
                        <path
                          d="M48.3398 39.1459L25.9845 16.7904L30.3024 12.4802C31.0143 13.108 32.1092 13.0773 32.7829 12.4036C33.4873 11.6916 33.4873 10.5508 32.7829 9.83887L23.4733 0.536901C22.769 -0.175061 21.6206 -0.175061 20.9163 0.536901C20.2043 1.24129 20.2043 2.38968 20.9163 3.09396L20.8397 3.01741L9.01887 14.8305L9.09543 14.9146C8.39104 14.2027 7.24265 14.2027 6.53837 14.9146C5.8264 15.619 5.8264 16.7674 6.53837 17.4718L15.8403 26.7813C16.5523 27.4857 17.7007 27.4857 18.4051 26.7813C19.1095 26.0694 19.1095 24.9286 18.4051 24.2168L18.4816 24.2931L22.7996 19.9829L45.1472 42.3306C46.0277 43.2111 47.4594 43.2111 48.3398 42.3306C49.2202 41.4502 49.2202 40.0262 48.3398 39.1459Z"
                          fill="#A7A7A7"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip2">
                          <rect width="49" height="49" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Auction
                  </div>
                </div>
              </div>
              <div
                className={
                  activeSingle
                    ? 'product_single_fixed_block active'
                    : 'product_single_fixed_block'
                }
              >
                <h4>Payment tokens</h4>
                <span>Select from our accepted tokens.</span>
                <div className="collection_block_buttons">
                  <button
                    className={activeToken === 'ETH' ? 'active' : null}
                    onClick={() => {
                      setActiveToken('ETH');
                    }}
                  >
                    <img
                      src={
                        theme ? '../img/eth_sm.png' : '../img/eth_sm_dark.png'
                      }
                      alt="ETH"
                    />
                    <div>
                      <h6>ETH</h6>
                      <span>Ethereum</span>
                    </div>
                  </button>
                  <button
                    className={activeToken === 'USDT' ? 'active' : null}
                    onClick={() => {
                      setActiveToken('USDT');
                    }}
                  >
                    <img src="../img/usdt_sm.png" alt="USDT" />
                    <div>
                      <h6>USDT</h6>
                      <span>Tether</span>
                    </div>
                  </button>
                  {/* <button
                    className={activeToken === 'BNB' ? 'active' : null}
                    onClick={() => {
                      setActiveToken('BNB');
                    }}
                  >
                    <img src="../img/bnb.png" alt="BNB" />
                    <div>
                      <h6>BNB</h6>
                      <span>Binance</span>
                    </div>
                  </button>
                  <button
                    className={activeToken === 'eYe' ? 'active' : null}
                    onClick={() => {
                      setActiveToken('eYe');
                    }}
                  >
                    <img src="../img/eye_sm.png" alt="eYe" />
                    <div>
                      <h6>eYe</h6>
                      <span>Media eYe</span>
                    </div>
                  </button> */}
                </div>
                <div className="selected_popup_bid">
                  <input type="text" placeholder="Add token" />
                  <div className="selected_popup_bid_dropdown">
                    <div className="selected_block_price_dropdown">
                      <Down />
                    </div>
                  </div>
                </div>
                <span>
                  These tokens can be used to buy and sell your items.
                </span>
                <h5>Price</h5>
                <div className="selected_popup_bid piece_block">
                  <input type="text" placeholder="Enter price for one piece" />
                  <div className="selected_popup_bid_dropdown">
                    <div className="selected_block_price_dropdown">ETH</div>
                  </div>
                </div>
                <div className="price_info">
                  <div>
                    Service fee <span> 2.5%</span>
                  </div>
                  <div>
                    You will receive <span>0 ETH</span>
                  </div>
                  <div>
                    will receive <span>0 ETH</span>
                  </div>
                </div>
                <h5>
                  Charity (Optional){' '}
                  <img src="../../img/charity.png" alt="charity" />
                </h5>
                <div className="selected_popup_bid piece_block">
                  <input type="number" placeholder="10" />
                  <div className="selected_popup_bid_dropdown">
                    <div className="selected_block_price_dropdown">%</div>
                  </div>
                </div>
                <h5>Royalties</h5>
                <div className="selected_popup_bid piece_block">
                  <input type="number" placeholder="10" />
                  <div className="selected_popup_bid_dropdown">
                    <div className="selected_block_price_dropdown">%</div>
                  </div>
                </div>
                <span>Suggested: 5%, 10%</span>
                <h5
                  onClick={() => setShowRecipient(!showRecipient)}
                  className={showRecipient ? 'active' : null}
                >
                  Add recipient (Optional) <Down />
                </h5>
                <Collapse isOpened={showRecipient}>
                  <div className="recepient_block">
                    <div className="recepient_block_search">
                      <input type="search" />
                      <button>
                        <SearchIcon />
                      </button>
                    </div>
                    <div className="recepient_block_add_adress">
                      <input
                        value={recepientAddress}
                        placeholder="Add Address"
                        onChange={(e) => setRecpientAddress(e.target.value)}
                      />{' '}
                      <button onClick={() => addRecepient()}>
                        <span>+</span>
                      </button>
                    </div>
                    <div className="recepient_block_adress_list">
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
                  </div>
                </Collapse>
              </div>
              <div
                className={
                  activeSingle
                    ? 'product_auction_fixed_block'
                    : 'product_auction_fixed_block active'
                }
              >
                <h4>Payment tokens</h4>
                <span>Select from our accepted tokens.</span>
                <div className="collection_block_buttons">
                  <button
                    className={activeToken === 'ETH' ? 'active' : null}
                    onClick={() => {
                      setActiveToken('ETH');
                    }}
                  >
                    <img
                      src={
                        theme ? '../img/eth_sm.png' : '../img/eth_sm_dark.png'
                      }
                      alt="ETH"
                    />
                    <div>
                      <h6>ETH</h6>
                      <span>Ethereum</span>
                    </div>
                  </button>
                  <button
                    className={activeToken === 'USDT' ? 'active' : null}
                    onClick={() => {
                      setActiveToken('USDT');
                    }}
                  >
                    <img src="../img/usdt_sm.png" alt="USDT" />
                    <div>
                      <h6>USDT</h6>
                      <span>Tether</span>
                    </div>
                  </button>
                </div>
                <div className="selected_popup_bid">
                  <input type="text" placeholder="Add token" />
                  <div className="selected_popup_bid_dropdown">
                    <div className="selected_block_price_dropdown">
                      <Down />
                    </div>
                  </div>
                </div>
                <span>
                  These tokens can be used to buy and sell your items.
                </span>
                <h5>Minimum bid</h5>
                <div className="selected_popup_bid piece_block">
                  <input type="text" placeholder="Enter minimum bid" />
                  <div className="selected_popup_bid_dropdown">
                    <div className="selected_block_price_dropdown">ETH</div>
                  </div>
                </div>
                <span>Bids below this amount won’t be allowed.</span>
                <h5>
                  Charity (Optional){' '}
                  <img src="../../img/charity.png" alt="charity" />
                </h5>
                <div className="selected_popup_bid piece_block">
                  <input type="number" placeholder="10" />
                  <div className="selected_popup_bid_dropdown">
                    <div className="selected_block_price_dropdown">%</div>
                  </div>
                </div>
                <div className="auction_date">
                  <div className="selected_popup_bid piece_block">
                    <h6>Starting Date</h6>
                    <div>
                      <input type="text" placeholder="Right after listing" />
                      <div className="selected_popup_bid_dropdown">
                        <div className="selected_block_price_dropdown">
                          <Down />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="selected_popup_bid piece_block">
                    <h6>Expiration Date</h6>
                    <div>
                      <input type="text" placeholder="1 day" />
                      <div className="selected_popup_bid_dropdown">
                        <div className="selected_block_price_dropdown">
                          <Down />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h5>Royalties</h5>
                <div className="selected_popup_bid piece_block">
                  <input type="number" placeholder="10" />
                  <div className="selected_popup_bid_dropdown">
                    <div className="selected_block_price_dropdown">%</div>
                  </div>
                </div>
                <span>Suggested: 5%, 10%</span>
                <h5
                  onClick={() => setShowRecipient(!showRecipient)}
                  className={showRecipient ? 'active' : null}
                >
                  Add recipient (Optional) <Down />
                </h5>
                <Collapse isOpened={showRecipient}>
                  <div className="recepient_block">
                    <div className="recepient_block_search">
                      <input type="search" />
                      <button>
                        <SearchIcon />
                      </button>
                    </div>
                    <div className="recepient_block_add_adress">
                      <input
                        value={recepientAddress}
                        onChange={(e) => setRecpientAddress(e.target.value)}
                        placeholder="Add Address"
                      />{' '}
                      <button onClick={() => addRecepient()}>
                        <span>+</span>
                      </button>
                    </div>
                    <div className="recepient_block_adress_list">
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
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          fixedButtons
            ? 'put_on_marketplace_create_footer_wrapper fixed'
            : 'put_on_marketplace_create_footer_wrapper'
        }
      >
        <div className="container">
          <div className="put_on_marketplace_create_footer">
            <button onClick={() => togglePopup()}>Put on Marketplace</button>
            <button onClick={() => history.push('/put-on-marketplace')}>
              {' '}
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PutOnMarketplace;
