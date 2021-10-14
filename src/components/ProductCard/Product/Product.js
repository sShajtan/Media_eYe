import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Product.css';
import { Collapse } from 'react-collapse';
import MarketplaceBlock from '../../ContentMarketplace/MarketplaceBlock/MarketplaceBlock';
import Popup from '../../Selected/SelectPopup/Popup';

const Product = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);
  const [showFooterProducts, setShowFooterProducts] = useState(false);
  const [showDropdownCharity, setShowDropdownCharity] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="product">
      <Popup showPopup={showPopup} togglePopup={togglePopup} />
      <div className="container">
        <div className="product_main">
          <div className="product_left">
            <div className="product_image">
              <img src="img/product_auction.png" alt="product"></img>
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
                <button className="add_to_basket">
                  <img src="../../img/Star.svg" alt="star" />
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product_auction_main">
          <div className="product_auction_left">
            <h5>Details</h5>
            <div className="product_auction_details">
              <div className="product_auction_details_row">
                <span>NFT Token Type</span>
                <span>5224</span>
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
                <span>The number of tokens created</span>
                <span>10</span>
              </div>
            </div>
          </div>
          <div className="product_auction_right">
            <h5>Trading History</h5>

            <div className="initial_listing_price_block_header_product">
              <div>Event</div>
              <div>Price</div>
              <div>From</div>
              <div>To</div>
              <div>Data</div>
            </div>
            <div className="initial_listing_price_content_product">
              <div className="initial_listing_price_block_product">
                <div>Offer</div>
                <div>
                  <img
                    src={
                      theme
                        ? '../../img/eth_sm.png'
                        : '../../img/eth_sm_dark.png'
                    }
                    alt="eth"
                  />
                  <strong>6,3</strong>&nbsp;ETH
                </div>
                <div>
                  <a href="/">RiverZebra</a>
                </div>
                <div></div>
                <div>an hour ago</div>
              </div>
              <div className="initial_listing_price_block_product">
                <div>Offer</div>
                <div>
                  <img
                    src={
                      theme
                        ? '../../img/eth_sm.png'
                        : '../../img/eth_sm_dark.png'
                    }
                    alt="eth"
                  />
                  <strong>6,3</strong>&nbsp;ETH
                </div>
                <div>
                  <a href="/">RiverZebra</a>
                </div>
                <div></div>
                <div>an hour ago</div>
              </div>
              <div className="initial_listing_price_block_product">
                <div>Offer</div>
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
                <div>
                  <a href="/">RiverZebra</a>
                </div>
                <div></div>
                <div>an hour ago</div>
              </div>
              <div className="initial_listing_price_block_product">
                <div>Offer</div>
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
                <div>
                  <a href="/">RiverZebra</a>
                </div>
                <div></div>
                <div>an hour ago</div>
              </div>
              <div className="initial_listing_price_block_product">
                <div>Offer</div>
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
                <div>
                  <a href="/">RiverZebra</a>
                </div>
                <div></div>
                <div>an hour ago</div>
              </div>
            </div>
          </div>
        </div>
        <div className="product_footer">
          <div
            onClick={() => setShowFooterProducts(!showFooterProducts)}
            className="product_footer_button"
          >
            <span>Other products</span>
            <strong className={showFooterProducts ? 'active' : null}>
              {'>'}
            </strong>
          </div>
          <Collapse isOpened={showFooterProducts}>
            <div className="product_footer_products">
              <MarketplaceBlock />
              <MarketplaceBlock />
              <MarketplaceBlock />
              <MarketplaceBlock />
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Product;
