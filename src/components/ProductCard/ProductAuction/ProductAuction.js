import React, { useState } from 'react';
import Timer from 'react-compound-timer';
import './ProductAuction.css';
import { useSelector } from 'react-redux';
import Switch from 'react-switch';
import Popup from '../../Selected/SelectPopup/Popup';
import PopupBid from '../../Selected/SelectPopupBid/Popup';

const ProductAuction = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);
  const [checked, setChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupBid, setShowPopupBid] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const togglePopupBid = () => {
    setShowPopupBid(!showPopupBid);
  };

  return (
    <div className="product product_auction">
      <Popup showPopup={showPopup} togglePopup={togglePopup} />
      <PopupBid showPopup={showPopupBid} togglePopupBid={togglePopupBid} />
      <div className="container">
        <div className="product_main">
          <div className="product_left">
            <div className="product_image">
              <img src="img/product_auction.png" alt="product" />
            </div>
          </div>
          <div className="product_right">
            <h2>Product ID</h2>
            <div className="product_subtitle">NFT ID: 125815</div>
            <div className="product_header">
              <span>
                <img src="img/heart.png" alt="heart" />
                1,2 k likes
              </span>
              <span>
                Share: <img src="img/tw.png" alt="twitter" />{' '}
                <img src="img/facebook.png" alt="facebook" />
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
                <div className="creator_block_info">
                  <div className="creator_block_info_main">
                    <div className="creator_block_info_img">
                      <img src="img/avatar.png" alt="avatar" />
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
              <div className="creator_block_info_wrapper">
                <div className="creator_block_info_header">
                  {' '}
                  <img src="img/Star.svg" alt="star" />
                  Creator:
                </div>
                <div className="creator_block_info">
                  <div className="creator_block_info_main">
                    <div className="creator_block_info_img">
                      <img src="img/avatar.png" alt="avatar" />
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
                <button className="add_to_basket">
                  <img src="../../img/Star.svg" alt="star" />
                  Add to Favorites
                </button>
              </div>
            </div>
            <div className="bet_limit">
              <h6>
                Set bet limit&nbsp;
                <img src="../../img/question.png" alt="question" />
              </h6>
              <div className={checked ? 'cheked_block' : null}>
                <input placeholder="$/ETH" type="number" />
                <Switch
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={() => {
                    setChecked(!checked);
                  }}
                  checked={checked}
                  height={20}
                  width={40}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="product_auction_main">
          <div className="product_auction_left">
            <h5>Details</h5>
            <div className="product_auction_details">
              <div className="product_auction_details_row">
                <span>Auction ID</span>
                <span>5224</span>
              </div>
              <div className="product_auction_details_row">
                <span>NFT Token Type</span>
                <span>1155</span>
              </div>
              <div className="product_auction_details_row">
                <span>Label</span>
                <span>Lorem</span>
              </div>
              <div className="product_auction_details_row">
                <span>Seller address</span>
                <span className="adress">1c2e11...6f13d</span>
              </div>
              <div className="product_auction_details_row">
                <span>NFT address</span>
                <span>Lorem</span>
              </div>
              <div className="product_auction_details_row">
                <span>NFT Token ID</span>
                <span>12345...</span>
              </div>
              <div className="product_auction_details_row">
                <span>Num tokens to auction</span>
                <span>1</span>
              </div>
              <div className="product_auction_details_row">
                <span>Start time</span>
                <span>August 12, 2021 6:55PM</span>
              </div>
              <div className="product_auction_details_row">
                <span>End time</span>
                <span>August 20, 2021 6:55PM</span>
              </div>
              <div className="product_auction_details_row">
                <span>The number of tokens created</span>
                <span>10</span>
              </div>
            </div>
          </div>
          <div className="product_auction_right">
            <h5>Initial listing prices</h5>

            <div className="initial_listing_price_block_header">
              <div>Unit Price</div>
              <div>USD Unit Price</div>
              <div>Quantity</div>
              <div>Expiration</div>
              <div>From</div>
            </div>
            <div className="initial_listing_price_content">
              <div className="initial_listing_price_block">
                <div>
                  <img
                    src={
                      theme
                        ? '../../img/eth_sm.png'
                        : '../../img/eth_sm_dark.png'
                    }
                    alt="ETH"
                  />
                  <strong>6,3</strong>&nbsp;ETH
                </div>
                <div>$17 746,34</div>
                <div>1</div>
                <div>
                  <button>Buy</button>
                </div>
                <div>
                  <hr noshade="true" />
                </div>
                <div>
                  <a href="/">ipano</a>
                </div>
              </div>
              <div className="initial_listing_price_block">
                <div>
                  <img
                    src={
                      theme
                        ? '../../img/eth_sm.png'
                        : '../../img/eth_sm_dark.png'
                    }
                    alt="ETH"
                  />
                  <strong>6,3</strong>&nbsp;ETH
                </div>
                <div>$17 746,34</div>
                <div>1</div>
                <div>
                  <button>Buy</button>
                </div>
                <div>
                  <hr noshade="true" />
                </div>
                <div>
                  <a href="/">ipano</a>
                </div>
              </div>
              <div className="initial_listing_price_block">
                <div>
                  <img
                    src={
                      theme
                        ? '../../img/eth_sm.png'
                        : '../../img/eth_sm_dark.png'
                    }
                    alt="ETH"
                  />
                  <strong>6,3</strong>&nbsp;ETH
                </div>
                <div>$17 746,34</div>
                <div>1</div>
                <div>
                  <button>Buy</button>
                </div>
                <div>
                  <hr noshade="true" />
                </div>
                <div>
                  <a href="/">ipano</a>
                </div>
              </div>
              <div className="initial_listing_price_block">
                <div>
                  <img
                    src={
                      theme
                        ? '../../img/eth_sm.png'
                        : '../../img/eth_sm_dark.png'
                    }
                    alt="ETH"
                  />
                  <strong>6,3</strong>&nbsp;ETH
                </div>
                <div>$17 746,34</div>
                <div>1</div>
                <div>
                  <button>Buy</button>
                </div>
                <div>
                  <hr noshade="true" />
                </div>
                <div>
                  <a href="/">ipano</a>
                </div>
              </div>
              <div className="initial_listing_price_block">
                <div>
                  <img
                    src={
                      theme
                        ? '../../img/eth_sm.png'
                        : '../../img/eth_sm_dark.png'
                    }
                    alt="ETH"
                  />
                  <strong>6,3</strong>&nbsp;ETH
                </div>
                <div>$17 746,34</div>
                <div>1</div>
                <div>
                  <button>Buy</button>
                </div>
                <div>
                  <hr noshade="true" />
                </div>
                <div>
                  <a href="/">ipano</a>
                </div>
              </div>
              <div className="initial_listing_price_block">
                <div>
                  <img
                    src={
                      theme
                        ? '../../img/eth_sm.png'
                        : '../../img/eth_sm_dark.png'
                    }
                    alt="ETH"
                  />
                  <strong>6,3</strong>&nbsp;ETH
                </div>
                <div>$17 746,34</div>
                <div>1</div>
                <div>
                  <button>Buy</button>
                </div>
                <div>
                  <hr noshade="true" />
                </div>
                <div>
                  <a href="/">ipano</a>
                </div>
              </div>
            </div>
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
      {/* <div className="product_auction_main">
        <div className="product_auction_left">
          <h5>Details</h5>
          <div className="product_auction_details"></div>
        </div>
        <div className="product_auction_right"></div>
      </div> */}
    </div>
  );
};

export default ProductAuction;
