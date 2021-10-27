import React, { useState, useRef, useEffect } from 'react';
import './ProductBunding.css';
import { Collapse } from 'react-collapse';
import Slider from 'react-slick';
import Down from '../../Icons/down';
import Popup from '../../Selected/SelectPopup/Popup';
import Twitter from '../../Icons/ProductIcons/Twitter';
import Facebook from '../../Icons/ProductIcons/Facebook';
import Instagram from '../../Icons/ProductIcons/Instagram';
import { Link, useLocation } from 'react-router-dom';
import AddStar from '../../Icons/AddStar';
import PopupImage from '../ProductPopup/Popup';
import SellersBlock from '../../ContentMarketplace/SellersBlock/SellersBlock';

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

const ProductBunding = (props) => {
  const location = useLocation();
  const product = location.state.product;
  const [nav1, setNav1] = useState(null);
  const [like, setLike] = useState(false);
  const [activeImage, setActiveImage] = useState('');
  const [nav2, setNav2] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const slider1 = useRef();
  const slider2 = useRef();
  const [showPopupImage, setShowPopupImage] = useState(false);
  const [showDropdownCharity, setShowDropdownCharity] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    setNav2(slider2.current);
  }, []);

  useEffect(() => {
    setNav1(slider1.current);
  }, []);

  const togglePopupImage = () => {
    setShowPopupImage(!showPopupImage);
  };

  const setImage = (img) => {
    setActiveImage(img);
    togglePopupImage();
  };

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
      <PopupImage
        showPopup={showPopupImage}
        togglePopup={togglePopupImage}
        img={activeImage}
      />
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
                  <div class={like ? 'scattering active' : 'scattering'}></div>
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
                <div className="selected_block_charity_product">
                  <div
                    onMouseEnter={() => setShowDropdownCharity(true)}
                    onMouseLeave={() => setShowDropdownCharity(false)}
                  >
                    <img src="../../img/charity.png" alt="charity" />
                    <span>&nbsp;10%</span>
                    <div className="selected_block_price_dropdown_wrapper">
                      <Collapse isOpened={showDropdownCharity}>
                        <div className="selected_block_price_dropdown_main charity">
                          Description of charity
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
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
                        <img src={img} alt="card" />
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
      </div>
    </div>
  );
};

export default ProductBunding;
