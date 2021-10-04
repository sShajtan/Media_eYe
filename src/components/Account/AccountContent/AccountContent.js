import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./AccountContent.css";
import SearchIcon from '../../Icons/SearchIcon';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import ContentBlock from '../ContentBlock/ContentBlock';
import AccountMenu from '../AccountMenu/AccountMenu';


var ReactDOM = require('react-dom');


const AccountContent = (props) => {
    const theme = useSelector((state) => state.app.darkTheme);
    const [wallet, setWallet] = useState('9999999999999999999999999999999');
    const [activeTab, setActiveTab] = useState('approved');
    const [grid, setGrid] = useState('1');
    const [copyWallet, setCopyWallet] = useState(false);


    
    return (
        <div className="creator_account account_collection account_content">
            <div className="container">
                <div className="creator_account_main">
                   <div className="img_line">
                        <img src="../img/creator_account.png" />
                        <button className="account_img_edit"><img src="../img/pen.png" /></button>
                   </div>
                    <div className="creator_account_main_header">
                        <div className="collection_left_block">
                            <h6>Business eYe Level 1</h6>
                            <button><span>Subscription</span></button>
                        </div>
                        <div className="creator_account_avatar">
                            <img src="../img/creator_account_avatar.png" />    
                        </div>
                        <div className="collection_right_block">
                            <button><span>Put on Marketplace</span></button>
                        </div>
                        <h6 className="mobile_level">Business eYe Level 1</h6>
                        <div className="creator_account_info">
                            <div>
                                <span><img src="../img/heart.svg" alt="heart" />&nbsp;123 k</span>
                                <span><img src="../img/men.svg" alt="heart" />&nbsp;55 k</span>
                            </div>
                            <h4>Username</h4>
                            <div className="account_wallet" value="0x9276999999999999912aediv">0x9276...12aediv<div className="copy_block"><button className="copy_btn" onClick={() => {navigator.clipboard.writeText(wallet); setCopyWallet(true)}}><img src="../img/copy.png" /></button>{copyWallet ? "Copied!" : null}</div></div>
                            <div className="account_balance">
                                <img src="../img/token_1.png" />
                                Balance: 123345 eYe ($1234) 
                            </div>

                        </div>
                        
                    </div>
                    <AccountMenu />
                    <div className="creator_account_filter">
                        <div className="creator_account_search" >
                            <input type="text" placeholder="Search" />
                            <button>
                                <SearchIcon />
                            </button>
                        </div>
                        <div className="creator_account_filter_center">
                            <div className={activeTab==="approved" ? 'active' : null}  onClick={() => {setActiveTab('approved')}}><span>Approved</span>&nbsp; <img src={activeTab==="approved" ? "../../../img/approved_active.png" : theme ? "../../../img/approved_dark.png" : "../../../img/approved.png"} /></div>
                            <div className={activeTab==="waiting" ? 'active' : null} onClick={() => {setActiveTab('waiting')}}><span>Waiting for Approval</span> &nbsp; <img src={activeTab==="waiting" ? "../../../img/waiting_active.png" : theme ? "../../../img/waiting_dark.png" : "../../../img/waiting.png"} /></div>
                            <div className={activeTab==="not_approved" ? 'active' : null} onClick={() => {setActiveTab('not_approved')}}><span>Isn't approved</span> &nbsp; <img src={activeTab==="not_approved" ? "../../../img/not_approved_active.png" : theme ? "../../../img/not_approved_dark.png" : "../../../img/not_approved.png"} /></div>
                        </div>
                        <div className="grid_filter">
                            <div className="grid_menu">
                                <button className="2rows" onClick={()=>setGrid('2')}>
                                    <img src={grid == '2' ? "../../img/2rows-active.png" : "../../img/2rows_"+theme+".png"} />
                                </button>
                                <button className="1rows" onClick={()=>setGrid('1')}>
                                     <img src={grid == '1' ? "../../img/1rows_active.png" : "../../img/1rows_"+theme+".png"} />
                                </button>
                            </div>
                            <FilterAccount />
                        </div>
                        
                    </div>
                    {activeTab === "approved" ? <div className={grid == '2' ? "creator_account_main_block two_rows" : "creator_account_main_block one_row"}>
                        <ContentBlock status="approved" />
                        <ContentBlock status="approved" />
                        <ContentBlock status="approved" />
                        <ContentBlock status="approved" />
                    </div> : null }
                    {activeTab === "waiting" ? <div className={grid == '2' ? "creator_account_main_block two_rows" : "creator_account_main_block one_row"}>
                        <ContentBlock status="waiting" />
                        <ContentBlock status="waiting" />
                        <ContentBlock status="waiting" />
                        <ContentBlock status="waiting" />
                    </div> : null }
                    {activeTab === "not_approved" ? <div className={grid == '2' ? "creator_account_main_block two_rows" : "creator_account_main_block one_row"}>
                        <ContentBlock status="not_approved" />
                        <ContentBlock status="not_approved" />
                        <ContentBlock status="not_approved" />
                        <ContentBlock status="not_approved" />
                    </div> : null }
                    
                    <button className="load_more">Load More</button>
                </div>
            </div>
        </div>
    );
};

export default AccountContent;
