import React from "react";
import All from "../../Icons/Categories/All";
import Entertaiment from "../../Icons/Categories/Entertaiment";
import Art from "../../Icons/Categories/Art";
import Media from "../../Icons/Categories/Media";
import Crypto from "../../Icons/Categories/Crypto";
import Business from "../../Icons/Categories/Business";
import Sport from "../../Icons/Categories/Sport";
import "./ContentMarketplaceHeader.css";

const ContentMarketplaceHeader = () => {


    return (
        <div className="content_marketplace_header">
            <div className="container">
                <div className="content_marketplace_header_main">
                    <img src="img/content_marketplace_title.png" alt="title" />
                    <div className="content_marketplace_header_main_wrapper">
                        <div className="filter_wrapper">
                            <button className="filter_button">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M5.7136 7.08807C5.87101 7.25937 5.95743 7.48314 5.95743 7.71462V14.5357C5.95743 14.9462 6.45281 15.1546 6.74602 14.866L8.64883 12.6854C8.90346 12.3798 9.0439 12.2286 9.0439 11.9261V7.71617C9.0439 7.48468 9.13186 7.26091 9.28773 7.0896L14.7477 1.16514C15.1566 0.72069 14.8418 0 14.2369 0H0.764441C0.159494 0 -0.156868 0.719147 0.253631 1.16514L5.7136 7.08807Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="15" height="15" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                &nbsp;Filters</button>

                            <div className="filter_block">
                                <ul>
                                    <li>
                                        <div className="filter_title status_title active">
                                            <span>Status</span>
                                            <span>&#10095;</span>
                                        </div>
                                        <div className="filter_fields status_filter">
                                            <input type="button" value="Buy now" />
                                            <input type="button" value="On Auction" />
                                            <input type="button" value="New" />
                                            <input type="button" value="Has Offers" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="filter_title price_title">
                                            <span>Price</span>
                                            <span>&#10095;</span>
                                        </div>
                                        <div className="filter_fields price_filter">
                                            <select>
                                                <option>United States Dollar (USD)</option>
                                            </select>
                                            <div className="price_filter_range"><input placeholder="min" /> to <input placeholder="max" /></div>
                                            <input type="button" className="applay" value="Applay" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="filter_title collections_title active">
                                            <span>Collections</span>
                                            <span>&#10095;</span>
                                        </div>
                                        <div className="filter_fields collections_filter">
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
                                    </li>
                                    <li><div className="filter_title chains_title active">
                                        <span>Chains</span>
                                        <span>&#10095;</span>
                                    </div>
                                        <div className="filter_fields chains_filter">
                                            ?....
                                        </div>
                                    </li>
                                    <li>
                                        <div className="filter_title categories_title active">
                                            <span>Categories</span>
                                            <span>&#10095;</span>
                                        </div>
                                        <div className="filter_fields categories_filter">
                                            <button><All />All</button>
                                            <button><Entertaiment />Entertainment</button>
                                            <button><Media />Media</button>
                                            <button><Art />Art</button>
                                            <button><Crypto />Crypto</button>
                                            <button><Business />Business</button>
                                            <button><Sport />Sports</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="filter_title on_sale_in_title active">
                                            <span>On Sale In</span>
                                            <span>&#10095;</span>
                                        </div>
                                        <div className="filter_fields on_sale_in_filter">
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
                                                <div><label for="11"></label><input name="11" type="checkbox" className="checkbox" />ETH</div>
                                                <div><label></label><input type="checkbox" className="checkbox" />WETH</div>
                                                <div><label></label><input type="checkbox" className="checkbox" />0xBTC</div>
                                                <div><label></label><input type="checkbox" className="checkbox" />1337</div>
                                                <div><label></label><input type="checkbox" className="checkbox" />1MT</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_marketplace_header_menu">
                            <button className="active">All</button>
                            <button>Entertainment</button>
                            <button>Media</button>
                            <button>Art</button>
                            <button>Crypto</button>
                            <button>Business</button>
                            <button>Sports</button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentMarketplaceHeader;
