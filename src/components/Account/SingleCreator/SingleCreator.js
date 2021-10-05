import React, { useRef, useEffect, useState } from 'react';
import MarketplaceBlock from "../../ContentMarketplace/MarketplaceBlock/MarketplaceBlock";
import { useSelector, useDispatch } from 'react-redux';
import { Collapse } from 'react-collapse';
import "./SingleCreator.css";
import SearchIcon from '../../Icons/SearchIcon';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import { useHistory } from 'react-router-dom';
import Down from '../../Icons/down';
import avatar from '../../../assets/img/avatar_collection.png'
import CollectionSingleBlock from '../CollectionSingleBlock/CollectionSingleBlock';


var ReactDOM = require('react-dom');



const SingleCreator = (props) => {
const [wallet, setWallet] = useState('9999999999999999999999999999999');
const [showText, setShowText] = useState(false);
const theme = useSelector((state) => state.app.darkTheme);
const [grid, setGrid] = useState('1');
const [showEditblock, setShowEditblock] = useState(false);
const [activeMinters, setActiveMinters] = useState([]);
 const [valueSelect, setValueSelect] = useState(null);
const Links = useRef(null);
  let history = useHistory();

    
    return (
        <div className="creator_account account_collection single_collection single_creator">
            <div className="container">
                <div className="creator_account_main">
                   <div className="img_line">
                        <img src="../../../img/creator_account_1.png" />
                        <button className="account_img_edit active" onClick={()=>setShowEditblock(!showEditblock)}>
                            <img src="../../../img/pen.png" />
                        </button>
                        <div className="edit_block">
                                <Collapse isOpened={showEditblock}>
                                    <button>Edit</button>
                                    <button>Remove collection</button>
                                </Collapse>
                        </div>
                   </div>
                    <div className="creator_account_main_header">
                        <div className="collection_left_block">
                            <a className="goBack_button" onClick={() => history.goBack()}>
                                <span>&#8592; </span> Go Back
                            </a>
                            <button onClick={() => history.push("/create/collection")}><span>Create Collection</span></button>
                        </div>
                        <div className="creator_account_avatar">
                            <img src="../../../img/creator_account_avatar.png" />    
                        </div>
                        <div className="collection_right_block">
                            <div className="account_links">
                                <a>
                                    <img src={theme ? "../../../img/account_links/1_dark.png" : "../../../img/account_links/1.png" } />
                                </a>
                                <a>
                                    <img src={theme ? "../../../img/account_links/2_dark.png" : "../../../img/account_links/2.png" } />
                                </a>
                                <a>
                                    <img src={theme ? "../../../img/account_links/3_dark.png" : "../../../img/account_links/3.png" } />
                                </a>
                                <a>
                                    <img src={theme ? "../../../img/account_links/4_dark.png" : "../../../img/account_links/4.png" } />
                                </a>
                            </div>
                        </div>
                        <div className="creator_account_info">
                            
                            <h4>Collection 1 [Title]</h4>
                            
                                <Collapse isOpened={showText}>
                                <div className="single_collection_info">
                                {!showText ? <div className="oppacity_wrapper"></div> : null}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut varius odio. Donec ullamcorper, lorem at dignissim ullamcorper, tellus nisl fringilla augue, ut convallis justo ligula sed nunc. Aliquam tortor elit, maximus nec scelerisque et, posuere vel felis. Aenean fringilla in felis ac sagittis. Mauris porta dui at mi luctus, sit amet tincidunt dui ultrices. Cras ut porttitor ligula. Nam tellus neque, tempus gravida lacus sit amet, fringilla tristique dui. Sed dui tortor, maximus at ante vitae, mollis dictum felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus rhoncus, ante vel viverra placerat, metus erat efficitur dui, non fermentum elit nunc quis lorem. Etiam vel volutpat arcu.

                                    Aliquam lobortis felis a venenatis faucibus. Maecenas aliquam, nibh vel rhoncus posuere, ipsum nulla tincidunt neque, ac rutrum nisi orci non erat. Mauris in elit faucibus, congue lorem hendrerit, fringilla sem. In eget vestibulum odio, non porta lorem. Vestibulum ante ipsum primis
                                    </div>
                                </Collapse>
                            
                            <button className={showText ? "open_text_btn active" : "open_text_btn"  }onClick={()=>setShowText(!showText)}><Down /></button>
                            
                        </div>
                        
                    </div>
                    <div className="single_collection_info_block">
                        <div>
                            <span>7.0k</span>
                            items
                        </div>
                        <div>
                            <span>2.3k</span>
                            ovners
                        </div>
                        <div>
                            <img src="../../../img/heart.png" />
                            123 k
                        </div>
                        <div>
                            <span>74.0</span>
                            volume traded
                        </div>
                        <div>
                            <img src="../../../img/eth.png" />
                            ERC 721
                        </div>
                    </div>
                    <div className="creator_account_filter">
                        <div className="creator_account_search" >
                            <input type="text" placeholder="Search" />
                            <button>
                                <SearchIcon />
                            </button>
                        </div>
                        <div className="add_block_colletion add_block_colletion_creator">
                            <div class="active_minters_block_cretor">
                                <img src={avatar} />
                                <div>
                                    <h5>Artist_Title_1</h5>
                                    <span>Owner</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid_filter">
                            <div className="grid_menu">
                                <button className="2rows" onClick={()=>setGrid('2')}>
                                    <img src={grid == '2' ? "../../../img/2rows-active.png" : "../../../img/2rows_"+theme+".png"} />
                                </button>
                                <button className="1rows" onClick={()=>setGrid('1')}>
                                     <img src={grid == '1' ? "../../../img/1rows_active.png" : "../../../img/1rows_"+theme+".png"} />
                                </button>
                            </div>
                            <FilterAccount />
                        </div>
                        
                    </div>
                    <div className="active_minters">
                    </div>
                    <div className={grid == '2' ? "creator_account_main_block two_rows" : "creator_account_main_block one_row"}>
                        <CollectionSingleBlock count={'1/1000'}/>
                        <CollectionSingleBlock count={'2/1000'}/>
                        <CollectionSingleBlock count={'1/1'}/>
                        <CollectionSingleBlock />
                        <CollectionSingleBlock />
                        <CollectionSingleBlock />
                        <CollectionSingleBlock />
                        <CollectionSingleBlock />
                    </div>
                    <button className="load_more">Load More</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCreator;
