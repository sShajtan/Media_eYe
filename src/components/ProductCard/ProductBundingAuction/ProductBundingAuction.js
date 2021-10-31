import React, { useState, useRef, useEffect } from 'react';
import './ProductBundingAuction.css';
import { Collapse } from 'react-collapse';
import Slider from 'react-slick';
import Down from '../../Icons/down';
import Timer from 'react-compound-timer';
import Popup from '../../Selected/SelectPopup/Popup';
import PopupBid from '../../Selected/SelectPopupBid/Popup';
import Twitter from '../../Icons/ProductIcons/Twitter';
import Facebook from '../../Icons/ProductIcons/Facebook';
import Instagram from '../../Icons/ProductIcons/Instagram';
import { Link, useLocation } from 'react-router-dom';
import AddStar from '../../Icons/AddStar';
import SellersBlock from '../../ContentMarketplace/SellersBlock/SellersBlock';
import PopupImage from '../ProductPopup/Popup';

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

const ProductBundingAuction = (props) => {
  const location = useLocation();
  const product = location.state.product;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [like, setLike] = useState(false);
  const [activeImage, setActiveImage] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopupImage, setShowPopupImage] = useState(false);
  const slider1 = useRef();
  const slider2 = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupBid, setShowPopupBid] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const togglePopupBid = () => {
    setShowPopupBid(!showPopupBid);
  };

  const togglePopupImage = () => {
    setShowPopupImage(!showPopupImage);
  };

  const setImage = (img) => {
    setActiveImage(img);
    togglePopupImage();
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
    autoplay: false
  };

  const settings2 = {
    asNavFor: nav1,
    infinite: true,
    slidesToShow: product.fullImage.length > 4 ? 5 : product.fullImage.length,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow:
            product.fullImage.length > 3 ? 4 : product.fullImage.length
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow:
            product.fullImage.length > 2 ? 3 : product.fullImage.length
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="product product_bunding">
      <Popup showPopup={showPopup} togglePopup={togglePopup} />
      <PopupBid showPopup={showPopupBid} togglePopupBid={togglePopupBid} />
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
      <PopupImage
        showPopup={showPopupImage}
        togglePopup={togglePopupImage}
        img={activeImage}
      />
      <div className="container">
        <div className="product_main">
          <div className="product_left">
            <Slider
              {...settings}
              asNavFor={nav2}
              ref={(slider) => (slider1.current = slider)}
            >
              {product.fullImage.map((img, i) => (
                <div
                  key={i}
                  className="product_image"
                  onClick={() => setImage(img)}
                >
                  <img src={img} alt="product" />
                </div>
              ))}
            </Slider>
            <div
              className={
                'prodcut_bunding_small_slider count_slider_' +
                product.fullImage.length
              }
            >
              <Slider
                {...settings2}
                ref={(slider) => (slider2.current = slider)}
              >
                {product.fullImage.map((img, i) => (
                  <div className="prodcut_bunding_small_slide_wrapper">
                    <div key={i} className="prodcut_bunding_small_slide">
                      <img src={img} alt="product" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="product_right">
            <h2>Title</h2>
            <div className="product_subtitle">NFT ID: 125815</div>
            <div className="product_header">
              <span>
                <div className="like_wrapper" onClick={() => setLike(!like)}>
                  <div
                    className={like ? 'scattering active' : 'scattering'}
                  ></div>
                </div>
                1,2 k likes
              </span>
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
            <div className="product_avtor">
              <div className="creator_block_info_wrapper">
                <div className="creator_block_info_header">
                  {' '}
                  <img src="img/checked.svg" alt="checked" />
                  Owner:{' '}
                </div>
                <SellersBlock />
              </div>
              <div className="creator_block_info_wrapper">
                <div className="creator_block_info_header">
                  {' '}
                  <img src="img/Star.svg" alt="star" />
                  Creator:
                </div>
                <SellersBlock />
              </div>
            </div>

            <div className="auction_timer_main">
              <h4>Auction ends in</h4>
              <div className="auction_timer">
                <Timer initialTime={550000000} direction="backward">
                  {() => (
                    <React.Fragment>
                      <div>
                        <Timer.Days /> <span>Days</span>{' '}
                      </div>
                      <div>
                        <Timer.Hours /> <span> Hours</span>{' '}
                      </div>
                      <div>
                        {' '}
                        <Timer.Minutes /> <span> Minutes</span>{' '}
                      </div>
                      <div>
                        {' '}
                        <Timer.Seconds /> <span> Seconds</span>{' '}
                      </div>
                    </React.Fragment>
                  )}
                </Timer>
              </div>
            </div>
            <div className="product_price">
              <div className="product_price_block">
                <div>
                  <strong>Price</strong>
                  <span>0.053 ETH </span>
                  <i>($123)</i>
                </div>
                <div>
                  <strong>or</strong>
                  <span>12345 eYe </span>
                  <i>($120)</i>
                </div>
              </div>
              <div className="product_price_buttons">
                <button className="buy_now" onClick={togglePopup}>
                  Buy Now
                </button>{' '}
                <button className="buy_now" onClick={togglePopupBid}>
                  Place a Bid
                </button>{' '}
                <button
                  className={
                    favorite ? 'add_to_basket active' : 'add_to_basket'
                  }
                  onClick={() => setFavorite(!favorite)}
                >
                  <AddStar />
                  Add to Favorites
                </button>
              </div>
            </div>

            <div
              className="product_bunding_collapse"
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              <span>{product.fullImage.length} Items</span>{' '}
              <span className={showDropdown ? 'active' : null}>
                <Down />
              </span>
            </div>
            <Collapse isOpened={showDropdown}>
              <div className="product_bunding_collapse_main">
                {product.fullImage.map((img, i) => (
                  <div key={i} className="prodcut_bunding_collapse_block">
                    <div>
                      <div className="prodcut_bunding_collapse_block_img">
                        <img src={img} alt="product" />
                      </div>
                      <Link
                        to={{
                          pathname: '/product',
                          state: { product: { fullImage: img } }
                        }}
                      >
                        <div>
                          <h6>Card_Name</h6>
                          <span>Card #4444</span>
                        </div>
                      </Link>
                    </div>
                    <span>1x</span>
                  </div>
                ))}
              </div>
            </Collapse>
          </div>
        </div>
        <h5>Bids</h5>
        <div className="product_auction_bids">
          <div className="product_auction_bids_header">
            <div>Auction ID</div>
            <div>Num tokens to bid</div>
            <div>Payment method</div>
            <div>Price per token</div>
            <div>Timestamp</div>
            <div>Address of bidder</div>
          </div>

          <div className="initial_listing_bids_content">
            <div className="product_auction_bids_block">
              <div>5224</div>
              <div>1</div>
              <div>lorem</div>
              <div>10 000</div>
              <div>5 days ago</div>
              <div>
                <a href="/">1c2e11...6f13d</a>
              </div>
            </div>
            <div className="product_auction_bids_block">
              <div>5224</div>
              <div>1</div>
              <div>lorem</div>
              <div>10 000</div>
              <div>5 days ago</div>
              <div>
                <a href="/">1c2e11...6f13d</a>
              </div>
            </div>
            <div className="product_auction_bids_block">
              <div>5224</div>
              <div>1</div>
              <div>lorem</div>
              <div>10 000</div>
              <div>5 days ago</div>
              <div>
                <a href="/">1c2e11...6f13d</a>
              </div>
            </div>
            <div className="product_auction_bids_block">
              <div>5224</div>
              <div>1</div>
              <div>lorem</div>
              <div>10 000</div>
              <div>5 days ago</div>
              <div>
                <a href="/">1c2e11...6f13d</a>
              </div>
            </div>
            <div className="product_auction_bids_block">
              <div>5224</div>
              <div>1</div>
              <div>lorem</div>
              <div>10 000</div>
              <div>5 days ago</div>
              <div>
                <a href="/">1c2e11...6f13d</a>
              </div>
            </div>
            <div className="product_auction_bids_block">
              <div>5224</div>
              <div>1</div>
              <div>lorem</div>
              <div>10 000</div>
              <div>5 days ago</div>
              <div>
                <a href="/">1c2e11...6f13d</a>
              </div>
            </div>
          </div>
          {/* <Collapse isOpened={showFooterProducts}>
                      <div className="product_auction_bids_block">
                  <div>5224</div>
                  <div>1</div>
                  <div>lorem</div>
                  <div>10 000</div>
                  <div>5 days ago</div>
                  <div><a>1c2e11...6f13d</a></div>
              </div>
              <div className="product_auction_bids_block">
                  <div>5224</div>
                  <div>1</div>
                  <div>lorem</div>
                  <div>10 000</div>
                  <div>5 days ago</div>
                  <div><a>1c2e11...6f13d</a></div>
              </div>
              <div className="product_auction_bids_block">
                  <div>5224</div>
                  <div>1</div>
                  <div>lorem</div>
                  <div>10 000</div>
                  <div>5 days ago</div>
                  <div><a>1c2e11...6f13d</a></div>
              </div>
              <div className="product_auction_bids_block">
                  <div>5224</div>
                  <div>1</div>
                  <div>lorem</div>
                  <div>10 000</div>
                  <div>5 days ago</div>
                  <div><a>1c2e11...6f13d</a></div>
              </div>
              </Collapse>
          
              <div onClick={() => setShowFooterProducts(!showFooterProducts)} className="product_footer_button">
                <span>Other products</span>
                    <strong className={showFooterProducts ? "active" : null}>{">"}</strong>
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductBundingAuction;
