import React, { useState } from 'react';
import './Popup.css';
import CloseIcon from '../../Icons/CloseIcon';
import { useSelector } from 'react-redux';

const Popup = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const [activeToken, setActiveToken] = useState(null);
  const [activeDay, setActiveDay] = useState(null);

  return (
    <React.Fragment>
      <div className={props.showPopup ? 'popup active' : 'popup'}>
        <div
          className="popup-wrapper selected_popup "
          onClick={props.togglePopup}
        >
          <div onClick={(event) => event.stopPropagation()}>
            <div className="container">
              <div className="main_add_popup main_feature_popup">
                <div className="close" onClick={props.togglePopup}>
                  <CloseIcon />
                </div>
                <div className="feature_popup_main">
                  <h3>Select your Feature</h3>
                  <div className="subscribe_term">
                    <h6>Subscription term</h6>
                    <div>
                      <div className="marketplace_block_info">
                        30 days
                        <div className="on_sale_in_checkbox">
                          <input
                            id="30day"
                            type="checkbox"
                            checked={activeDay === '30' ? true : null}
                            onClick={() => setActiveDay('30')}
                          />
                          <label htmlFor="30day">
                            <span></span>
                          </label>
                        </div>
                      </div>
                      <div className="marketplace_block_info">
                        90 days
                        <div className="on_sale_in_checkbox">
                          <input
                            id="90day"
                            type="checkbox"
                            checked={activeDay === '90' ? true : null}
                            onClick={() => setActiveDay('90')}
                          />
                          <label htmlFor="90day">
                            <span></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature_payments_token">
                    <h6>Subscription term</h6>
                    <div className="collection_block_buttons">
                      <button
                        className={activeToken === 'ETH' ? 'active' : null}
                        onClick={() => {
                          setActiveToken('ETH');
                        }}
                      >
                        <img
                          src={
                            darkTheme
                              ? '../img/eth_sm.png'
                              : '../img/eth_sm_dark.png'
                          }
                          alt="ETH"
                        />
                        <div>
                          <h6>ETH</h6>
                          <span>Ethereum</span>
                        </div>
                      </button>
                      <button
                        className={activeToken === 'USDT' ? 'active' : null}
                        onClick={() => {
                          setActiveToken('USDT');
                        }}
                      >
                        <img src="../img/usdt.png" alt="usdt" />
                        <div>
                          <h6>USDT</h6>
                          <span>Tether</span>
                        </div>
                      </button>
                      <button
                        className={activeToken === 'eYe' ? 'active' : null}
                        onClick={() => {
                          setActiveToken('eYe');
                        }}
                      >
                        <img src="../img/eye_sm.png" alt="eYe" />
                        <div>
                          <h6>eYe</h6>
                          <span>Media eYe</span>
                        </div>
                      </button>
                    </div>
                    <div className="feature_popup_footer">
                      <p>
                        Paying in eye, there is 15% discount, as well as a 10%
                        discount for choosing 90 days, these discounts stack.
                      </p>
                    </div>
                  </div>
                  <button className="buy_btn">Subscribe</button>
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
