import React, { useState } from 'react';
import './ProductAuction.css';
import { Collapse } from 'react-collapse';
import MarketplaceBlock from '../../ContentMarketplace/MarketplaceBlock/MarketplaceBlock';

const ProductAuction = (props) => {
  const [showFooterProducts, setShowFooterProducts] = useState(false);
  return (
    <div className="product">
      <div className="container">
        <div className="product_main">
          <div className="product_left">
            <div className="product_image">
              <img src="img/product.png" alt="slide"></img>
            </div>
            <svg
              width="100%"
              className="product_border"
              viewBox="0 0 558 669"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.6569 10L12.5451 40.7271V268.107L19.3099 273.911V307.711L14.6813 312.15H6.13636V327.172H4.00011V658L521.684 657.659L549.455 630.004V574.695L543.402 568.55V452.811H558V668.242H0.439697V0.44046H558V418.67L548.387 410.818V310.443H539.13L535.214 307.37V231.918L549.099 218.603V108.327L538.062 96.7186H524.176L433.386 10H45.6569Z"
                fill="#141233"
              />
            </svg>
          </div>
          <div className="product_right">
            <h2>Product ID</h2>
            <div className="product_header">
              <span>
                <img src="img/star.png" />
                Proprietary
              </span>
              <span>
                <img src="img/heart.png" />
                1,2 k favorite
              </span>
              <span>
                Share: <img src="img/tw.png" />
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
              <div class="creator_block_info">
                <div class="creator_block_info_main">
                  <div class="creator_block_info_img">
                    <img src="img/avatar.png" />
                  </div>
                  <div class="creator_block_info_text">
                    <h6>Artist_Title</h6>
                    <div>
                      <span>
                        <img src="img/heart.svg" alt="heart" /> 1,2 k
                      </span>
                    </div>
                  </div>
                </div>
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
                <button className="buy_now">Buy Now</button>{' '}
                <button className="add_to_basket">Add to basket</button>
              </div>
            </div>
          </div>
        </div>
        <div className="product_auction_main">
          <div className="product_auction_left">
            <h5>Details</h5>
            <div className="product_auction_details"></div>
          </div>
          <div className="product_auction_right"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductAuction;
