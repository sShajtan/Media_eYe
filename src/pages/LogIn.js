import React from "react";
import ContentMarketplaceHeader from "../components/ContentMarketplace/ContentMarketplaceHeader/NftMarketplaceHeader.js";
import MarketplaceMain from "../components/ContentMarketplace/MarketplaceMain/MarketplaceMain";
import MarketplaceSlider from "../components/ContentMarketplace/MarketplaceSlider/MarketplaceSlider";
import Login from "../components/LogIn/LogIn.js";


const LogIn = (props) => {
    const { closeNftCollapse, darkTheme } = props;
    

    return (
        <React.Fragment>
            <div onClick={closeNftCollapse} className="marketplace">
                <Login />
            </div>
        </React.Fragment>
    );
};

export default LogIn;
