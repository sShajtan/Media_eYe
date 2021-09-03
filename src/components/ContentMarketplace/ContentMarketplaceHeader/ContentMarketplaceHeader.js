import React from "react";
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
                                            <button><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.4062 17H1.59375C0.714645 17 0 16.2846 0 15.4062V1.59375C0 0.715424 0.714645 0 1.59375 0H15.4062C16.2854 0 17 0.715424 17 1.59375V15.4062C17 16.2846 16.2854 17 15.4062 17ZM1.59375 1.0625C1.3005 1.0625 1.0625 1.30115 1.0625 1.59375V15.4062C1.0625 15.6989 1.3005 15.9375 1.59375 15.9375H15.4062C15.6995 15.9375 15.9375 15.6989 15.9375 15.4062V1.59375C15.9375 1.30115 15.6995 1.0625 15.4062 1.0625H1.59375Z" fill="white" />
                                                <path d="M16.4688 9.03125H0.53125C0.237999 9.03125 0 8.79325 0 8.5C0 8.20675 0.237999 7.96875 0.53125 7.96875H16.4688C16.762 7.96875 17 8.20675 17 8.5C17 8.79325 16.762 9.03125 16.4688 9.03125Z" fill="white" />
                                                <path d="M8.5 17C8.20675 17 7.96875 16.762 7.96875 16.4688V0.53125C7.96875 0.237999 8.20675 0 8.5 0C8.79325 0 9.03125 0.237999 9.03125 0.53125V16.4688C9.03125 16.762 8.79325 17 8.5 17Z" fill="white" />
                                            </svg>
                                                All</button>
                                            <button>Entertainment</button>
                                        </div>
                                    </li>
                                    <li><div className="filter_title status_title active">
                                        <span>Status</span>
                                        <span>&#10095;</span>
                                    </div></li>
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
