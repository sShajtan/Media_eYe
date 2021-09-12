import React from "react";
import MarketplaceHeader from "../components/ContentMarketplace/MarketplaceHeader/NftMarketplaceHeader.js"; 
import MarketplaceMain from "../components/ContentMarketplace/MarketplaceMain/MarketplaceMain";
import MarketplaceSlider from "../components/ContentMarketplace/MarketplaceSlider/MarketplaceSlider";


const NftMarketplace = (props) => {
    const { closeNftCollapse, darkTheme } = props;

    return (
        <React.Fragment>
            <div onClick={closeNftCollapse} className="marketplace">
                <MarketplaceHeader darkTheme={darkTheme} />
                <MarketplaceSlider title={'Popular NFT'} />
                <MarketplaceSlider title={'Featured NFT'} />
                <MarketplaceMain title={'NFT Marketplace'} />
            </div>
        </React.Fragment>
    );
};

export default NftMarketplace;
