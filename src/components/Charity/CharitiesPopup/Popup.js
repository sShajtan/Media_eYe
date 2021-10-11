import React, { useState } from 'react';
import './Popup.css';
import '../../Account/AddPopup/Popup.css';
import CloseIcon from '../../Icons/CloseIcon';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import { useSelector} from 'react-redux';
import Down from '../../Icons/down';
import { Collapse } from 'react-collapse';



const Popup = (props) => {
  const { togglePopup } = props;
  const theme = useSelector((state) => state.app.darkTheme);
  const [activeToken, setActiveToken] = useState(null);
  let history = useHistory();

  return (
    <React.Fragment>
      <div className={props.showPopup ? 'popup active' : 'popup'}>
        <div
          className="popup-wrapper selected_popup charities_popup"
          onClick={togglePopup}
        >
          <div
            
          >
            <div className="container" >
              <div className="main_add_popup" onClick={(event) => event.stopPropagation()}>
              <div className="close" onClick={togglePopup}>
                <CloseIcon />
              </div>
                  <div className="selected_popup_main">
                    <h3>Select Your Crypto</h3>
                    <h6>Payment tokens</h6>
                    <span>Select from our accepted tokens.</span>
                    <div className="collection_block_buttons">
                          <button className={activeToken == 'ETH' ? 'active' : null} onClick={() => {setActiveToken('ETH')}}>
                            <img
                              src={
                                theme ? '../img/eth_sm.png' : '../img/eth_sm_dark.png'
                              }
                            />
                            <div>
                              <h6>ETH</h6>
                              <span>Ethereum</span>
                            </div>
                          </button>
                          <button className={activeToken == 'BNB' ? 'active' : null} onClick={() => {setActiveToken('BNB')}}>
                            <img src="../img/bnb.png" />
                            <div>
                              <h6>BNB</h6>
                              <span>Binance</span>
                            </div>
                          </button>
                          <button className={activeToken == 'eYe' ? 'active' : null} onClick={() => {setActiveToken('eYe')}}>
                            <img src="../img/eye_sm.png" />
                            <div>
                              <h6>eYe</h6>
                              <span>Media eYe</span>
                            </div>
                          </button>
                        </div>    
                    <div className="selected_popup_bid">
                      <input type="text" placeholder="Add token" />
                      <div className="selected_popup_bid_dropdown">
                        <div className="selected_block_price_dropdown">
                          <Down />
                      </div>
                      </div>
                      
                    </div>
                    <span>These tokens can be used to buy and sell your items.</span>
                    <div>
                        <h5>Enter Donation Amount</h5>
                        <div className="charities_donation_amount">
                          <input value="0,2904" />
                          <span>ETH</span>
                        </div>
                        <br/>
                        <span>~ 1000 USD</span>
                    </div> 
                    <button className="buy_btn">Donate</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Popup;
