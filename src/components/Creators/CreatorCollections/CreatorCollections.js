import React, { useRef, useEffect } from 'react';
import MarketplaceBlock from "../../ContentMarketplace/MarketplaceBlock/MarketplaceBlock";
import "./CreatorCollections.css";
import SearchIcon from '../../Icons/SearchIcon';
import { NavLink } from "react-router-dom";
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import CollectionBlock from '../CollectionBlock/CollectionBlock';


var ReactDOM = require('react-dom');


const CreatorCollections = (props) => {

const Links = useRef(null);

  const focus = () => {
    const element = ReactDOM.findDOMNode(Links.current).getElementsByClassName('active');
    element[0].focus();
  };

    useEffect(() => {
    focus();
  });
    
    return (
        <div className="creator_account account_collection">
            <div className="container">
                <div className="creator_account_main">
                   <div className="img_line">
                        <img src="../img/creator_account.png" />
                        <button className="account_img_edit"><img src="../img/pen.png" /></button>
                   </div>
                    <div className="creator_account_main_header">
                        <div className="creator_account_avatar">
                            <img src="../img/creator_account_avatar.png" />    
                        </div>
                        <h6><span>Feature:</span>Business eYe Level 1</h6>
                        <div className="creator_account_info">
                            <span><img src="../img/heart.svg" alt="heart" />&nbsp;123 k</span>
                            <h4>Username</h4>
                            <div className="account_wallet">0x9276...12ae</div>
                            <div className="account_balance">
                                <img src="../img/token_1.png" />
                                Balance: 123345 eYe ($1234) 
                            </div>
                        </div>
                        
                    </div>
                    <div className="creator_account_menu_wrapper">
                        <div className="creator_account_menu" ref={Links}>
                            <NavLink exact to="/account/minted">
                                Minted NFT
                            </NavLink>
                            <NavLink exact to="/account/purchased">
                                NFTs Purchased
                            </NavLink>
                            <NavLink exact to="/account/currently">
                                Owned NFTs
                            </NavLink>
                            <NavLink exact to="/account/campaign">
                                Campaign
                            </NavLink>
                            <NavLink exact to="/account/favorites">
                                Favorites
                            </NavLink>
                            <NavLink exact to="/account/collections">
                                Collections
                            </NavLink>
                        </div>
                    </div>
                    <div className="creator_account_filter">
                        <div></div>
                        <div className="header_search" >
                            <input type="search" />
                            <button>
                                <SearchIcon />
                            </button>
                        </div>
                        <FilterAccount />
                    </div>
                    <div className="creator_account_main_block">
                        <CollectionBlock status={'await'}/>
                        <CollectionBlock status={'error'}/>
                        <CollectionBlock status={'check'}/>
                        <CollectionBlock />
                        <CollectionBlock />
                        <CollectionBlock />
                        <CollectionBlock />
                        <CollectionBlock />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatorCollections;
