import React, {useState} from "react";
import All from "../../Icons/Categories/All";
import Entertaiment from "../../Icons/Categories/Entertaiment";
import Art from "../../Icons/Categories/Art";
import Media from "../../Icons/Categories/Media";
import Crypto from "../../Icons/Categories/Crypto";
import Business from "../../Icons/Categories/Business";
import Sport from "../../Icons/Categories/Sport";
import "./MarketplaceHeader.css";
import { Collapse } from "react-collapse";
import Filter from "../Filter/Filter"; 

const ContentMarketplaceHeader = (props) => {
    const {darkTheme} = props;
const [showMobileCategories, setShowMobileCategories] = useState(false);



        const toggleMobileCategories = () => {
        setShowMobileCategories(!showMobileCategories)
  };

  

    return (
        <div className="content_marketplace_header">
            <div className="container">
                <div className="content_marketplace_header_main">
                    <img src={darkTheme ? "img/content_marketplace_title_dark.png" : "img/content_marketplace_title.png"} alt="title" />
                    <div className="content_marketplace_header_main_wrapper">
                        <div className="content_marketplace_header_menu_mobile">
                            <button className={showMobileCategories ? "categories_mobile_button open" : "categories_mobile_button" } onClick={toggleMobileCategories}>
                                Categories
                            </button>
                            <Collapse isOpened={showMobileCategories} >
                                                <div className="filter_fields categories_filter" onClick={(event) => event.stopPropagation()}>
                                                    <button><All />All</button>
                                                    <button><Entertaiment />Entertainment</button>
                                                    <button><Media />Media</button>
                                                    <button><Art />Art</button>
                                                    <button><Crypto />Crypto</button>
                                                    <button><Business />Business</button>
                                                    <button><Sport />Sports</button>
                                                </div>
                            </Collapse>
                        </div>
                        <div className="content_marketplace_header_menu">
                            <button className="active"><span>All</span></button>
                            <button><span>Entertainment</span></button>
                            <button><span>Media</span></button>
                            <button><span>Art</span></button>
                            <button><span>Crypto</span></button>
                            <button><span>Business</span></button>
                            <button><span>Sports</span></button>
                        </div>
                        <Filter />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentMarketplaceHeader;
