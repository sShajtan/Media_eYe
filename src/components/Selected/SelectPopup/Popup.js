import React, { useState } from 'react';
import './Popup.css';
import '../../Account/AddPopup/Popup.css';
import CloseIcon from '../../Icons/CloseIcon';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import Down from '../../Icons/down';
import { Collapse } from 'react-collapse';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-next"
      onClick={onClick}
    >
      <span>&#8594;</span>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-prev"
      onClick={onClick}
    >
      <span>&#8592;</span>
    </button>
  );
}

const Popup = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownQuestion, setShowDropdownQuestion] = useState(false);
  const [showDropdownCharity, setShowDropdownCharity] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    arrows: true,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <React.Fragment>
      <div className={props.showPopup ? 'popup active' : 'popup'}>
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
        <div
          className="popup-wrapper selected_popup"
          onClick={props.togglePopup}
        >
          <div onClick={(event) => event.stopPropagation()}>
            <div className="container">
              <div className="main_add_popup selected_popup">
                <div className="close" onClick={props.togglePopup}>
                  <CloseIcon />
                </div>
                <div className="selected_popup_main">
                  <h3>Checkout</h3>
                  <div className="selected_popup_slider">
                    <Slider {...settings}>
                      <div className="selected_popup_img_wrapper">
                        <div className="selected_popup_img">
                          <img src="../../img/05.png" alt="product" />
                        </div>
                      </div>
                    </Slider>
                  </div>
                  <div className="selected_popup_payment">
                    <button className="crypto_pay_btn">
                      <span>Pay with crypto</span>
                    </button>
                    <button className="paypal_pay_btn">
                      Pay with PayPal
                      <img src="../../img/paypal.png" alt="paypal" />
                    </button>
                  </div>
                  <div className="selected_popup_pay_block">
                    <h6>You pay</h6>
                    <div className="selected_block_price_main">
                      <span>0.053 </span>
                      <div
                        className="selected_block_price_dropdown"
                        onClick={() => setShowDropdown(!showDropdown)}
                      >
                        <img
                          src={
                            theme
                              ? '../../img/eth_sm.png'
                              : '../../img/eth_sm_dark.png'
                          }
                          alt="ETH"
                        />
                        ETH{' '}
                        <button
                          className={
                            showDropdown
                              ? 'selected_block_price_dropdown_arrow active'
                              : 'selected_block_price_dropdown_arrow'
                          }
                        >
                          <Down />
                        </button>
                        <div className="selected_block_price_dropdown_wrapper">
                          <Collapse isOpened={showDropdown}>
                            <div className="selected_block_price_dropdown_main">
                              <span>
                                <img
                                  src={
                                    theme
                                      ? '../../img/eth_sm.png'
                                      : '../../img/eth_sm_dark.png'
                                  }
                                  alt="ETH"
                                />
                                ETH
                              </span>
                              <span>
                                <img src="../../img/bnb.png" alt="BNB" />
                                BNB
                              </span>
                              <span>
                                <img src="../../img/eye_sm.png" alt="eYe" />
                                eYe
                              </span>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                      <div className="selected_block_price_dropdown_question">
                        <img
                          src="../../img/question.png"
                          alt="question"
                          onClick={() =>
                            setShowDropdownQuestion(!showDropdownQuestion)
                          }
                        />
                        <div>
                          <Collapse isOpened={showDropdownQuestion}>
                            <div className="selected_block_price_dropdown_main dropdown_question">
                              These selections are what the listing supports
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </div>
                    <div
                      onMouseEnter={() => setShowDropdownCharity(true)}
                      onMouseLeave={() => setShowDropdownCharity(false)}
                      className="popup_charity"
                    >
                      <img src="../../img/charity.png" alt="charity" />
                      <span>10%</span>
                      <div className="selected_block_price_dropdown_wrapper">
                        <Collapse isOpened={showDropdownCharity}>
                          <div className="selected_block_price_dropdown_main charity">
                            Description of charity
                          </div>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="selected_popup_footer">
                    <div className="selected_popup_footer_block">
                      <span>Balance</span>
                      <span>1.1000 ETH</span>
                    </div>
                    <div className="selected_popup_footer_block">
                      <span>Service fee</span>
                      <span>0.0001 ETH</span>
                    </div>
                    <div className="selected_popup_footer_block">
                      <span>Item price</span>
                      <span>0.053 ETH</span>
                    </div>
                  </div>
                  <button className="buy_btn">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Popup;
