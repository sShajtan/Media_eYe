import React from "react";
import GallereyHeader from "../components/ContentMarketplace/MarketplaceHeader/GallereyHeader.js";
import MarketplaceMain from "../components/ContentMarketplace/MarketplaceMain/MarketplaceMain";


const NftMarketplace = (props) => {
    const { closeNftCollapse, darkTheme } = props;

    return (
        <React.Fragment>
            <div onClick={closeNftCollapse} className="marketplace">
                <GallereyHeader darkTheme={darkTheme} />
                <MarketplaceMain />
            </div>
        </React.Fragment>
    );
};

export default NftMarketplace;
