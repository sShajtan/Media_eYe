import React from "react";
import ConnectWalletMain from "../components/ConnectWallet/ConnectWallet.js";


const ConnectWallet = (props) => {
    const { closeNftCollapse, darkTheme } = props;
    return (
        <React.Fragment>
            <div onClick={closeNftCollapse} className="marketplace">
                <ConnectWalletMain darkTheme={darkTheme} />
            </div>
        </React.Fragment> 
    );
};

export default ConnectWallet;
