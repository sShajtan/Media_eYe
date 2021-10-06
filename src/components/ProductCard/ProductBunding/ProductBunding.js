import React, { useState, useRef, useEffect } from 'react';
import { useSelector} from 'react-redux';
import './ProductBunding.css';
import { Collapse } from 'react-collapse';
import Slider from 'react-slick';
import Down from '../../Icons/down';
import Popup from '../../Selected/SelectPopup/Popup';



function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <button
      onClick={onClick}
      className="bunding_arrow_left"
    >
      <span><Down /></span>
    </button>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="bunding_arrow_right"
    >
      <span><Down /></span>
    </button>
  );
}

const ProductBunding = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);
  const [showFooterProducts, setShowFooterProducts] = useState(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const slider1 = useRef();
  const slider2 = useRef();
  const [showDropdownCharity, setShowDropdownCharity] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
    const [showPopupBid, setShowPopupBid] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const togglePopupBid = () => {
        setShowPopupBid(!showPopupBid);
    };

  useEffect(() => {
    setNav2(slider2.current)
  }, []);


   useEffect(() => {
    setNav1(slider1.current)
  }, []);



  const images = [
  { src: "img/product_auction.png" },
  { src: "img/product_auction.png" },
  { src: "img/product_auction.png" },
  { src: "img/product_auction.png" },
  { src: "img/product_auction.png" },
  { src: "img/product_auction.png" },
];
  const settings = {
    asNavFor: nav2,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };

  const settings2 = {
    asNavFor: nav1,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 3,
        }
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="product product_bunding">
    <Popup showPopup={showPopup} togglePopup={togglePopup} />
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
            <Slider {...settings} asNavFor={nav2} ref={slider => (slider1.current = slider)}>
              {images.map((img) => (
                <div className="product_image">
                  <img src={img.src} />
                </div>
              ))}    
            </Slider>
            <div className="prodcut_bunding_small_slider">
              <Slider
                {...settings2}
                  ref={slider => (slider2.current = slider)}
                >
                {images.map((img) => (
                    <div className="prodcut_bunding_small_slide">
                      <img src={img.src} />
                    </div>
                  ))} 
              </Slider>
            </div>
          </div>
          <div className="product_right">
            <h2>Product ID</h2>
            <div className="product_header">
              <span>
                <img src="img/Star.svg" />
                Proprietary
              </span>
              <span>
                <img src="img/heart.png" />
                1,2 k favorite
              </span>
              <span>
                Share: <img src="img/tw.png" /> <img src="img/facebook.png" />
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
                  <img src="img/checked.svg" />
                  Owner:{' '}
                </div>
                <div className="creator_block_info">
                  <div className="creator_block_info_main">
                    <div className="creator_block_info_img">
                      <img src="img/avatar.png" />
                    </div>
                    <div className="creator_block_info_text">
                      <h6>Artist_Title</h6>
                      <div>
                        <span>
                          <img src="img/heart.svg" alt="heart" />{' '}1,2 k
                        </span>
                        <span>
                          <img src="img/men.svg" alt="heart" />{' '}555
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="creator_block_info_wrapper">
                <div className="creator_block_info_header">
                  {' '}
                  <img src="img/Star.svg" />
                  Creator:
                </div>
                <div className="creator_block_info">
                  <div className="creator_block_info_main">
                    <div className="creator_block_info_img">
                      <img src="img/avatar.png" />
                    </div>
                    <div className="creator_block_info_text">
                      <h6>Artist_Title</h6>
                      <div>
                        <span>
                          <img src="img/heart.svg" alt="heart" /> 1,2 k
                        </span>
                        <span>
                          <img src="img/men.svg" alt="heart" /> 555
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_part_collection">
              Part of Collection <span>1 [Title]</span> collection
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
                <button className="buy_now" onClick={togglePopup}>Buy Now</button>{' '}
                <div className="selected_block_charity_product">
                  <div onMouseEnter={() => setShowDropdownCharity(true)} onMouseLeave={() => setShowDropdownCharity(false)}>
                      <img src="../../img/charity.png" /><span>&nbsp;10%</span>
                      <div className="selected_block_price_dropdown_wrapper">
                      <Collapse isOpened={showDropdownCharity}>
                          <div className="selected_block_price_dropdown_main charity">
                              Description of charity
                          </div>
                      </Collapse>
                      </div>
                    </div>
                </div>
                <button className="add_to_basket">Add to Favorites</button>
              </div>
            </div>
            <div className="product_bunding_collapse" onClick={()=>{setShowDropdown(!showDropdown)}}>
              <span>{images.length} Items</span> <span className={showDropdown ? "active" : null} ><Down /></span>
            </div>
            <Collapse isOpened={showDropdown}>
                <div className="product_bunding_collapse_main">
                    {images.map((img) => (
                      <div className="prodcut_bunding_collapse_block">
                        
                        <div>
                          <img src={img.src} />
                          <div>
                            <h6>Card_Name</h6>
                            <span>Card #4444</span>
                          </div>
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
