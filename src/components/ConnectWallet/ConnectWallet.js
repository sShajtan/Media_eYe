import React from 'react';
import { useSelector } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from '../../connectors';
import './ConnectWallet.css';
import { NavLink, useHistory } from 'react-router-dom';

const ConnectWallet = (props) => {
  const { chainId, account, activate, deactivate } = useWeb3React();
  const darkTheme = useSelector((state) => state.app.darkTheme);
  let history = useHistory();

  const onConnectMetaMask = () => {
    activate(injectedConnector);
  };

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
            <button id="MetaMask" onClick={onConnectMetaMask}></button>
            <button id="Binance"></button>
            <button id="Trust"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
