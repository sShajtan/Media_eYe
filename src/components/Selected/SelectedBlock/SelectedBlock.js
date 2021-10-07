import React, { useState} from 'react';
import { useSelector} from 'react-redux';
import Down from '../../Icons/down';
import './SelectedBlock.css';
import { Collapse } from 'react-collapse';
import { Button } from 'react-scroll';

const SelectedBlock = (props) => { 
const {auction, inCollection, bundle, charity, togglePopup, togglePopupBid} = props;
const theme = useSelector((state) => state.app.darkTheme);
const [showDropdown, setShowDropdown] = useState(false);
const [showDropdownCharity, setShowDropdownCharity] = useState(false);

  return (
    <div className="selected_block">
        <div className="selected_block_img_wrapper">
            <img className="selected_block_img" src="img/05.png" />
        </div>
        <div className="selected_block_main_info">
            <div>
                <h3>Product ID</h3>
                <div className="selected_block_avatar">
                    <img src="../../img/creator_account_avatar.png" />
                </div>
                <h6>@nickname</h6>
            </div>
            <div className="selected_block_timer_wrapper">
                {props.bundle ? <h6>Bundle of 5</h6> : null}
                {props.auction ? <div className="selected_block_timer">
                    <span>04:24:46</span>left <img src="../../img/fire.png" />
                </div> : null }
            </div>
        </div>
        <div className="selected_block_price_wrapper">
            {props.inCollection ? <h5>Part of <span>Collection 1 [Title]</span> collection</h5> : null }
             <div className="selected_block_price">
                <div>
                    <h6>Price</h6>
                    <div className="selected_block_price_main">
                        <span>0.053 </span>
                        <div className="selected_block_price_dropdown" onClick={()=>setShowDropdown(!showDropdown)}>
                        <img src={theme ? "../../img/eth_sm.png" : "../../img/eth_sm_dark.png" }  />ETH <button className={showDropdown ? "selected_block_price_dropdown_arrow active" : "selected_block_price_dropdown_arrow"  } ><Down /></button>
                        <div className="selected_block_price_dropdown_wrapper">
                            <Collapse isOpened={showDropdown}>
                                <div className="selected_block_price_dropdown_main">
                                    <span><img src={theme ? "../../img/eth_sm.png" : "../../img/eth_sm_dark.png" } />ETH</span>
                                    <span><img src="../../img/bnb.png" />BNB</span>
                                    <span><img src="../../img/eye_sm.png" />eYe</span>
                                </div>
                            </Collapse>
                        </div>
                        </div>
                    </div>
                    <span>$123</span>
                </div>
                {props.auction ? <div>
                    <h6>Current bid price</h6>
                    <div className="selected_block_price_main">
                        <span>0.053 ETH</span>
                    </div>
                </div> : null }
            </div>
            <div className="selected_block_buttons_block">
                <div><button className="selected_btn_buy" onClick={togglePopup}>Buy Now</button>{props.charity ? <div className="selected_block_charity">
            <div onMouseEnter={() => setShowDropdownCharity(true)} onMouseLeave={() => setShowDropdownCharity(false)}>
                <img src="../../img/charity.png" /><span>10%</span>
                <div className="selected_block_price_dropdown_wrapper">
                <Collapse isOpened={showDropdownCharity}>
                    <div className="selected_block_price_dropdown_main charity">
                        Description of charity
                    </div>
                </Collapse>
                </div>
            </div>
            
        </div> : null}</div>
                {props.auction ? <button className="selected_btn_bid" onClick={togglePopupBid}>Place a Bid</button> : null }
            </div>
        </div>
        <div className="selected_block_close">
            <img src="../../img/close.png" />
        </div>
    </div>
  );
};

export default SelectedBlock;
