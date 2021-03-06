import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';
import { injectedConnector } from '../../../connectors';
import './ProfileWallet.css';

const ProfileWallet = (props) => {
  const { chainId, account, activate, deactivate } = useWeb3React();

  const onConnectMetaMask = () => {
    activate(injectedConnector);
  };

  const onConnectRamp = () => {
    new RampInstantSDK({
      hostAppName: 'MeDIA EYE',
      hostApiKey: process.env.REACT_APP_RAMP_PRIVATE_KEY,
      hostLogoUrl: 'https://media-eye.web.app/img/logo.png'
    }).show();
  };

  return (
    <div className="profile_wallet_page">
      <div className="profile_wallet_page_header">
        <h2>Wallet</h2>
        <button>{account && account}</button>
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
          <button
            className="create_wallet_onramper wallet_btn"
            onClick={onConnectRamp}
          >
            OnRamper
          </button>
          <button className="create_wallet_ramp wallet_btn">Ramp</button>
          <button className="create_wallet_moonpay wallet_btn">Paypal</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileWallet;
