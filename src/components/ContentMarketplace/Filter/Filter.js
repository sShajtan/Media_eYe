import React, { useState } from 'react';
import All from '../../Icons/Categories/All';
import Entertaiment from '../../Icons/Categories/Entertaiment';
import Art from '../../Icons/Categories/Art';
import Media from '../../Icons/Categories/Media';
import Crypto from '../../Icons/Categories/Crypto';
import Business from '../../Icons/Categories/Business';
import Sport from '../../Icons/Categories/Sport';
import './Filter.css';
import { Collapse } from 'react-collapse';

const Filter = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const [status, setStatus] = useState(false);
  const [price, setPrice] = useState(false);
  const [collections, setCollections] = useState(false);
  const [chains, setChains] = useState(false);
  const [categories, setCategories] = useState(false);
  const [onSaleIn, setOnSaleIn] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleStatus = () => {
    setStatus(!status);
  };

  const togglePrice = () => {
    setPrice(!price);
  };

  const toggleCollections = () => {
    setCollections(!collections);
  };

  const toggleChains = () => {
    setChains(!chains);
  };

  const toggleCategories = () => {
    setCategories(!categories);
  };

  const toggleOnSaleIn = () => {
    setOnSaleIn(!onSaleIn);
  };

  return (
    <div className="filter_wrapper">
      <button
        className={showFilter ? 'filter_button open' : 'filter_button'}
        onClick={toggleFilter}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M5.7136 7.08807C5.87101 7.25937 5.95743 7.48314 5.95743 7.71462V14.5357C5.95743 14.9462 6.45281 15.1546 6.74602 14.866L8.64883 12.6854C8.90346 12.3798 9.0439 12.2286 9.0439 11.9261V7.71617C9.0439 7.48468 9.13186 7.26091 9.28773 7.0896L14.7477 1.16514C15.1566 0.72069 14.8418 0 14.2369 0H0.764441C0.159494 0 -0.156868 0.719147 0.253631 1.16514L5.7136 7.08807Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="15" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
        &nbsp;Filters
      </button>
      <Collapse isOpened={showFilter}>
        <div
          className="filter_block"
          onClick={(event) => event.stopPropagation()}
        >
          <ul>
            <li onClick={toggleStatus}>
              <div
                className={
                  status
                    ? 'filter_title status_title open'
                    : 'filter_title status_title'
                }
              >
                <span>Status</span>
                <span>&#10095;</span>
              </div>
              <Collapse isOpened={status}>
                <div
                  className="filter_fields status_filter"
                  onClick={(event) => event.stopPropagation()}
                >
                  <input type="button" value="Buy now" />
                  <input type="button" value="On Auction" />
                  <input type="button" value="New" />
                  <input type="button" value="Has Offers" />
                </div>
              </Collapse>
            </li>
            <li onClick={togglePrice}>
              <div
                className={
                  price
                    ? 'filter_title price_title open'
                    : 'filter_title price_title'
                }
              >
                <span>Price</span>
                <span>&#10095;</span>
              </div>
              <Collapse isOpened={price}>
                <div
                  className="filter_fields price_filter"
                  onClick={(event) => event.stopPropagation()}
                >
                  <select>
                    <option>United States Dollar (USD)</option>
                  </select>
                  <div className="price_filter_range">
                    <input placeholder="min" /> to <input placeholder="max" />
                  </div>
                  <input type="button" className="applay" value="Applay" />
                </div>
              </Collapse>
            </li>
            <li onClick={toggleCollections}>
              <div
                className={
                  collections
                    ? 'filter_title collections_title open'
                    : 'filter_title collections_title'
                }
              >
                <span>Collections</span>
                <span>&#10095;</span>
              </div>
              <Collapse isOpened={collections}>
                <div
                  className="filter_fields collections_filter"
                  onClick={(event) => event.stopPropagation()}
                >
                  <input placeholder="filter" />
                  <button>
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="13.2923"
                        cy="13.2916"
                        r="8.45833"
                        stroke="#555555"
                        strokeWidth="2"
                      />
                      <path
                        d="M13.291 9.66675C12.815 9.66675 12.3436 9.76051 11.9038 9.94268C11.464 10.1249 11.0644 10.3919 10.7278 10.7285C10.3911 11.0651 10.1241 11.4647 9.94195 11.9045C9.75978 12.3443 9.66602 12.8157 9.66602 13.2917"
                        stroke="#555555"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M24.166 24.1667L20.541 20.5417"
                        stroke="#555555"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </Collapse>
            </li>
            <li onClick={toggleChains}>
              <div
                className={
                  chains
                    ? 'filter_title chains_title open'
                    : 'filter_title chains_title'
                }
              >
                <span>Chains</span>
                <span>&#10095;</span>
              </div>
              <Collapse isOpened={chains}>
                <div
                  className="filter_fields chains_filter"
                  onClick={(event) => event.stopPropagation()}
                >
                  ?....
                </div>
              </Collapse>
            </li>
            <li onClick={toggleCategories}>
              <div
                className={
                  categories
                    ? 'filter_title categories_title open'
                    : 'filter_title categories_title'
                }
              >
                <span>Categories</span>
                <span>&#10095;</span>
              </div>
              <Collapse isOpened={categories}>
                <div
                  className="filter_fields categories_filter"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button>
                    <All />
                    All
                  </button>
                  <button>
                    <Entertaiment />
                    Entertainment
                  </button>
                  <button>
                    <Media />
                    Media
                  </button>
                  <button>
                    <Art />
                    Art
                  </button>
                  <button>
                    <Crypto />
                    Crypto
                  </button>
                  <button>
                    <Business />
                    Business
                  </button>
                  <button>
                    <Sport />
                    Sports
                  </button>
                </div>
              </Collapse>
            </li>
            <li onClick={toggleOnSaleIn}>
              <div
                className={
                  onSaleIn
                    ? 'filter_title on_sale_in_title open'
                    : 'filter_title on_sale_in_title'
                }
              >
                <span>On Sale In</span>
                <span>&#10095;</span>
              </div>
              <Collapse isOpened={onSaleIn}>
                <div
                  className="filter_fields on_sale_in_filter"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="on_sale_in_search">
                    <input placeholder="filter" />
                    <button>
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="13.2923"
                          cy="13.2916"
                          r="8.45833"
                          stroke="#555555"
                          strokeWidth="2"
                        />
                        <path
                          d="M13.291 9.66675C12.815 9.66675 12.3436 9.76051 11.9038 9.94268C11.464 10.1249 11.0644 10.3919 10.7278 10.7285C10.3911 11.0651 10.1241 11.4647 9.94195 11.9045C9.75978 12.3443 9.66602 12.8157 9.66602 13.2917"
                          stroke="#555555"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M24.166 24.1667L20.541 20.5417"
                          stroke="#555555"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="on_sale_in_checkbox">
                    <div>
                      <input id="ETH" type="checkbox" />
                      <label htmlFor="ETH">
                        <span></span>
                        ETH
                      </label>
                    </div>
                    <div>
                      <input id="WETH" type="checkbox" />
                      <label htmlFor="WETH">
                        <span></span>
                        WETH
                      </label>
                    </div>
                    <div>
                      <input id="0xBTC" type="checkbox" />
                      <label htmlFor="0xBTC">
                        <span></span>
                        0xBTC
                      </label>
                    </div>
                    <div>
                      <input id="1337" type="checkbox" />
                      <label htmlFor="1337">
                        <span></span>
                        1337
                      </label>
                    </div>
                    <div>
                      <input id="1MT" type="checkbox" />
                      <label htmlFor="1MT">
                        <span></span>
                        1MT
                      </label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </li>
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default Filter;
