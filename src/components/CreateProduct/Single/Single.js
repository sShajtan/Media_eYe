import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Single.css';

const Single = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const [activeSingle, setActiveSingle] = useState(true);
  let history = useHistory();

  return (
    <div className="single_product">
      <div className="container">
        <a className="goBack_button" onClick={() => history.goBack()}>
          <span>&#8592; </span> GoBack
        </a>
        <h3>Create your NFT Product</h3>
        <a className="tutorial">Tutorial &#5125;</a>
        <div className="single_product_main">
          <div className="row_1">
            <div className="col_1">
              <div className="single_product_image_wrapper">
                <img src="../../img/marketplace_img.png" />
              </div>
            </div>
            <div className="col_2">
              <h2>Select or upload content</h2>
              <div>
                <button className="product_single_select">
                  <span>Select</span>
                </button>
                <button className="product_single_upload">
                  <span>Upload</span>
                </button>
              </div>
            </div>
          </div>
          <div className="product_single_mainform">
            <div className="content_id">
              <label>Content ID</label>
              <input value="#88523" />
            </div>
            <div className="name">
              <label>Name</label>
              <input />
              <span>Choose a name for your store.</span>
            </div>
            <div className="url">
              <label>Embed your URL link</label>
              <input />
              <span>
                The URL of your website. If you don't have a website, provide a
                social media url.
              </span>
            </div>
            <div className="type">
              <label>Type</label>
              <input />
            </div>
            <div className="category">
              <label>Content ID</label>
              <input />
              <span>
                Select a category that best fits your primary niche / industry.
              </span>
            </div>
            <div className="decscription">
              <label>Decscription</label>
              <textarea rows="5"></textarea>
            </div>
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
                  <g clip-path="url(#clip1)">
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
                  <g clip-path="url(#clip2)">
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
            <div className="price">
              <label>Price</label>
              <input placeholder="Enter price for one piece" />
              <div className="price_info">
                <div>
                  Service fee <span> 2.5%</span>
                </div>
                <div>
                  You will receive <span>0 ETH</span>
                </div>
              </div>
            </div>
            <div className="mint">
              <label>Mint to</label>
              <input />
            </div>
            <div className="list">
              <label>List price of your NFT Token</label>
              <input placeholder="ETH" />
            </div>
            <div className="choose_network">
              <div>
                <h5>NFT Token</h5>
                <span>Choose your network</span>
              </div>
              <button className="ethereum">
                <span>Ethereum</span>
              </button>
              <button className="bsc">
                <span>BSC</span>
              </button>
            </div>
            <div className="info_blocks">
              <div className="info_block">
                <div className="info_block_header">
                  <span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="21.3335"
                        y="12"
                        width="5.33333"
                        height="5.33333"
                        rx="2.66667"
                        transform="rotate(90 21.3335 12)"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <rect
                        x="26.6665"
                        y="22.6665"
                        width="5.33333"
                        height="5.33333"
                        rx="2.66667"
                        transform="rotate(90 26.6665 22.6665)"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <path
                        d="M6.6665 5.3335V21.3335C6.6665 23.2191 6.6665 24.1619 7.25229 24.7477C7.83808 25.3335 8.78089 25.3335 10.6665 25.3335H21.3332"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <path
                        d="M6.6665 9.3335V10.6668C6.6665 12.5524 6.6665 13.4953 7.25229 14.081C7.83808 14.6668 8.78089 14.6668 10.6665 14.6668H15.9998"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                    </svg>
                    ERC - 721
                  </span>
                  <div className="single_product_chekbox">
                    <input id="721" type="checkbox" />
                    <label htmlFor="721">
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="info_block_text">
                  ERC-721 is a global Token standard exhibiting functionalities
                  of developing the Non-Fungible Tokens over the Ethereum
                  blockchain. The ERC-721 contributes to the rarity and
                  uniqueness to the assets designed and developed. The NFTs are
                  developed with unique uint256 token ID attributes that are
                  available globally.
                </div>
              </div>
              <div className="info_block">
                <div className="info_block_header">
                  <span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="21.3335"
                        y="12"
                        width="5.33333"
                        height="5.33333"
                        rx="2.66667"
                        transform="rotate(90 21.3335 12)"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <rect
                        x="26.6665"
                        y="22.6665"
                        width="5.33333"
                        height="5.33333"
                        rx="2.66667"
                        transform="rotate(90 26.6665 22.6665)"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <path
                        d="M6.6665 5.3335V21.3335C6.6665 23.2191 6.6665 24.1619 7.25229 24.7477C7.83808 25.3335 8.78089 25.3335 10.6665 25.3335H21.3332"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <path
                        d="M6.6665 9.3335V10.6668C6.6665 12.5524 6.6665 13.4953 7.25229 14.081C7.83808 14.6668 8.78089 14.6668 10.6665 14.6668H15.9998"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                    </svg>
                    ERC - 1155
                  </span>
                  <div className="single_product_chekbox">
                    <input id="1155" type="checkbox" />
                    <label htmlFor="1155">
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="info_block_text">
                  ERC-1155 is a token standard specifically designed and
                  developed by the Enjin network. ERC-1155 can be used to create
                  both fungible (currencies) and non-fungible (digital cards,
                  pets and in-game skins) assets exclusively on the Ethereum
                  Blockchain Network Architecture along with Transaction
                  bundling which reduces the cost of token development.
                </div>
              </div>
            </div>
            <div className="info_blocks_footer">
              <div className="info_block_footer">
                <div className="single_product_chekbox">
                  <input id="proprietary" type="checkbox" />
                  <label htmlFor="proprietary">
                    <span></span>
                  </label>
                </div>
                Proprietary
              </div>
              <div className="info_block_footer">
                <label>Mint more than one (only for erc1155)</label>
                <input />
              </div>
            </div>
            <span className="allow">
              Please allow up to 24 hours for moderation of your content
            </span>
            <button className="create">
              <span>Create</span>
            </button>
          </div>
          <div
            className={
              activeSingle
                ? 'product_auction_fixed_block'
                : 'product_auction_fixed_block active'
            }
          >
            <div className="minimum_bid">
              <label>Minimum bid</label>
              <input placeholder="Enter minimum bid" />
              <span>Bids below this amount won’t be allowed.</span>
            </div>
            <div className="date">
              <div className="st_date">
                <label>Starting Date</label>
                <select>
                  <option>Right after listing</option>
                </select>
              </div>
              <div className="ex_date">
                <label>Expiration Date</label>
                <select>
                  <option>1 day</option>
                </select>
              </div>
              <span>
                Any bid placed in the last 10 minutes extends the auction by 10
                minutes.
              </span>
            </div>
            <div className="mint">
              <label>Mint to</label>
              <input />
            </div>
            <div className="list">
              <label>List price of your NFT Token</label>
              <input placeholder="ETH" />
            </div>
            <div className="choose_network">
              <div>
                <h5>NFT Token</h5>
                <span>Choose your network</span>
              </div>
              <button className="ethereum">
                <span>Ethereum</span>
              </button>
              <button className="bsc">
                <span>BSC</span>
              </button>
            </div>
            <div className="info_blocks">
              <div className="info_block">
                <div className="info_block_header">
                  <span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="21.3335"
                        y="12"
                        width="5.33333"
                        height="5.33333"
                        rx="2.66667"
                        transform="rotate(90 21.3335 12)"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <rect
                        x="26.6665"
                        y="22.6665"
                        width="5.33333"
                        height="5.33333"
                        rx="2.66667"
                        transform="rotate(90 26.6665 22.6665)"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <path
                        d="M6.6665 5.3335V21.3335C6.6665 23.2191 6.6665 24.1619 7.25229 24.7477C7.83808 25.3335 8.78089 25.3335 10.6665 25.3335H21.3332"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <path
                        d="M6.6665 9.3335V10.6668C6.6665 12.5524 6.6665 13.4953 7.25229 14.081C7.83808 14.6668 8.78089 14.6668 10.6665 14.6668H15.9998"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                    </svg>
                    ERC - 721
                  </span>
                  <div className="single_product_chekbox">
                    <input id="721 auction" type="checkbox" />
                    <label htmlFor="721 auction">
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="info_block_text">
                  ERC-721 is a global Token standard exhibiting functionalities
                  of developing the Non-Fungible Tokens over the Ethereum
                  blockchain. The ERC-721 contributes to the rarity and
                  uniqueness to the assets designed and developed. The NFTs are
                  developed with unique uint256 token ID attributes that are
                  available globally.
                </div>
              </div>
              <div className="info_block">
                <div className="info_block_header">
                  <span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="21.3335"
                        y="12"
                        width="5.33333"
                        height="5.33333"
                        rx="2.66667"
                        transform="rotate(90 21.3335 12)"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <rect
                        x="26.6665"
                        y="22.6665"
                        width="5.33333"
                        height="5.33333"
                        rx="2.66667"
                        transform="rotate(90 26.6665 22.6665)"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <path
                        d="M6.6665 5.3335V21.3335C6.6665 23.2191 6.6665 24.1619 7.25229 24.7477C7.83808 25.3335 8.78089 25.3335 10.6665 25.3335H21.3332"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                      <path
                        d="M6.6665 9.3335V10.6668C6.6665 12.5524 6.6665 13.4953 7.25229 14.081C7.83808 14.6668 8.78089 14.6668 10.6665 14.6668H15.9998"
                        stroke="#0075FF"
                        stroke-width="2"
                      />
                    </svg>
                    ERC - 1155
                  </span>
                  <div className="single_product_chekbox">
                    <input id="1155 auction" type="checkbox" />
                    <label htmlFor="1155 auction">
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="info_block_text">
                  ERC-1155 is a token standard specifically designed and
                  developed by the Enjin network. ERC-1155 can be used to create
                  both fungible (currencies) and non-fungible (digital cards,
                  pets and in-game skins) assets exclusively on the Ethereum
                  Blockchain Network Architecture along with Transaction
                  bundling which reduces the cost of token development.
                </div>
              </div>
            </div>
            <div className="info_blocks_footer">
              <div className="info_block_footer">
                <div className="single_product_chekbox">
                  <input id="proprietary auction" type="checkbox" />
                  <label htmlFor="proprietary auction">
                    <span></span>
                  </label>
                </div>
                Proprietary
              </div>
              <div className="info_block_footer">
                <label>Mint more than one (only for erc1155)</label>
                <input />
              </div>
            </div>
            <span className="allow">
              Please allow up to 24 hours for moderation of your content
            </span>
            <button className="create">
              <span>Create</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
