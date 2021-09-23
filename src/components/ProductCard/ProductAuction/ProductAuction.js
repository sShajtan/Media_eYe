import React, { useState } from 'react';
import "./ProductAuction.css";
import { Collapse } from 'react-collapse';
import Switch from "react-switch";

const ProductAuction = (props) => {
  const [showFooterProducts, setShowFooterProducts] = useState(false);
  const [checked, setChecked] = useState(false);



  return (
    <div className="product product_auction">
        <div className="container">
          <div className="product_main">
            <div className="product_left">
            <div className="product_image" >
                <img src="img/product_auction.png" ></img>
            </div>
            
            </div>
            <div className="product_right">
              <h2>Product ID</h2>
              <div className="product_header">
                <span><img src="img/Star.svg" />Proprietary</span>
                <span><img src="img/heart.png"  />1,2 k favorite</span>
                <span>Share: <img src="img/tw.png" /></span>
              </div>
              <div className="product_description">
                <h6>description</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
              <div className="product_avtor">
                <div className="creator_block_info_wrapper">
               <div className="creator_block_info_header"> <img src="img/checked.svg" />Owner: </div>
                  <div className="creator_block_info">
                    <div className="creator_block_info_main">
                      <div className="creator_block_info_img">
                      <img src="img/avatar.png" />
                    </div>
                    <div className="creator_block_info_text">
                      <h6>Artist_Title</h6>
                      <div>
                        <span><img src="img/heart.svg" alt="heart" /> 1,2 k</span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="creator_block_info_wrapper">
                <div className="creator_block_info_header"> <img src="img/Star.svg" />Creator:</div>
                  <div className="creator_block_info">
                    <div className="creator_block_info_main">
                      <div className="creator_block_info_img">
                      <img src="img/avatar.png" />
                    </div>
                    <div className="creator_block_info_text">
                      <h6>Artist_Title</h6>
                      <div>
                        <span><img src="img/heart.svg" alt="heart" /> 1,2 k</span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_price">
                <div className="product_price_block">
                  <div><strong>Price</strong><span>0.053 ETH </span><i>($123)</i></div><div><strong>or</strong><span>12345 eYe </span><i>($120)</i></div>
                </div>
                <div className="product_price_buttons">
                  <button className="buy_now">Buy Now</button> <button className="buy_now">Place a Bid</button> <button className="add_to_basket">Add to basket</button>
                </div>
              </div> 
              <div className="bet_limit">
                <h6>Set bet limit</h6>
                <div className={checked ? "cheked_block" : null}>
                  <input placeholder="$/ETH" type="number" />
                  <Switch  checkedIcon={false} uncheckedIcon={false} onChange={()=> {setChecked(!checked)}} checked={checked} height={20} width={40} />
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
                  <div><strong>6,3</strong> ETH</div>
                  <div>$17 746,34</div>
                  <div>1</div>
                  <div><button>Buy</button></div>
                  <div><hr noshade /></div>
                  <div><a>ipano</a></div>
              </div>
              <div className="initial_listing_price_block">
                  <div><strong>6,3</strong> ETH</div>
                  <div>$17 746,34</div>
                  <div>1</div>
                  <div><button>Buy</button></div>
                  <div><hr noshade /></div>
                  <div><a>ipano</a></div> 
              </div>
              <div className="initial_listing_price_block">
                  <div><strong>6,3</strong> ETH</div>
                  <div>$17 746,34</div>
                  <div>1</div>
                  <div><button>Buy</button></div>
                  <div><hr noshade /></div>
                  <div><a>ipano</a></div>
              </div>
              <div className="initial_listing_price_block">
                  <div><strong>6,3</strong> ETH</div>
                  <div>$17 746,34</div>
                  <div>1</div>
                  <div><button>Buy</button></div>
                  <div><hr noshade /></div>
                  <div><a>ipano</a></div>
              </div>
              <div className="initial_listing_price_block">
                  <div><strong>6,3</strong> ETH</div>
                  <div>$17 746,34</div>
                  <div>1</div>
                  <div><button>Buy</button></div>
                  <div><hr noshade /></div>
                  <div><a>ipano</a></div>
              </div>
              <div className="initial_listing_price_block">
                  <div><strong>6,3</strong> ETH</div>
                  <div>$17 746,34</div>
                  <div>1</div>
                  <div><button>Buy</button></div>
                  <div><hr noshade /></div>
                  <div><a>ipano</a></div>
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
                  <div>Address of bidden</div>

              </div>
              
              <div className="initial_listing_bids_content">
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


export default ProductAuction;
