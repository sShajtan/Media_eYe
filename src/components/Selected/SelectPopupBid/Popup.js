import React, { useState } from 'react';
import './Popup.css';
import CloseIcon from '../../Icons/CloseIcon';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import { useSelector} from 'react-redux';
import Down from '../../Icons/down';
import { Collapse } from 'react-collapse';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
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
  const { className, style, onClick } = props;
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
  const { togglePopup } = props;
  const theme = useSelector((state) => state.app.darkTheme);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownBid, setShowDropdownBid] = useState(false);
  const [showDropdownQuestion, setShowDropdownQuestion] = useState(false);
  const [showDropdownQuestion2, setShowDropdownQuestion2] = useState(false);
  const [showDropdownCharity, setShowDropdownCharity] = useState(false);
  let history = useHistory();
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
    prevArrow: <SamplePrevArrow />,
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
          onClick={props.togglePopupBid}
        >
          <div
            onClick={(event) => event.stopPropagation()}
          >
            <div className="container">
              <div className="main_add_popup">
              <div className="close" onClick={props.togglePopupBid}>
                <CloseIcon />
              </div>
                  <div className="selected_popup_main">
                    <h3>Place a Bid</h3>
                    <div className="selected_popup_slider">
                      <Slider {...settings}>
                        <div className="selected_popup_img_wrapper">
                          <div className="selected_popup_img">
                            <img src="../../img/05.png" />
                          </div>
                        </div>
                     
                      </Slider>
                    </div>
                    <div className="selected_popup_pay_block">
                        <h6>Price</h6>
                        <div className="selected_block_price_main">
                        <span>0.053 </span>
                        <div className="selected_block_price_dropdown" onClick={()=>setShowDropdown(!showDropdown)}>
                        <img src={theme ? "../../img/eth_sm.png" : "../../img/eth_sm_dark.png" }  />ETH <button className={showDropdown ? "selected_block_price_dropdown_arrow active" : "selected_block_price_dropdown_arrow"  } ><Down /></button>
                        <div className="selected_block_price_dropdown_wrapper">
                            <Collapse isOpened={showDropdown}>
                                <div className="selected_block_price_dropdown_main">
                                    <span><img src={theme ? "../../img/eth_sm.png" : "../../img/eth_sm_dark.png" } />ETH</span>
                                    <span><img src="../../img/bnb.png" />BNB</span>
                                    <span><img src="../../img/eye_sm.png" />eYe</span>
                                </div>
                            </Collapse>
                        </div>
                      </div>
                      <div className="selected_block_price_dropdown_question">
                        <img src="../../img/question.png" onClick={()=>setShowDropdownQuestion(!showDropdownQuestion)}/>
                          <div>
                            <Collapse isOpened={showDropdownQuestion}>
                                <div className="selected_block_price_dropdown_main dropdown_question">
                                    These selections are what the listing supports
                                </div>
                            </Collapse>
                          </div>
                      </div>
                    </div>

                    <div className="selected_popup_pay_block selected_popup_pay_block_second">
                        <h6>Current bid price</h6>
                        <div className="selected_block_price_main">
                        <span>0.053 ETH </span>
                      </div>
                    </div>

                    <div onMouseEnter={() => setShowDropdownCharity(true)} onMouseLeave={() => setShowDropdownCharity(false)} className="popup_charity">
                        <img src="../../img/charity.png" /><span>10%</span>
                        <div className="selected_block_price_dropdown_wrapper">
                        <Collapse isOpened={showDropdownCharity}>
                            <div className="selected_block_price_dropdown_main charity">
                                Description of charity
                            </div>
                        </Collapse>
                        </div>
                    </div>
                    </div>
                    <div className="selected_popup_bid">
                      <label>Your bid</label>
                      <input type="number" placeholder="Enter bid" />
                      <div className="selected_popup_bid_dropdown">
                        <div className="selected_block_price_dropdown_question">
                          <img src="../../img/question.png" onClick={()=>setShowDropdownQuestion2(!showDropdownQuestion2)}/>
                            <div>
                              <Collapse isOpened={showDropdownQuestion2}>
                                  <div className="selected_block_price_dropdown_main dropdown_question">
                                      These selections are what the listing supports
                                  </div>
                              </Collapse>
                            </div>
                        </div>
                        <div className="selected_block_price_dropdown" onClick={()=>setShowDropdownBid(!showDropdownBid)}>
                        <img src="../../img/eth_sm.png"  />ETH <button className={showDropdownBid ? "selected_block_price_dropdown_arrow active" : "selected_block_price_dropdown_arrow"  } ><Down /></button>
                        <div className="selected_block_price_dropdown_wrapper">
                            <Collapse isOpened={showDropdownBid}>
                                <div className="selected_block_price_dropdown_main">
                                    <span><img src={theme ? "../../img/eth_sm.png" : "../../img/eth_sm_dark.png" } />ETH</span>
                                    <span><img src="../../img/bnb.png" />BNB</span>
                                    <span><img src="../../img/eye_sm.png" />eYe</span>
                                </div>
                            </Collapse>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="selected_popup_footer">
                            <div className="selected_popup_footer_block">
                              <span>Your bidding balance</span>
                              <span>1.1000 ETH</span>
                            </div>
                            <div className="selected_popup_footer_block">
                              <span>Balance</span>
                              <span>1.1000 ETH</span>
                            </div>
                            <div className="selected_popup_footer_block">
                              <span>Service fee</span>
                              <span>0.053 ETH</span>
                            </div>
                            <div className="selected_popup_footer_block">
                              <span>You will pay</span>
                              <span>0.053 ETH</span>
                            </div>
                        </div>
                    <button className="buy_btn">Place a Bid</button>
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
