import React from 'react';
import ConnectWalletMain from '../components/ConnectWallet/ConnectWallet.js';

const ConnectWallet = (props) => {
  const { closeNftCollapse } = props;
  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <ConnectWalletMain />
      </div>
    </React.Fragment>
  );
};

export default ConnectWallet;
