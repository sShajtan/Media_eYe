import React from 'react';
import './ConnectWallet.css';
import { NavLink, useHistory } from 'react-router-dom';

const ConnectWallet = (props) => {
  const { darkTheme } = props;
  let history = useHistory();

  return (
    <div className="connect_wallet">
      <div className="connect_wallet_left"></div>
      <div className="connect_wallet_right">
        <div className="connect_wallet_main">
          <a className="goBack_button" onClick={() => history.goBack()}>
            <span> &#8592;</span> GoBack
          </a>
          <h2>CONNECT YOUR WALLET</h2>
          <span>Change network</span>
          <div className="connect_wallet_networks">
            <button id="bsc"></button>
            <button id="eth"></button>
          </div>
          <div className="connect_wallet_walletss">
            <button id="MetaMask"></button>
            <button id="Binance"></button>
            <button id="Trust"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
