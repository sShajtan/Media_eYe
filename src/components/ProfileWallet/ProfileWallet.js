import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from '../../connectors';
import './ProfileWallet.css';

const ProfileWallet = (props) => {
  const { chainId, account, activate, deactivate } = useWeb3React();
  const theme = useSelector((state) => state.app.darkTheme);

  const onConnectMetaMask = () => {
    activate(injectedConnector);
  };

  return (
    <div className="profile_wallet_page">
      <div className="profile_wallet_page_header">
        <h2>Wallet</h2>
        <a>My crypto wallet address</a>
      </div>
      <h6>Account balance</h6>
      <div className="profile_wallet_page_main">
        <div className="profile_wallet_block">
          <span className="profile_wallet_block_title">Crypto eYe</span>
          <span className="profile_wallet_block_result">0,0000 Crypto eYe</span>
        </div>
        <div className="profile_wallet_block">
          <span className="profile_wallet_block_title">ETH</span>
          <span className="profile_wallet_block_result">0,0000 ETH</span>
        </div>

        <div className="profile_wallet_block">
          <span className="profile_wallet_block_title">Crypto eYe</span>
          <span className="profile_wallet_block_result">0,0000 Crypto eYe</span>
        </div>

        <div className="profile_wallet_block">
          <span className="profile_wallet_block_title">USDT</span>
          <span className="profile_wallet_block_result">0,0000 USDT</span>
        </div>

        <div className="profile_wallet_block">
          <span className="profile_wallet_block_title">BNB</span>
          <span className="profile_wallet_block_result">0,0000 BNB</span>
        </div>

        <div className="profile_wallet_block">
          <span className="profile_wallet_block_title">BUSD</span>
          <span className="profile_wallet_block_result">0,0000 BUSD</span>
        </div>
        <div className="profile_wallet_block">
          <span className="profile_wallet_block_title">NFTs</span>
          <span className="profile_wallet_block_result">0,0000 NFTs</span>
        </div>
      </div>
      <button className="create_wallet">
        <span>Create Account Wallet</span>
      </button>
      <div className="profile_wallet_connect_wallet">
        <h6>Connect your Wallet</h6>
        <div>
          <button
            className="create_wallet_metamask wallet_btn"
            onClick={onConnectMetaMask}
          >
            MetaMask
          </button>
          <button className="create_wallet_trust wallet_btn">
            Trust Wallet
          </button>
        </div>
        <h6>Fund your account wallet with Credit Card or Crypto</h6>
        <div>
          <button className="create_wallet_onramper wallet_btn">
            OnRamper
          </button>
          <button className="create_wallet_binance wallet_btn">Binance</button>
          <button className="create_wallet_moonpay wallet_btn">MoonPay</button>
          <button className="create_wallet_crypto  wallet_btn">
            Crypto.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileWallet;
